// components/CategoryItem.js

import React from 'react';
import { Pressable, Text, View, Image } from 'react-native';
import { setCategorySelected } from '../../../../features/shop/shopSlice';
import styles from './CategoryItem.style';
import { useDispatch } from 'react-redux';

const CategoryItem = ({ category, navigation }) => {
  const dispatch = useDispatch();

  return (
    <Pressable
      onPress={() => {
        dispatch(setCategorySelected(category.title));
        navigation.navigate('Products', { category });
      }}
      style={styles.card}
    >
      <View style={styles.cardContent}>
        {category.image && (
          <Image
            source={{ uri: category.image }}
            style={styles.categoryImage}
          />
        )}
        <Text style={styles.cardText}>{category.title}</Text>
      </View>
    </Pressable>
  );
};

export default CategoryItem;
