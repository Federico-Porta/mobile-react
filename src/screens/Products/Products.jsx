import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import { Header, SearchInput, Card } from '../../components'; 
import allProducts from '../../data/products';
import styles from './Products.style'; 

const Products = ({ route, navigation  }) => {
  const [arrProducts, setArrProducts] = useState([]);
  const [keyword, setKeyword] = useState('');
  const {category }= route.params

  useEffect(() => {
    if (category) {
      const products = allProducts.filter((product) => product.category === category);
      const productsFiltered = products.filter((product) =>
        product.title.includes(keyword)
      );
      setArrProducts(productsFiltered);
    } else {
      const productsFiltered = allProducts.filter((product) =>
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
          data={arrProducts}
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
