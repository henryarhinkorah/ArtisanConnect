import { StyleSheet, Text, View,FlatList } from 'react-native'
import React from 'react'
import FavoritesData from '../../data/FavoritesData'
import FavoritesComponent from '../../components/FavoritesComponent'

const FavoritesScreen = () => {
  return (
    <View>

      <View style = {styles.HeaderContainer}>
        <Text style = {styles.FavoritesText}> My Favorites</Text>
      </View>
      <FlatList
        data = {FavoritesData}
        renderItem={({item}) => <FavoritesComponent item = {item} />}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator = {false}
        contentContainerStyle={{ paddingBottom: 140}}
        
      />
    </View>
  )
}

export default FavoritesScreen

const styles = StyleSheet.create({

  HeaderContainer:{
    height:70,
    width:420,
   
    backgroundColor:'black',
    alignItems:'center',
    justifyContent:'center',
    marginLeft:-10
  },

  FavoritesText:{
    fontSize:28,
    color:'white',

    
  }
})