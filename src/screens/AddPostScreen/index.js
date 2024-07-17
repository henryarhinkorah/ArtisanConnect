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
       
        
            <Text style ={styles.ImageText}>
                    Images
                </Text>
        
        
        <View style ={styles.ImageBox}>
           
           <TouchableOpacity> 
                <Ionicons name ='add-circle' size ={90} color='green'/>
            </TouchableOpacity>
        </View>


        <Text style ={styles.ImageText} >
                    Title:
         </Text>
      
        <TextInput
       style={styles.Titleinput}
       placeholder="Enter your text here"
      
       onChangeText={setText}
       />

    <Text style ={styles.ImageText} marginLeft={-300} >
                   About:
         </Text>
      
        <TextInput
       style={styles.Aboutinput}
       placeholder="Enter your text here"
       value={text}
       onChangeText={setText}
       />

    <TouchableOpacity style = {styles.NextContainer}> 
       
            <Text style ={styles.NextText}>Next</Text>
      
       
       </TouchableOpacity>
    </View>
  )
}

export default AddPostScreen

const styles = StyleSheet.create({


    container:{
        alignItems:'center'
    },

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
       textAlign:'center'

    },

    ImageBox:{
       height:200,
       width:370, 
       borderWidth:1,
       borderColor:'black',
       marginTop:10,
       alignItems:'center',
       justifyContent:'center',
       borderRadius:6,
    },
    ImageText:{
        marginLeft:-315,
        marginTop:30,
        fontSize:16
    },

    Titleinput: {
        height: 40,
        width: '90%',
        borderColor: 'gray',
        borderWidth: 1,
        paddingHorizontal: 10,
        marginTop: 0,
        borderRadius: 5,
      },

      Aboutinput:{
        height: 150,
        width: '90%',
        borderColor: 'gray',
        borderWidth: 1,
        paddingHorizontal: 10,
        marginTop: 0,
        borderRadius: 5
        
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

      NextText:{
        color:'white',
        fontSize:18
      }


})