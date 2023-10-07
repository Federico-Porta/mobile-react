import { Image, Pressable, Text, View } from 'react-native'

import Feather from '@expo/vector-icons/Feather'
import React from 'react'
import styles from './CartItem.styles'

const Cartitem = ({item}) => {

  const subtotal= item.quantity*item.price 
  return (
    <View style={styles.container}>
      <View>
        <Image
          style={styles.image}
          source={{
            uri: item.images[0],
          }}
        />
      </View>
      <View>
        <Text style={styles.name}>{item.title}</Text>
      </View>
      <View style={styles.details}>
        <View>
          <Text>Cantidad: {item.quantity}</Text>
          <Text>Precio Unitario${item.price}</Text>
          <Text>total por unidad ${subtotal}</Text>
        </View>
        <Pressable>
          <Feather name="trash" size={24} color={'red'} />
        </Pressable>
      </View>
    </View>
  )
}

export default Cartitem
