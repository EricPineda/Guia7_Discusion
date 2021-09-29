import React from 'react';
import Perros from '../screens/Perros';
import Gatos from '../screens/Gatos';
import { Icon } from 'react-native-elements'
import { Image } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const Tab = createBottomTabNavigator();
export default function Navigation() {
    return (
        <Tab.Navigator screenOptions={{tabBarActiveTintColor: 'tomato'}} >
            <Tab.Screen name="perros" component={Perros} options={{ title: 'Perros', headerStyle: {
            backgroundColor: '#f4511e'
          }, headerTintColor: '#fff',
          headerTitleAlign: 'center',
          tabBarOptions: {
            style: {
              backgroundColor: '#2dcf58'
            }
          },
          tabBarIcon: ({ tintColor }) => (
        <Icon name='dog' type='font-awesome-5' color='#989c99' />
      ) }}  />
           <Tab.Screen name="gatos" component={Gatos} options={{ title: 'Gatos', headerStyle: {
            backgroundColor: '#f4511e'
          }, headerTintColor: '#fff',
          headerTitleAlign: 'center',
          tabBarOptions: {
            style: {
              backgroundColor: '#2dcf58'
            }
          },
          tabBarIcon: ({ tintColor }) => (
        <Icon name='cat' type='font-awesome-5' color='#989c99' />
      ) }}  />
           
        </Tab.Navigator>
    );
}

