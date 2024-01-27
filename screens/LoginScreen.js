import {View,StyleSheet,Text,TouchableOpacity,Image, TextInput } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useState } from 'react'

export default function LoginScreen(){
    const [email,setEmail]=useState('')
    const [password,setPassword]= useState('')
    const navigation=useNavigation()


    const handleLoginLogic = async () => {

      if(email.length>0 && password.length>0){
        try {
          const response = await fetch('http://192.168.1.100:3000/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              email: email,
              password: password,
            }),
          });
      
          const data = await response.json();
      
          if (response.ok) {
            // Authentication successful, navigate to Home
            navigation.navigate('Home',{email});
          } else {
            // Authentication failed, display error message
            alert(data.message || 'Wrong Credentials');
          }
        } catch (error) {
          // Handle network or other errors
          console.error('Error during login:', error);
          alert('An error occurred during login');
        }
      }
      else{
        alert("Enter Email and Password")
      }
      };



    return(
<View style={styles.container}>
    <Image 
     style={styles.bgImage}
    source={require('../assets/login_signup.png')}/>
     <View>
     
            <Text style={styles.headingText}>Welcome to TRAVEL DIARIES</Text>
            </View>
            {/* text input */}
            <View style={styles.inputStyle}>
                <Text style={styles.inputlabel}>LOGIN</Text>      
                    <TextInput style={styles.input} onChangeText={(text)=>setEmail(text)}  value={email}
placeholder='Email or phone number'/>
                    <TextInput style={styles.input} onChangeText={(text)=>setPassword(text)}  secureTextEntry={true} value={password} placeholder='password'/>
                <Text style={styles.inputlabel}>Forgot Password?</Text>      
                <TouchableOpacity onPress={handleLoginLogic} style={styles.loginbtn}>
            <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
            <View>
                <Text style={styles.orText}>Not a User?</Text>
                <TouchableOpacity onPress={()=>navigation.navigate("Signup")} style={styles.Signupbtn}>
            <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
            </View>
            </View>
</View>
    )
}

const styles = StyleSheet.create({
   inputStyle:{
    position:'absolute',
    top:'50%',
    width:'100%'
   },
   inputlabel:{
    marginLeft:20,
    color:'white',
    fontWeight:'bold'
   },
   orText:{
    textAlign:'center',
    color:'white',
    fontWeight:'bold',
    marginVertical:12,
   },
   
    input: {
        backgroundColor:'white',
        height: 50,
        margin: 12,
        borderRadius:50,
        padding: 10,
      },
    container:{
        display:'flex',
        justifyContent:'flex-end',
    },    
    headingText:{
        position:'absolute',
        color:'white',
        textAlign:'center',
        bottom:580,
        left:28,
        fontSize:50,
       
    },
    bgImage:{
        height:'100%',
        width:'100%',
    },
   
    loginbtn:{
        backgroundColor:'#527DBE',
        borderRadius:10,
        padding:20,
        borderRadius:50,
        height:50,
        margin:12,
        
      },
      Signupbtn:{
        backgroundColor:'#052659',
        borderRadius:10,
        padding:20,
        borderRadius:50,
        height:50,
        margin:12,
        
      },
      buttonText:{
        position:'absolute',
        left:'50%',
        zIndex:1,
        top:15,
        color:'white',
        textAlign:'center',
      }

})