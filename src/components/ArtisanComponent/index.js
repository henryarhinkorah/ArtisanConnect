import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const ArtisanComponent = ({ item, navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('ArtisanType', { itemId: item.id, itemName: item.name })}>
        <View style={styles.ComponentContainer}>
          <Image source={{ uri: item.image }} style={styles.ComponentImage} />
          <Text>{item.name}</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 10,
    padding: 29,
  },
  ComponentImage: {
    height: 70,
    width: 70,
  },
  ComponentContainer: {
    textAlign: 'center',
    alignItems: 'flex-start',
    justifyContent: 'center',
  }
})

export default ArtisanComponent
