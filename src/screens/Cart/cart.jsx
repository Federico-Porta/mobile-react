import { FlatList, Pressable, Text, View } from 'react-native';
import CartItem from './components/Cartitem';
import React, { useMemo } from 'react';
import styles from './Cart.styles';
import { useSelector } from 'react-redux';
import { usePostOrderMutation } from '../../services/shopApi';

const Cart = () => {
  const cart = useSelector((state) => state.cart.items);

  // Utiliza useMemo para calcular el total solo cuando cambia el carrito
  const total = useMemo(() => {
    return cart.reduce((acc, item) => acc + item.quantity * item.price, 0);
  }, [cart]);

  const [triggerPost, result] = usePostOrderMutation();

  const renderItem = ({ item }) => <CartItem item={item} />;

  const confirmCart = () => {
    triggerPost({ total, cart, user: "loggedUser" });
  };

  return (
    <View style={styles.container}>
      <View style={styles.listContainer}>
        <FlatList
          data={cart}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
        />
      </View>
      <View style={styles.totalContainer}>
        <View style={styles.totalLine}></View>
        <Text style={styles.totalText}>{`Total $${total}`}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Pressable onPress={confirmCart}>
          <Text>Confirm</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Cart;
