import { FlatList, Pressable, Text, View } from 'react-native';
import CartItem from './components/Cartitem';
import React, { useMemo } from 'react';
import styles from './Cart.styles';
import { useSelector } from 'react-redux';
import { usePostOrderMutation } from '../../services/shopApi';
import { useDispatch } from 'react-redux';
import { clearCart } from '../../features/cart/cartSlice';

const Cart = ({navigation}) => {
  const cart = useSelector((state) => state.cart.items);
  const localId = useSelector((state) => state.auth.localId); 

  const total = useMemo(() => {
    return cart.reduce((acc, item) => acc + item.quantity * item.price, 0);
  }, [cart]);

  const [triggerPost, result] = usePostOrderMutation();
  const dispatch = useDispatch();

  const renderItem = ({ item }) => <CartItem item={item} />;

  const confirmCart = () => {
    triggerPost({ total, cart, user: localId })
      .unwrap()
      .then(() => {
        dispatch(clearCart());
        navigation.navigate('Orders', { forceRefresh: new Date().getTime() });
      });
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
          <Text style={styles.confirm}>Confirm</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Cart;
