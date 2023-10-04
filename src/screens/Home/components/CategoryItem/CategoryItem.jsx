import { Pressable, Text, useWindowDimensions } from 'react-native'

import { Card } from '../../../../components'
import React from 'react'
import styles from './CategoryItem.style'
import { useDispatch } from 'react-redux'
import { setcategoryselected } from '../../../../features/shop/shopSlice'

const CategoryItem = ({ category, navigation }) => {
const dispathc = useDispatch()

  return (
   
    <Pressable onPress={() =>{
      dispathc(setcategoryselected(category))
      navigation.navigate('Products', {category})}}>
      <Card style={styles.cardContainer}>

        <Text style={styles.text}>{category}</Text>
      </Card>
    </Pressable>
  )
}

export default CategoryItem
