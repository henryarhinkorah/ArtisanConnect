import { StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons,Ionicons } from '@expo/vector-icons'; 

const ArtisanTypeOptionsComponent = () => {
  return (
  
    <View> 
     <View style = {styles.container}>
     
            <View style ={styles.pic1to3}> 
                        <Image
                                source={{uri:'https://th.bing.com/th/id/OIP.rZzEH4Nr9iXyPV_hyhvlqwHaJ4?w=160&h=214&c=7&r=0&o=5&dpr=1.4&pid=1.7' }}
                                style={styles.pic1}/>

                    <View > 
                            <Image
                                    source={{uri:'https://th.bing.com/th/id/OIP.SKStI1HVbGxpzNWL-QM9SwAAAA?w=222&h=180&c=7&r=0&o=5&dpr=1.4&pid=1.7' }}
                                    style={styles.pic2}/>

                            <Image
                                    source={{uri:'https://th.bing.com/th/id/OIP.xxNVfVd5GtvC6TZ8uCxKHQHaFj?w=238&h=180&c=7&r=0&o=5&dpr=1.4&pid=1.7' }}
                                    style={styles.pic3}/>
                    </View>

            </View>
        
            <Image
                                    source={{uri:'https://th.bing.com/th?id=OIP.84phROyN5bP99IUgGSks2AHaFZ&w=292&h=213&c=8&rs=1&qlt=90&o=6&dpr=1.4&pid=3.1&rm=2' }}
                                    style={styles.ProfilePic}/>
            <Text style ={styles.name}>Henry Arhinkorah</Text>

            <View style ={styles.ArtisanInfo}>
                <Text style ={styles.ArtisanCategory}>3d Artist</Text>
                <Text style ={styles.dot}> • </Text>
                <Text style ={styles.Location}>Cantoments</Text>
            </View>

<Text style = {styles.about}> I do all kinds of bricklaying works...</Text>

<TouchableOpacity> 
<View style = {styles.TextFeature}>
    < MaterialCommunityIcons name = {'message-text-outline'} size ={22} color='black' marginLeft={75} marginTop={10}/>
    <Text style ={styles.Text}>Text</Text>
</View>
</TouchableOpacity>


<TouchableOpacity> 
<View style = {styles.TextFeature}>
    < Ionicons name = {'call'} size ={22} color='black' marginLeft={275} marginTop={-30}/>
    <Text style ={styles.Text} marginTop={-34} marginLeft={5}>Call</Text>
</View>
</TouchableOpacity>

    </View>

    </View>
  )
}

export default ArtisanTypeOptionsComponent

const styles = StyleSheet.create({


    container:{
        borderRadius:12,
        borderWidth:0.2,
        borderColor:'black',
        width:'90%',
        overflow: 'hidden',
        marginBottom:10,
        
       
        
      
        
    },

    pic1:{
        width:190,
        height:395,
        marginRight:5,
        overflow: 'hidden',

    },

    pic2:{
        width:190,
        height:190,
        marginBottom:5,
        overflow: 'hidden',

    },
    pic3:{
        width:190,
        height:200,
        overflow: 'hidden',

    },

    pic1to3:{
            flexDirection:'row'
    },

    ProfilePic:{
        height:50,
        width:50,
        borderRadius:30,
        marginLeft:10,
        marginTop:20
    },
    
    name:{
        fontSize:18,
        marginLeft:75,
        marginTop:-48
    },
    ArtisanInfo:{
        flexDirection:'row',
        marginTop:0,
        marginLeft:75
    },
    ArtisanCategory:{
        fontSize:13,
        opacity:0.7
    },
    Location:{
        fontSize:13,
        opacity:0.7,
    },
    dot:{
        fontSize:15,
       
        opacity:0.7
    },

    about:{
        fontSize:13,
        marginLeft:75,
        marginTop:2
    },
    TextFeature:{
        flexDirection:'row',
        marginTop:10,
    },
    Text:{
        fontSize:18,
        marginLeft:10,
        marginTop:8,
        
    }
   
})