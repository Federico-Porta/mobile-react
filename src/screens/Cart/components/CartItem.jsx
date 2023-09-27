import { View, Text, Pressable } from 'react-native'
import React from 'react'
import Feather from '@expo/vector-icons/Feather'

const CartItem = () => {
  return (
    <View>
        <View>
            <Text>Nombre</Text>
        </View>
        <View>
            <View>
                <Text>Cantidad</Text>
                <Text>Precio</Text>
            </View> 
            <Pressable>
                <Feather name="trash" size={20} color='black'/>
            </Pressable>
        </View>
    </View>


  )
}

export default CartItem