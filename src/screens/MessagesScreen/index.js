import { ScrollView, StyleSheet, Text, View, } from 'react-native'
import React from 'react'
import MessageComponent from '../../components/MessageComponent'

const MessagesScreen = ({navigation,}) => {
  return (
    <View>
      
      <View style ={styles.header}>
        <Text style = {styles.HeaderText}> Messages </Text>
      </View>

    <View style ={styles.MessageCategory}>
         <Text style ={styles.ActiveText} >Active</Text>
         <Text style ={styles.ArchivedText}>Archived</Text>
         <Text style ={styles.SpamText}>Spam</Text>

    </View>

<ScrollView style ={styles.scroll}> 
    <MessageComponent/>
    <MessageComponent/>
    <MessageComponent/>
    <MessageComponent/>
    <MessageComponent/>
    <MessageComponent/>
    <MessageComponent/>
    <MessageComponent/>
    <MessageComponent/>
    <MessageComponent/>
    <MessageComponent/>
    
</ScrollView>
      
    </View>
  )
}

export default MessagesScreen

const styles = StyleSheet.create({

    header:{
        height:60,
        width:400,
        backgroundColor:'black',
        justifyContent:'center',
        textAlign:'center',
    },

    HeaderText:{
        color:'white',
        fontSize:25,
        fontWeight:'bold',
        textAlign:'center',
        

    },

    MessageCategory:{
        flexDirection:'row',
        height:50,
        width:400,
        
        
       
       

    },

    ActiveText:{
        fontSize:16,
        marginTop:20,
        marginLeft:25,
       textDecorationLine:'underline',
        
        
    },

    ArchivedText:{
        fontSize:16,
        marginTop:20,
        marginLeft:90,
       
      
    },

    SpamText:{
        fontSize:16,
        marginTop:20,
        marginLeft:90,
       
    },
    
})