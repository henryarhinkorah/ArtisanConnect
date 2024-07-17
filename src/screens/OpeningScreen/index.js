import { StyleSheet, Text, View, ImageBackground, Image,Button } from 'react-native';
import React,  { useEffect }  from 'react';


const OpeningScreen = ({ navigation }) => {
 
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('Login');
    }, 2000); // 2000 milliseconds = 2 second

    // Clean up the timer if the component is unmounted
    return () => clearTimeout(timer);
  }, [navigation]);
 
 
  return (
    <ImageBackground
      source={{
        uri:
          'https://th.bing.com/th/id/R.6b2f729f5a8912841205bd818e8219cf?rik=KfRaEmssLB3a8A&riu=http%3a%2f%2fwallpapercave.com%2fwp%2fvPopEp4.png&ehk=c4VRaViorttScYwHvQmsZEKf4RtXgg7OSUwyckwPcbY%3d&risl=&pid=ImgRaw&r=0',
      }}
      style={styles.background}
    >
      <View style={styles.container}>
        <Image
          source={{
            uri:
              'https://th.bing.com/th/id/R.38eb8c8a4c384ebc6fc275586f008f28?rik=Huv2VGkuZPvgzw&riu=http%3a%2f%2fcdn.onlinewebfonts.com%2fsvg%2fimg_410957.png&ehk=WlcjOEsrubQ49chQ5BY7uydl3rflPxSkUZ%2fatc7thzg%3d&risl=&pid=ImgRaw&r=0',
          }}
          style={styles.logo}
        />
     
        <Text style ={styles.name}> ArtisansConnect</Text>


      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    flexDirection: 'column',
    width:'100%',
    height:'100%',
    
  },
  logo: {
    width: 150,
    height: 150,
    marginTop:-100,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  name:{
    fontSize:40,
    marginTop:30,
    alignItems:'center',
    justifyContent:'center',
    fontWeight:'600'
    
  }
});

export default OpeningScreen;
