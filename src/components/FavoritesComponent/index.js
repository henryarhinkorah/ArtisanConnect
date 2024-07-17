import { StyleSheet, Text, View,Image, TouchableOpacity} from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'; 

const FavoritesComponent = ({item}) => {
  return (

    
    <View style ={styles.container}>
     
     <Image
            source={{uri:item.image }}
            style={styles.Picture}/>

                  <Text style={styles.profession} >{item.profession}</Text>
                  < Ionicons name = {'star'} size ={22} color='green' marginLeft={295} marginTop={-25}
                  />
             
              <View style = {styles.NameLocation}> 
                <Text style={styles.name} >{item.name}</Text>
                <Text style={styles.location} >{item.location}</Text>
              </View>

      <View style ={styles.TextCall}>
       
      <TouchableOpacity onPress={() => console.log("Text pressed")}>
           <Text style ={styles.Text}>Text</Text>  
       </TouchableOpacity>

       <TouchableOpacity onPress={() => console.log("Call pressed")}>
          <Text style ={styles.Call}>Call</Text>
        </TouchableOpacity>
       
      </View>
    </View>
    
  )
}

export default FavoritesComponent

const styles = StyleSheet.create({
    container:{
            width:350,
            height:130,
            borderWidth:0.2,
            borderColor:'black',
            borderRadius:10,
            margintop:200,
            marginTop:10,
          alignSelf:'center',
          backgroundColor:'#fafaf8', 
          flexDirection:'column',
         
          shadowOpacity:0.9,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.2,
          shadowRadius: 2,
          elevation: 5,
  
  },

  containerShadow:{
            
   
  },
    

    Picture:{
        width:130,
        height:130,
        overflow: 'hidden',
       
    },

    profession:{
            fontSize:20,
            marginLeft:140,
            marginTop:-110
    },
    name:{
      marginLeft:140,
      fontSize:12,
    },

    location:{
      marginLeft:7,
      fontSize:12,
    },

    NameLocation:{
      flexDirection:'row'
    },

    Text:{
      marginTop:30,
      marginLeft:150,
      
    },

    Call:{
      marginTop:30,
      marginLeft:100,
    },

    TextCall:{
      flexDirection:'row'
    },


})