import { StyleSheet, Text, View,Image,TextInput,TouchableOpacity} from 'react-native'
import React, { useState } from 'react'
import {Ionicons} from '@expo/vector-icons'; 


const CustomTextInput = ({ placeholder, icon, value, onChangeText,secureTextEntry  }) => {
  return (
    <View style={styles.container2}>
      <Ionicons name={icon} size={20} color="#000" style={styles.icon} />
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry} 
      />
    </View>
  );
};



const RegisterScreen = ({navigation}) => {
 
  const [text, setText] = useState('');
  const [password, setPassword] = useState('');
 
  return (
    
    <View style ={styles.container}>

    <View style ={styles.PicContainer}>
      <Image
      source={{
        uri:
          'https://img.freepik.com/premium-vector/illustration-create-account-flat-design_9206-3013.jpg',
      }}
      style={styles.pic}
    ></Image>

  </View>
     
    <View style ={styles.InfoCont}>
        <Text style ={styles.CreateAcc}>Create Account</Text>
        <Text style ={styles.PleaseCreate}>Please create an account to login</Text>
         
        <CustomTextInput
        placeholder="Username"
        icon="person-outline"
        value={text}
        onChangeText={setText}
      />
   
   <CustomTextInput
        placeholder="Mobile number"
        icon="call-outline"
        value={text}
        onChangeText={setText}
      />

    <CustomTextInput
        placeholder="Password"
        icon="lock-closed-outline"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
      />

<Text style ={styles.RememberText}>Remember me next time</Text>
    </View>

    <TouchableOpacity style = {styles.CreateAccContainer}  onPress={() =>
          navigation.navigate('MainCont')}>  
       <Text style ={styles.CreateAccText}>Create Account</Text>
    </TouchableOpacity>

  <View flexDirection={'row'}   justifyContent={'center'}>
    <Text>Already have an account?</Text>
    <Text style = {styles.loginText}>Log in</Text>
  </View>
    
    
   
    </View>
  )
}

export default RegisterScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        backgroundColor:'white',
       

    },
    pic:{
        height:200,
        width:200,
        marginTop:40,
    },
    InfoCont:{
      alignItems:'flex-start',
      width:'100%',
      

    },
    CreateAcc:{
        fontSize:28,
        fontWeight:'bold',
        marginTop:20,
        marginLeft:25,
        
        

    },
    PleaseCreate:{
        fontSize:15,
        marginLeft:25,
        marginTop:7,

    },
   
    icon: {
      marginRight: 10,
    },
    input: {
      flex: 1,
      fontSize: 16,
    },
    container2: {
      flexDirection: 'row',
      alignItems: 'center',
     borderWidth:1,
      borderColor: '#ccc',
      paddingVertical: 5,
      height: 40,
      width: '80%',
      marginTop: 30,
      borderRadius: 19,
      marginLeft:25,
      padding:8,

      
    },
    RememberText:{
      marginLeft:25,
      marginTop:10,
      fontWeight:"500"
    },

    CreateAccContainer:{
      height: 40,
      width: '90%',
      backgroundColor:'black',
      marginTop:40,
      borderRadius:20,
      alignItems:'center',
      justifyContent:'center',
      marginBottom:20,

    },
    CreateAccText:{
      color:'white',
      fontSize:18
    },
    loginText:{
      
      color: 'blue',
      textDecorationLine: 'underline',
      
    },
    


})