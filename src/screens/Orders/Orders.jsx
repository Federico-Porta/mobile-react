import React from 'react';
import { View, FlatList, Text, Image, ScrollView } from 'react-native';
import { useSelector } from 'react-redux';
import { useGetOrdersQuery } from '../../services/shopApi';
import { useState } from 'react';

const Orders = (navigation) => {
  const localId = useSelector((state) => state.auth.localId);
  const { data: userOrders, isLoading } = useGetOrdersQuery(localId);

  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    refetch().then(() => setRefreshing(false));
  };
  
  const userOrdersFiltered = userOrders
    ? Object.values(userOrders).filter((order) => order.user === localId)
    : [];

  return (
    <View style={styles.panta}>
      {isLoading ? (
        <Text>Loading...</Text>
      ) : userOrdersFiltered.length > 0 ? (
        <FlatList
          data={userOrdersFiltered}
          renderItem={({ item, index }) => (
            <View style={styles.orderContainer}>
              <Text style={styles.orderTitle}>{`Orden ${index + 1}`}</Text>
              <Text style={styles.orderTotal}>{`Total: $${item.total}`}</Text>
              <ScrollView>{console.log(item)}
                {item.cart.map((product, productIndex) => (
                  <View style={styles.productCard} key={product.id}>
                    <Image source={{ uri: product.thumbnail }} style={styles.productThumbnail} />
                    <Text style={styles.productItem}>{`Producto ${productIndex + 1}: ${product.title}`}</Text>
                    <Text style={styles.productPrice}>
                      {`Precio por unidad: $${product.price.toFixed(2)}`}
                    </Text>
                  </View>
                ))}
              </ScrollView>
            </View>
          )}
          keyExtractor={(item) => item.id}
        />
      ) : (
        <Text>No orders found for this user.</Text>
      )}
    </View>
  );
};

const styles = {
  panta: { flex: 1,
    backgroundColor: '#f5f6fa',
    paddingTop: 60 
  
  },
  orderContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 50,
    padding: 16,
    marginBottom: 12,
    elevation: 3,
  },
  orderTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  orderTotal: {
    fontSize: 16,
    color: '#FF0000',
  },
  productListTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 16,
  },
  productCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 16,
    marginBottom: 12,
    elevation: 3,
  },
  productThumbnail: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 16,
  },
  productItem: {
    fontSize: 16,
    color: '#333333',
  },
  productPrice: {
    fontSize: 16,
    color: '#FF0000',
  },
};

export default Orders;
