import { Image, Pressable, SafeAreaView, Text, View } from 'react-native'
import { addItem } from '../../features/cart/cartSlice'
import React from 'react'
import styles from './Details.style'
import { useDispatch } from 'react-redux'

const Details = ({ route }) => {
  const { product } = route.params
  const dispatch = useDispatch()

  const handleAddToCart = () => {
    dispatch(addItem({...product, quantity: 1}))
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{ uri: product.images[0] }}
          resizeMode="cover"
        />
      </View>
      <Text style={styles.title}>{product.title}</Text>
      <Text>{product.description}</Text>
      <Text style={styles.price}>{`$ ${product.price}`}</Text>
      <Pressable onPress={handleAddToCart}>
        <Text style={styles.button}>Add to Cart</Text>
      </Pressable>
    </SafeAreaView>
  )
}

export default Details
