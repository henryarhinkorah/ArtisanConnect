import { StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native'
import React from 'react'
import ProfileOptionsComponent from '../../components/ProfileOptionsComponent';
import {AntDesign} from '@expo/vector-icons'; 

const ProfileScreen = () => {
  return (
    <View style ={styles.container}>
      
                <View style ={styles.header}>
               
                <Image
                                    source={{uri:'https://th.bing.com/th?id=OIP.84phROyN5bP99IUgGSks2AHaFZ&w=292&h=213&c=8&rs=1&qlt=90&o=6&dpr=1.4&pid=3.1&rm=2' }}
                                    style={styles.ProfilePic}/>

            <TouchableOpacity> 
                <View style={styles.EditContainer}>

                        <AntDesign name ='edit' color='black' size={22} marginLeft={8}/>
                </View>
            </TouchableOpacity>

                <Text style ={styles.username}>Henry Arhinkorah</Text>
      </View>

      <View style ={styles.container2}>

      <ProfileOptionsComponent iconName="edit" text="Edit Profile" iconLibrary="AntDesign" color="black" />
      <ProfileOptionsComponent iconName="lock-closed-outline" text="Change password" iconLibrary="Ionicons" color="black" />
      <ProfileOptionsComponent iconName="email-outline" text="Change Email address" iconLibrary="MaterialCommunityIcons" color="black" />
      <ProfileOptionsComponent iconName="settings" text="Settings" iconLibrary="Ionicons" color="black" />
      <ProfileOptionsComponent iconName="logout" text="Logout" iconLibrary="MaterialIcons" color="red" />
      
      </View>
    </View>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({

    container:{
        flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    },
    header:{
        width:'100%',
        backgroundColor:'black',
        height:300,
        
        justifyContent:'center',
        alignItems:'center'
    },

    ProfilePic:{
        borderRadius:100,
        height:130,
        width:130,
        borderColor:'white',
        borderWidth:2,
        marginTop:-50,
      
        
    },
    username:{
        color:'white',
        fontSize:20
    },

    EditContainer:{
        backgroundColor:'white',
        height:40,
        width:40,
        borderRadius:20,
        marginTop:-35,
        marginLeft:70,
        justifyContent:'center',
        marginBottom:10,
        
    },

    container2:{
        width:'90%',
        height:'70%',
       backgroundColor:'white',
       marginLeft:0,
       borderRadius:15,
     
       marginTop:-75,
       
        
    }
})