import { ScrollView, StyleSheet, Text, View, } from 'react-native'
import React from 'react'
import MessageComponent from '../../components/MessageComponent'

const MessagesScreen = ({navigation}) => {
  return (

<View style ={styles.MainContainer}>
      
      <View style ={styles.headerContainer}>
        <Text style = {styles.HeaderText}> Messages </Text>
      </View>

<ScrollView style = {styles.ScrollviewStyles}>

<MessageComponent />
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

 ScrollviewStyles:{
 alignContent:'center'
 },
    messageContainer: {
        paddingVertical: 10,
      },
  

    headerContainer:{
        height:60,
        width:'100%',
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


    
})