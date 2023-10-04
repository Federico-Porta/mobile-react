import { View, Text, Image, Dimensions } from 'react-native'
import React from 'react'
import { Header } from '../../components'
import styles from './DetailsStyle'
import productsData from '../../data/products'
import Carousel, { Pagination } from 'react-native-snap-carousel';
import Counter from '../../components/Counter'
import { useSelector } from 'react-redux'

const { width: screenWidth } = Dimensions.get('window');

const Details = ({ route }) => {


  const counter = useSelector(state => state.counter.value)

  const { products } = route.params;
  const [activeSlide, setActiveSlide] = React.useState(0);

  const renderItem = ({ item }) => (
    <View>
      <Image style={styles.image} source={{ uri: item }} />
    </View>
  );

  return (
    <View style={styles.container}>
      <Header title={'Producto detalle'} />
      <Carousel
        data={products.images}
        renderItem={renderItem}
        sliderWidth={screenWidth}
        itemWidth={screenWidth}
        onSnapToItem={(index) => setActiveSlide(index)}
      />
      <Pagination
        dotsLength={products.images.length}
        activeDotIndex={activeSlide}
        containerStyle={{ marginTop: '-70%' }}
      />
      <Text style={styles.nombre}>{products.title}</Text>
      <Text style={styles.desc}>{products.description}</Text>
      <Text style={styles.precio}>{'$' + products.price}</Text>


    </View>
  );
}

export default Details;
