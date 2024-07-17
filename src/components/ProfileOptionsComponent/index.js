import { StyleSheet, Text, View,TouchableOpacity} from 'react-native'
import React,{Component} from 'react'
import { Ionicons } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import {MaterialIcons} from '@expo/vector-icons'; 
import {AntDesign} from '@expo/vector-icons'; 

class ProfileOptionsComponent extends Component{
    render() {
        const {text,iconLibrary,iconName,color} = this.props

        let IconComponent = null;

    // Determine which icon library to use based on the prop
    switch (iconLibrary) {
      case 'Ionicons':
        IconComponent = Ionicons;
        break;
        case 'AntDesign':
            IconComponent = AntDesign;
            break;
      case 'MaterialCommunityIcons':
        IconComponent = MaterialCommunityIcons;
        break;
      case 'MaterialIcons':
        IconComponent = MaterialIcons;
        break;
      // Add more cases as needed for additional icon libraries
      default:
        IconComponent = Ionicons; // Default to Ionicons


    }

        return(
            <View style = {styles.container}>
                 <TouchableOpacity style={styles.button}>
                 <IconComponent name={iconName} size={30} color={color} style={styles.iconStyles} />  

 
                    <Text style = {[styles.text,{color} ]}  > {text} </Text>
                    
                   
                </TouchableOpacity>
            
            </View>
        )
    }
}


const styles = StyleSheet.create({

    container:{
            width:350,
            height:50,
            marginTop:0,
            flexDirection:' row',
            justifyContent: 'flex-start',
            padding: 10,
            marginTop:25

       
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    iconStyles:{
        marginRight: 10,
    },

    text: {
        
        fontSize: 18,
        
        
        
      },

    });
   
   
      
    

export default ProfileOptionsComponent;