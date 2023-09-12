import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image } from 'react-native';
import { Header, SearchInput, Card } from '../../components'; // Asegúrate de importar el componente Card y otros componentes necesarios
import allProducts from '../../data/products';
import styles from './Products.style'; // Asegúrate de importar tus estilos

const Products = ({ category }) => {
  const [arrProducts, setArrProducts] = useState([]);
  const [keyword, setKeyword] = useState('');

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
            <Card style={styles.productCard}>
              <Image source={{ uri: item.thumbnail }} style={styles.productImage} />
              <Text style={styles.productTitle}>{item.title}</Text>
              <Text style={styles.productDescription}>{item.description}</Text>
              <Text style={styles.productPrice}>Price: ${item.price}</Text>
              <Text style={styles.productDiscount}>Discount: {item.discountPercentage}% off</Text>
              <Text style={styles.productRating}>Rating: {item.rating}</Text>
              <Text style={styles.productStock}>Stock: {item.stock} available</Text>
              <Text style={styles.productBrand}>Brand: {item.brand}</Text>
              {/* Puedes agregar más información si es necesario */}
            </Card>
          )}
          keyExtractor={(item) => item.id.toString()} // Convertir el ID a cadena
        />
      </View>
    </View>
  );
};

export default Products;
