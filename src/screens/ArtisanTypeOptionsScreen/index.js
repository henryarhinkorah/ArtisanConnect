import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ArtisanTypeOptionsComponent from '../../components/ArtisanTypeOptionsComponent'

const ArtisanTypeOptionsScreen = ({ route, navigation }) => {
  const { itemName } = route.params;

  //to make artisanoptionsscreen header display the name of the clicked artisan
  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: itemName,
    });
  }, [navigation, itemName]);

  return (
    <View>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <ArtisanTypeOptionsComponent />
        <ArtisanTypeOptionsComponent />
        <ArtisanTypeOptionsComponent />
        <ArtisanTypeOptionsComponent />
        <ArtisanTypeOptionsComponent />
        
      </ScrollView>
    </View>
  )
}

export default ArtisanTypeOptionsScreen

const styles = StyleSheet.create({
  header: {
    width: 400,
    height: 100,
    justifyContent: 'center',
    marginTop: 30,
    alignItems: 'center'
  },
  BackArrow: {
    height: 50,
    width: 50,
    backgroundColor: 'transparent',
    marginLeft: -300,
    marginTop: 15,
  },
  ArtisanTypeText: {
    color: 'black',
    fontSize: 25,
    marginTop: -55,
  },
  scrollView: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
