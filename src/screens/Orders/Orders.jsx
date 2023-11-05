import React from 'react';
import { View, FlatList, Text, Image, ScrollView } from 'react-native';
import { useSelector } from 'react-redux';
import { useGetOrdersQuery } from '../../services/shopApi';

const Orders = () => {
  const localId = useSelector((state) => state.auth.localId);
  const { data: userOrders, isLoading } = useGetOrdersQuery(localId);


  
  // Filtrar las órdenes del usuario actual
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
              <ScrollView>
                {item.cart.map((product, productIndex) => (
                  <View style={styles.productCard} key={product.id}>
                    <View style={styles.productInfo}>
                      <Image source={{ uri: product.thumbnail }} style={styles.productThumbnail} />
                      <View style={styles.productDetails}>
                        <Text style={styles.productItem}>{`Producto ${productIndex + 1}:`}</Text>
                        <Text style={styles.productTitle}>{product.title}</Text>
                        <Text style={styles.productPrice}>
                          {`Precio por unidad: $${product.price.toFixed(2)}`}
                        </Text>
                      </View>
                    </View>
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
  panta: {
    flex: 1,
    backgroundColor: '#f5f6fa',
    paddingTop: 60,
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
  productCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 16,
    marginBottom: 12,
    elevation: 3,
  },
  productInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  productThumbnail: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 16,
  },
  productDetails: {
    flex: 1,
  },
  productItem: {
    fontSize: 16,
    color: '#333333',
  },
  productTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333333',
  },
  productPrice: {
    fontSize: 16,
    color: '#FF0000',
  },
};

export default Orders;
