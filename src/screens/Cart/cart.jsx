import { FlatList, Pressable, Text, View } from 'react-native'
import CartItem from './components/CartItem'
import React from 'react'
import dataCart from '../../data/dataCart'
import styles from './Cart.styles'
import { useSelector } from 'react-redux'
import { usePostOrderMutation } from '../../services/shopApi'

const Cart = () => {
  
  const cart = useSelector(state => state.cart.items)
  const total = useSelector(state => state.cart.total)

const [triggerPost, result] = usePostOrderMutation()

const renderItem = ({item}) => <CartItem item={item}/>

const confirmCart = () =>{
  triggerPost({total,cart, user: "loggedUser"})

}


  return (
    <View style={styles.container}>
      <View style={styles.listContainer}>
        <FlatList
          data={cart}
          keyExtractor={item => item.id}
          renderItem={renderItem}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Pressable onPress={confirmCart}>
          <Text>Confirm</Text>
          <View>
            <Text>{`Total $${total}`}</Text>
          </View>
        </Pressable>
      </View>
    </View>
  )
}

export default Cart
