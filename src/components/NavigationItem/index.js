import { StyleSheet, Text, View,TouchableOpacity} from 'react-native'
import React,{Component} from 'react'
import { Ionicons } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import {MaterialIcons } from '@expo/vector-icons'; 
import { NavigationContainer, useNavigationState,useNavigation,navigation} from '@react-navigation/native';


class NavigationItem extends Component{

  
    render() {
        const {icon,text,marginLeftValue,iconDirectory} = this.props

        let IconComponent = null;

    // Determine which icon library to use based on the prop
    switch (iconDirectory) {
      case 'Ionicons':
        IconComponent = Ionicons;
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

          
            <View style = {[styles.container,{ marginLeft: marginLeftValue },iconDirectory]} >
                <TouchableOpacity style ={styles.d} > 
                    <IconComponent name = {icon} size ={20} color='white'
                    

/>                      
                    <Text style = {styles.text}> {text} </Text>
                    
                </TouchableOpacity>
            
            </View>
        )
    }
}


const styles = StyleSheet.create({

    container:{
        flexDirection: 'column',
        padding:5,
       
    },

    text: {
        
        fontSize: 11,
        color:'white',
        
        
      },
      
      d:{
        alignItems:'center'
      }
})

export default NavigationItem;