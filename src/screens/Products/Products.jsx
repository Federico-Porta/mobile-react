import {FlatList, Image, SafeAreaView, Text, TouchableOpacity, View,} from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './Products.style'
import { useGetProductsByCategoryQuery } from '../../services/shopApi'
import { useSelector } from 'react-redux'

const Products = ({ navigation }) => {
  const category = useSelector(state => state.shop.categorySelected)
  const [keyword, setKeyword] = useState('')
  const [products, setProducts] = useState([])
  const { data, isLoading } = useGetProductsByCategoryQuery(category)

  useEffect(() => {
    if (!isLoading) {
      const dataArr = Object.values(data)
      setProducts(dataArr)
      const productsFiltered = dataArr.filter(product =>
        product.title.includes(keyword)
      )
      setProducts(productsFiltered)
    }
  }, [isLoading, keyword])

/*<SearchInput onSearch={setKeyword} />*/
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.listContainer}>
        {!isLoading && (
          <FlatList
            data={Object.values(data)}
            numColumns={1}
            columnWrapperStyle={styles.weapperStyle}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.productContainer}
                onPress={() =>
                  navigation.navigate('Details', { product: item })
                }
              >
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.rating}>{`Rating: ${item.rating}`}</Text>
                <Image
                  style={styles.image}
                  source={{
                    uri: item.images[0],
                  }}
                />
                
                <Text style={styles.price}>{`$${item.price.toFixed(2)}`}</Text>
                <Text style={styles.description}>{item.description}</Text>
                <Text style={styles.brand}>{`${item.brand}`}</Text>
              </TouchableOpacity>
            )}
            keyExtractor={item => item.id.toString()} 
          />
        )}
      </View>
    </SafeAreaView>
  );

}

export default Products
