import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import { Header, SearchInput, Card } from '../../components'; 
import allProducts from '../../data/products';
import styles from './Products.style'; 
import { useSelector } from 'react-redux';
import { useGetProductsByCategoryQuery } from '../../services/shopAPI';

const Products = ({  navigation  }) => {
  const category = useSelector(state=> state.shop.categoryselected)
  const [arrProducts, setArrProducts] = useState([]);
  const [keyword, setKeyword] = useState('');
  const {data, isLoading} = useGetProductsByCategoryQuery(category)
 

  useEffect(() => {
    if (data) {
      
      const productsFiltered = data.filter((product) =>
        product.title.includes(keyword)
      );
      setArrProducts(productsFiltered);
    } 
  }, [category, keyword]);

  return (
    <View style={styles.container}>
      <Header title={category} />
      <SearchInput onSearch={setKeyword} />
      <View style={styles.listContainer}>
        <FlatList
          data={Object.values(data)}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.productCard} onPress={() =>navigation.navigate('Details',{products: item}) }>
              <Image source={{ uri: item.thumbnail }} style={styles.productImage} />
              <Text style={styles.productTitle}>{item.title}</Text>
              <Text style={styles.productDescription}>{item.description}</Text>
              <Text style={styles.productPrice}>Price: ${item.price}</Text>             
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    </View>
  );
};

export default Products;
