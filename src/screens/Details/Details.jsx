import React, { useState } from 'react';
import { Image, SafeAreaView, Text, View, Pressable } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { addItem } from '../../features/cart/cartSlice';
import { useDispatch } from 'react-redux';
import styles from './Details.style';

const Details = ({ route }) => {
  const { product } = route.params;
  const dispatch = useDispatch();

  const [activeSlide, setActiveSlide] = useState(0);

  const handleAddToCart = () => {
    dispatch(addItem({ ...product, quantity: 1 }));
  };


  const renderImageItem = ({ item, index }) => (
    <Image
      style={styles.image}
      source={{ uri: item }}
      resizeMode="cover"
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>{product.title}</Text>
      <View style={styles.cardContainer}>
        <Text style={styles.rating}>{`Rating: ${product.rating}`}</Text>
        <Carousel
          data={product.images}
          renderItem={renderImageItem}
          sliderWidth={300}
          itemWidth={300}
          onSnapToItem={(index) => setActiveSlide(index)}
        />
        <Text style={styles.description}>{product.description}</Text>
        <Text style={styles.price}>{`$ ${product.price.toFixed(2)}`}</Text>
        <Text style={styles.stock}>{`Stock: ${product.stock}`}</Text>
        <Text style={styles.brand}>{`${product.brand}`}</Text>
        <Pressable onPress={handleAddToCart}>
          <Text style={styles.button}>Add to Cart</Text>
        </Pressable>
        <Text style={styles.activeSlide}>{`Image ${activeSlide + 1} of ${product.images.length}`}</Text>
      </View>
    </SafeAreaView>
  );
};

export default Details;
