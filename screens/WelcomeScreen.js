import {View,Text,StyleSheet,Image, TouchableOpacity} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

export default function WelcomeScreen(){
    const navigation = useNavigation()
return(

    <View style={styles.container}>
        <Image
        style={styles.bgImage}
        source={require('../assets/welcome.png')}/>

        <View style={styles.TextView}>
            <Text style={styles.headingText}>Welcome to TRAVEL DIARIES</Text>
            <Text style={styles.paraText}>Capture the world through your lens with Travel Diaries. Your stories, your adventures, all in one place
            </Text>
            </View>
        <TouchableOpacity onPress={()=>navigation.navigate("Login")} style={styles.buttonBg}>
            <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
       
    </View>

)

}

const styles = StyleSheet.create({

container:{
    display:'flex',
    justifyContent:'flex-end',
},    
TextView:{
position:'relative',
},
bgImage:{
    height:'100%',
    width:'100%',
},
headingText:{
    position:'absolute',
    color:'white',
    textAlign:'center',
    bottom:580,
    left:28,
    fontSize:50,
   
},
paraText:{
    position:'absolute',
    color:'white',
    fontSize:18,
    color:'white',
    bottom:100,
    left:20,
},
buttonBg:{
    position:'absolute',
    backgroundColor:'#052659',
    width:'90%',
    borderRadius:10,
   marginHorizontal:20,
    padding:20,
    bottom:20,
    borderRadius:30,
    
  },
  buttonText:{
    color:'white',
    textAlign:'center',
  }

})