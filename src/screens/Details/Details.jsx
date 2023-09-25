import { View, Text, Image } from 'react-native'
import React from 'react'
import { Header } from '../../components'
import styles from './DetailsStyle'
import products from '../../data/products'



const Details = ({route}) => {

  const {products} = route.params

  return (
    <View style={styles.container}>
     <Header title={'Producto detalle'}/>
  <Image style= {styles.image} source={{uri: products.images[0]}}/>
     <Text style= {styles.nombre}>{products.title}</Text>
     <Text style= {styles.desc}>{products.description}</Text>
  <Text style= {styles.precio}>{'$'+products.price}</Text>
    </View>
  )
}

export default Details