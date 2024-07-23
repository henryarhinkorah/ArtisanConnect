import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const SenderMessageContainer = () => {
  return (
    <View style ={styles.container}>
        <Text style ={styles.message}>Hi</Text>
        <View style={styles.timeContainer}>
        <Text style={styles.time}>21:30</Text>
        </View>
        

    </View>
  )
}

export default SenderMessageContainer

const styles = StyleSheet.create({
    container:{
        width:'40%',
        height:40,
        backgroundColor:'white',
        marginTop:20,
        marginLeft:8,
        borderTopRightRadius:15,
        borderBottomLeftRadius:15,
        borderBottomRightRadius:15,
        padding:5,
        
        justifyContent:'center',
        

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
    message:{
        color:'black',
        fontSize:17,
        marginLeft:7,
        marginTop:10,
    },

time:{
    fontSize:11,

},
timeContainer:{
    alignItems:'flex-end',
    marginRight:5,
    marginBottom:5,
}
})