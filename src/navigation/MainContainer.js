import { View, Text } from 'react-native'
import * as React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons'

import AddPostScreen from '../screens/AddPostScreen'
import FavoritesScreen from '../screens/FavoritesScreen'
import HomepageScreen from '../screens/HomepageScreen'
import MessagesScreen from '../screens/MessagesScreen'
import ProfileScreen from '../screens/ProfileScreen'
//screen names

const AddPostScreenName ='Add Post'
const FavoritesScreenName ='Favorites'
const HomepageScreenName ='Home'
const MessagesName ='Messages'
const ProfileName ='Profile'


const Tab = createBottomTabNavigator()


export default function MainContainer() {
  return (
     //  <NavigationContainer>

            <Tab.Navigator initialRouteName ={'Home'}
            screenOptions ={({route}) => ({
                tabBarIcon: ({focused,color,size}) => {
                    let iconName;
                    let rn =route.name

                    if (rn ===AddPostScreenName){
                        iconName =focused? 'add-circle' : 'add-circle-outline'
                    }else if (rn ===FavoritesScreenName){
                        iconName =focused? 'star' : 'star-outline'
                     }else if (rn ===HomepageScreenName){
                        iconName =focused? 'home' : 'home-outline'
                     }
                    else if (rn ===MessagesName){
                    iconName =focused? 'chatbubbles-sharp' : 'chatbubbles-outline'
                    }
                    else if (rn ===ProfileName){
                        iconName =focused? 'person' : 'person-outline'
                        }

                return <Ionicons name ={iconName} size = {size} color ={color} />
            },
            headerShown: false,
            tabBarActiveTintColor: 'black',
            tabBarInactiveTintColor: 'grey',
            tabBarLabelStyle:{fontSize:12}
            })}
            >

             <Tab.Screen name ={HomepageScreenName} component ={HomepageScreen} /> 
             <Tab.Screen name ={MessagesName} component ={MessagesScreen} /> 
             <Tab.Screen name ={AddPostScreenName} component ={AddPostScreen} />
             <Tab.Screen name ={FavoritesScreenName} component ={FavoritesScreen} />  
             <Tab.Screen name ={ProfileName} component ={ProfileScreen} />   
               

            </Tab.Navigator>
    // </NavigationContainer>
  )
}