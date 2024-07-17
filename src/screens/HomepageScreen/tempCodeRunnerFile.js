import { StyleSheet, Text,FlatList, View,TextInput, TouchableOpacity} from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import ArtisanComponent from '../../components/ArtisanComponent';
import categories from '../../data/categories'




const HomepageScreen = ({ navigation }) => {

   
 
 
 
    return (
    <View style = {styles.container}>
            <View style ={styles.HeaderContainer}>
                
                <Text style={styles.HeaderQuestion}> What are you looking for?</Text>
            
                <TextInput style ={styles.HeaderSearchBar}  placeholder='Type your search here' placeholderTextColor={'black'}  fontSize={13} > </TextInput>
                
                
                <TouchableOpacity style ={styles.SearchButton}>
                    <Ionicons name="search" size={24} color="black"  marginTop = {30}/>
                </TouchableOpacity>
            
                
            </View>
            
            
        <FlatList
        data = {categories}
        renderItem={({item}) => <ArtisanComponent item = {item}  navigation={navigation}/>}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator = {false}
        numColumns={3}
      />

      
   
   
   
    </View>
  )


}



const styles = StyleSheet.create({

    container:{
        flex:1,
        flexDirection:'column'
    },

    HeaderContainer:{
        backgroundColor:'black',
        height:220,
        width:400,
        alignItems: 'center',
        
       
    },
    HeaderQuestion:{
        fontSize:26,
        textAlign:'center',
        color:'white',
        marginTop:65,
      
        
    },
    HeaderSearchBar:{
        width:350,
        height:40,
        backgroundColor:'white',
        borderRadius:20,
        marginTop:40,
        color:'black',
        backgroundColor:'white',
        fontSize:30,
        paddingLeft:10,
       

        
    },

    SearchButton:{
        marginTop:-63,
        backgroundColor:'transparent',
        marginLeft:290,
    }
            

})
export default HomepageScreen