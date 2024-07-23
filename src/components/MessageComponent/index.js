import { StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';


const MessageComponent = () => {
    const navigation = useNavigation(); // Get the navigation prop using the hook
 
    return (
    <TouchableOpacity  onPress={() =>
        navigation.navigate('MessagingScreen')}> 
 
  
  <View style = {styles.ComponentContainer}>
  <Image
            source={{uri:'https://www.bing.com/th?id=OIP.L8bs33mJBAUBA01wBfJnjQHaHa&w=150&h=150&c=8&rs=1&qlt=90&o=6&dpr=1.4&pid=3.1&rm=2'}}
            style={styles.picture}/>

    <Text style= {styles.name}>Michael Watson</Text>

    </View>
    <Text style ={styles.MessagePreview}> How much for the painting?</Text>
  
   <View style = {styles.SecondaryDetails}>
        <Text style = {styles.time}> 2:30pm</Text>
            
            <View style ={styles.MessageCountBackground}> 
            <Text style ={styles.MessageCount}>2</Text>
           
    </View> 
   
    </View>
   
    
     
    </TouchableOpacity>
  )
}

export default MessageComponent

const styles = StyleSheet.create({

    picture:{
        height:50,
        width:50,
        borderRadius:30,
        marginLeft: 25,
        marginTop:5
    },
    
    ComponentContainer:{
        
        flexDirection:'row',
        height:70,
        borderBottomWidth:0.3,
        marginBottom:5,
        width:'100%',
        marginTop:15,
        backgroundColor:'white',
      
        

    },

    name:{
        fontSize:18,
        fontWeight:'500',
        marginLeft:10,
        marginTop:10
    },
    
    MessagePreview:{
        marginLeft:82,
        fontWeight:'300',
        fontStyle:'italic',
        marginTop:-40,
       
    },
    time:{
        fontSize:13,
        marginTop:-45,
        
    },

    MessageCount:{
            fontSize:13,
            fontWeight:'900',
            color:'white',
           marginLeft:8,
           marginTop:3
            
            
    },

    MessageCountBackground:{
        backgroundColor:'black',
       width:25,
       height:25,
       borderRadius:20,
       marginTop:5,

    },

    SecondaryDetails:{
        flexDirection: 'column',
    alignItems: 'flex-end',
    marginRight: 10, 
    }
})