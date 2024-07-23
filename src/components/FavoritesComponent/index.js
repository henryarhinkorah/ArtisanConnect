import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'; 

const FavoritesComponent = ({ item }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: item.image }} style={styles.Picture} />

      <View style={styles.detailsContainer}>
        <Text style={styles.profession}>{item.profession}</Text>
        <View style={styles.iconContainer}>
          <Ionicons name='star' size={22} color='green' />
        </View>

        <View style={styles.NameLocation}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.location}>{item.location}</Text>
        </View>

        <View style={styles.TextCall}>
          <TouchableOpacity onPress={() => console.log("Text pressed")}>
            <Text style={styles.Text}>Text</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => console.log("Call pressed")}>
            <Text style={styles.Call}>Call</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default FavoritesComponent

const styles = StyleSheet.create({
  container: {
    width: '90%',
    height: 130,
    borderWidth: 0,
    borderColor: 'black',
    borderRadius: 10,
    marginTop: 10,
    alignSelf: 'center',
    backgroundColor: '#fafaf8', 
    flexDirection: 'row',
    overflow: 'hidden',
    shadowOpacity: 0.9,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 5,
  },

  Picture: {
    width: 130,
    height: 130,
  },

  detailsContainer: {
    flex: 1,
    paddingLeft: 10,
  },

  profession: {
    fontSize: 20,
    marginTop: 10,
  },

  iconContainer: {
    position: 'absolute',
    top: 10,
    right: 10,
  },

  NameLocation: {
    flexDirection: 'row',
    marginTop: 5,
  },

  name: {
    fontSize: 12,
  },

  location: {
    fontSize: 12,
    marginLeft: 7,
  },

  TextCall: {
    flexDirection: 'row',
    marginTop: 20,
  },

  Text: {
    marginLeft: 10,
  },

  Call: {
    marginLeft: 30,
  },
})
