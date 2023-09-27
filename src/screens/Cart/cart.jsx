import { View, Text, FlatList, Pressable } from 'react-native'
import React from 'react'
import cartdata from '../../data/cartdata'
import CartItem from './components/CartItem'

const cart = () => {
const renderItem = () => (<CartItem/>)

  return (
    <View>
     <View>
      <FlatList 
      data={cartdata} 
      keyExtractor={item => item.id} 
      renderItem={renderItem} />
     </View>
     <View>
      <Pressable>
        <Text style={{color:'black', fontSize:20}}>Checkout</Text>
      </Pressable>
     </View>
    </View>
  )
}

export default cart