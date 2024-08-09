import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View,Text } from 'react-native';
import React from 'react';
import { NavigationContainer, useNavigationState, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import OpeningScreen from './src/screens/OpeningScreen';
import LoginScreen from './src/screens/LoginScreen';
import HomepageScreen from './src/screens/HomepageScreen';
import ArtisanTypeOptionsScreen from './src/screens/ArtisanTypeOptionsScreen';
import MessagingScreen from './src/screens/MessagingScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import MainContainer from './src/navigation/MainContainer';

const Stack = createNativeStackNavigator();

export default function App({navigation}) {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
    <NavigationContainer>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={OpeningScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Homepage" component={HomepageScreen} options={{ headerShown: false }} />
          <Stack.Screen name="MainCont" component={MainContainer} options={{ headerShown: false }} />
          <Stack.Screen name="ArtisanType" component={ArtisanTypeOptionsScreen} options={{ headerShown: true }} />
          <Stack.Screen name="MessagingScreen" component={MessagingScreen} options={{ headerShown: false }} />
          <Stack.Screen name="RegisterScreen" component={RegisterScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
        <BottomNavigation />
      </View>
    </NavigationContainer>
     </GestureHandlerRootView>
  );
}

//hides navigationitem if page = login or homepage
function BottomNavigation() {
  const state = useNavigationState(state => state);
  const navigation = useNavigation();

  if (!state || !state.routes || !state.routes[state.index]) {
    return null;
  }

  const currentRouteName = state.routes[state.index].name;

  if (currentRouteName === 'Home' || currentRouteName === 'Login') {
    return null;
  }

  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  NavigationSection: {
    width: '100%',
    height: '10%',
    backgroundColor: 'black',
    flexDirection: 'row',
    bottom: 0,
    position: 'absolute',
    opacity: 0.8,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  NavigationText: {
    color: 'white',
  },
});
