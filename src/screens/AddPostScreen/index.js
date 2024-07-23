import { StyleSheet, Text, View,TouchableOpacity,TextInput } from 'react-native'
import React, { useState } from 'react'
import {Ionicons} from '@expo/vector-icons'; 


const AddPostScreen = () => {
    const [text, setText] = useState('');
    
  return (
    <View style ={styles.container}>

        <View style ={styles.header}>
            <Text style ={styles.HeaderText}> Add post</Text>
        </View>
       
  <View style ={styles.inputContainer}>
           
       <Text style ={styles.ImageText}>Images:</Text>
        <View style ={styles.ImageBox}>
           
           <TouchableOpacity> 
                <Ionicons name ='add-circle' size ={90} color='green'/>
            </TouchableOpacity>
        </View>
  </View>

  <View style ={styles.inputContainer}>
        <Text style ={styles.ImageText} >Title: </Text>
      
        <TextInput
       style={styles.Titleinput}
       placeholder="Enter your text here"
      
       onChangeText={setText}
       />
   </View>

  <View style ={styles.inputContainer}>
    <Text style ={styles.ImageText} marginLeft={20}> About:</Text>
      
        <TextInput
       style={styles.Aboutinput}
       placeholder="Enter your text here"
       value={text}
       onChangeText={setText}
       />
  </View>
    <TouchableOpacity style = {styles.NextContainer}> 
       
            <Text style ={styles.PostText}>Post</Text>
      
       
       </TouchableOpacity>
    </View>
  )
}

export default AddPostScreen

const styles = StyleSheet.create({


    container:{
        alignItems:'center',
        justifyContent:'center',
    },

    header:{
        height:60,
        width:'100%',
        backgroundColor:'black',
        justifyContent:'center',
        textAlign:'center',
    },

    HeaderText:{
        color:'white',
        fontSize:25,
       textAlign:'center'

    },

    ImageBox:{
       height:200,
       width:'90%', 
       borderWidth:1,
       borderColor:'black',
       marginTop:10,
       alignItems:'center',
       justifyContent:'center',
       borderRadius:6,
       marginLeft:20,
    },
    ImageText:{
        marginTop:30,
        fontSize:16,
        marginLeft:20,
    },

    Titleinput: {
        height: 40,
        width: '90%',
        borderColor: 'gray',
        borderWidth: 1,
        paddingHorizontal: 10,
        marginTop: 0,
        borderRadius: 5,
        marginLeft:20,
      },

      Aboutinput:{
        height: 150,
        width: '90%',
        borderColor: 'gray',
        borderWidth: 1,
        paddingHorizontal: 10,
        marginTop: 0,
        borderRadius: 5,
        marginLeft:20,
      },

      NextContainer:{
        height: 40,
        width: '90%',
        backgroundColor:'black',
        marginTop:40,
        borderRadius:20,
        alignItems:'center',
        justifyContent:'center'

      },

      PostText:{
        color:'white',
        fontSize:18
      },
      inputContainer:{
        width: '100%',
      
        
        
      }


})