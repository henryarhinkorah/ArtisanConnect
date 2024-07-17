import { Text, View,Image,TextInput, Button, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import {styles} from './styles'


 
  const LoginScreen = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
 
    const handleLogin = () => {
      console.log('Username:', username);
      console.log('Password:', password);
      navigation.navigate('MainCont');

    };
  
 
  return (

    
    <View style ={styles}>
      <Text style ={styles.LogoText}>ArtisansConnect</Text>

      <Image
      source={{
        uri:
        'https://th.bing.com/th/id/R.38eb8c8a4c384ebc6fc275586f008f28?rik=Huv2VGkuZPvgzw&riu=http%3a%2f%2fcdn.onlinewebfonts.com%2fsvg%2fimg_410957.png&ehk=WlcjOEsrubQ49chQ5BY7uydl3rflPxSkUZ%2fatc7thzg%3d&risl=&pid=ImgRaw&r=0',
      }}
      style={styles.logo}>
      </Image>

      <Text style ={styles.loginText}>Login</Text>
      <Text style ={styles.PleaseText}>Please sign in to continue</Text>


      <View style={styles.container}>
          <TextInput
            style={styles.input}
            placeholder="Username"
            value={username}
            onChangeText={setUsername}
           
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry={true}
            value={password}
            onChangeText={setPassword}
          />
          
          
      </View>

      <Text style = {styles.forgotPasswordText}> Forgot Password? </Text>
      
      <TouchableOpacity style ={styles.LoginButton} onPress={handleLogin}>
            <Text style = {styles.LoginButtonText}> Login </Text>
            
          </TouchableOpacity>
    </View>
  )
}



export default LoginScreen;