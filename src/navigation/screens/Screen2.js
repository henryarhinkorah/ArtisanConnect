import { View, Text } from 'react-native'
import * as React from 'react'

export default function Screen2({navigation}) {
  return (
    <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
      <Text 
         style ={{fontSize:26, fontWeight:'bold',color:'black'}}>Screen2</Text>
    </View>
  )
}