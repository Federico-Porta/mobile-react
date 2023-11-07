import React from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import { useDispatch } from 'react-redux';
import {removeItem} from '../../../features/cart/cartSlice';
import styles from './CartItem.styles';

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const subtotal = item.quantity * item.price;

  const handleRemoveFromCart = () => {
    dispatch(removeItem(item.id));
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{
            uri: item.images[0],
          }}
        />
      </View>
      <View style={styles.itemDetails}>
        <Text style={styles.name}>{item.title}</Text>
        <View style={styles.details}>
          <Text>Cantidad: {item.quantity}</Text>
          <Text>Precio Unitario: ${item.price}</Text>
          <Text>Total por unidad: ${subtotal}</Text>
        </View>
      </View>
      <Pressable style={styles.deleteButton} onPress={handleRemoveFromCart}>
        <Feather name="trash" size={24} color={'#FF0000'} />
      </Pressable>
    </View>
  );
};

export default CartItem;
