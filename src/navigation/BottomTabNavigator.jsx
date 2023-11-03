import React from 'react';
import { StyleSheet, View } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CartNavigator from './CartNavigator';
import OrdersNavigator from './OrdersNavigator';
import ProfileNavigator from './ProfileNavigator';
import StackNavigator from './StackNavigator';
import { colors } from '../constants/colors';

const BottomTab = createBottomTabNavigator();

function BottomTabNavigator() {
  return (
    <BottomTab.Navigator
      initialRouteName="Shop"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar,
      }}
    >
      <BottomTab.Screen
        name="Shop"
        component={StackNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={[styles.iconContainer, focused && styles.iconContainerFocused]}>
              <FontAwesome5
                name="shopping-bag"
                size={24}
                color={focused ? colors.primary : '#999'}
                style={focused && styles.iconFocused}
              />
            </View>
          ),
        }}
      />
      <BottomTab.Screen
        name="CartNav"
        component={CartNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={[styles.iconContainer, focused && styles.iconContainerFocused]}>
              <FontAwesome5
                name="shopping-cart"
                size={24}
                color={focused ? colors.primary : '#999'}
                style={focused && styles.iconFocused}
              />
            </View>
          ),
        }}
      />
      <BottomTab.Screen
        name="OrdersNav"
        component={OrdersNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={[styles.iconContainer, focused && styles.iconContainerFocused]}>
              <FontAwesome5
                name="list"
                size={24}
                color={focused ? colors.primary : '#999'}
                style={focused && styles.iconFocused}
              />
            </View>
          ),
        }}
      />
      <BottomTab.Screen
        name="ProfileNav"
        component={ProfileNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={[styles.iconContainer, focused && styles.iconContainerFocused]}>
              <FontAwesome5
                name="user"
                size={24}
                color={focused ? colors.primary : '#999'}
                style={focused && styles.iconFocused}
              />
            </View>
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: '#fff',
    minHeight :110,
  },
  iconContainer: {
    backgroundColor: '#ddd',
    borderRadius: 20,
    padding: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
  },
  iconContainerFocused: {
   
    backgroundColor: '#999', 
    shadowColor: '#888', 
    shadowOpacity: 0.9, 
  },
  iconFocused: {
    shadowColor: '#000', 
    shadowOpacity: 0.2, 
  },
});

export default BottomTabNavigator;
