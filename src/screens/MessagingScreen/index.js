import { StyleSheet, Text, View, Image, TouchableOpacity,TextInput, KeyboardAvoidingView, Platform} from 'react-native';
import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';
import SenderMessageContainer from '../../components/SenderMessageContainer';
import UserMessageContainer from '../../components/UserMessageContainer';
import { ScrollView } from 'react-native-gesture-handler';

const MessagingScreen = () => {
  const navigation = useNavigation(); // Get the navigation prop using the hook
  const [message, setMessage] = useState('');

  return (

    <KeyboardAvoidingView
    style={styles.container}
    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
  >
    <View style={styles.container}>
    
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name='arrow-back' color='white' size={22} />
        </TouchableOpacity>
        <View style={styles.ComponentContainer}>
          <Image
            source={{ uri: 'https://www.bing.com/th?id=OIP.L8bs33mJBAUBA01wBfJnjQHaHa&w=150&h=150&c=8&rs=1&qlt=90&o=6&dpr=1.4&pid=3.1&rm=2' }}
            style={styles.picture}
          />
          <View style={styles.textContainer}>
            <Text style={styles.name}>Michael Watson</Text>
            <Text style={styles.LastSeen}>online</Text>
          </View>
          <View style={styles.Details}>
          <TouchableOpacity><Ionicons name='call-outline' color='white' size={27} style={styles.icon}/></TouchableOpacity> 
          <TouchableOpacity><Ionicons name='videocam-outline' color='white' size={27} style={styles.icon}/></TouchableOpacity> 
          </View>
        </View>
      </View>
      <ScrollView> 
        <SenderMessageContainer/>
        <UserMessageContainer />
        <UserMessageContainer />
        <SenderMessageContainer/>
        <SenderMessageContainer/>
        <SenderMessageContainer/>
        <UserMessageContainer />
        <SenderMessageContainer/>
        <SenderMessageContainer/>
        <UserMessageContainer />
        <UserMessageContainer />
      </ScrollView>

    <View style={styles.MsgInputContainer}>
      <TextInput
          style={styles.input}
          placeholder='Type a message'
          value={message}
          onChangeText={setMessage}
        />
        <TouchableOpacity style={styles.sendButton}>
          <Ionicons name='send' size={24} color='black' />
        </TouchableOpacity>
        
      </View>
      
    </View>
    </KeyboardAvoidingView>
  );
}

export default MessagingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerContainer: {
    backgroundColor: 'black',
    width: '100%',
    height: 130,
    padding: 20,
  },
  picture: {
    height: 50,
    width: 50,
    borderRadius: 30,
    marginTop: 17,
  },
  ComponentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  textContainer: {
    flex: 1,
    marginLeft: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: '500',
    color: 'white',
    marginTop: 20,
  },
  LastSeen: {
    color: 'white',
  },
  Details: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  icon: {
    marginLeft: 20,
  },
  MsgInputContainer:{
    flexDirection: 'row',
    alignItems: 'center',
    width:'100%',
    height:70,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
   backgroundColor:'white',
    padding: 10,
  
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 20,
    marginRight: 10,
    height:40,
    padding:7,
  },
  sendButton: {
    height:25,
    width:25,
   
  },
});
