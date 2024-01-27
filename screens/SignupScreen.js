import {View,StyleSheet,Text,TouchableOpacity,Image, TextInput } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useState } from 'react'

export default function SignupScreen(){

const [firstname,setFirstname]=useState('');
const [lastname,setLastname]=useState('');
const [email,setEmail]=useState('');
const [password,setPassword]=useState('');
const navigation=useNavigation()


const handleSignup = async () => {
  if(firstname.length> 0 && lastname.length> 0 && email.length> 0 && password.length> 0)
    try {
     
      const response = await fetch('http://192.168.1.100:3000/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          password: password,
          firstname: firstname,
          lastname: lastname,
        }),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        // Signup successful, navigate to Profile
        navigation.navigate('Profile',{email});
      } else {
        // Signup failed, display error message
        alert(data.message || 'Signup failed');
      }
    } catch (error) {
      // Handle network or other errors
      console.error('Error during signup:', error);
      alert('An error occurred during signup');
    }
    else{
      alert("Fill All the Required fields")
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
                <Text style={styles.inputlabel}>SIGNUP</Text>
                <View style={styles.inlineInput}>   
                    <TextInput style={styles.inputHalf} onChangeText={(text)=>setFirstname(text)}  value={firstname} placeholder='First Name'/>
                    <TextInput style={styles.inputHalf} onChangeText={(text)=>setLastname(text)}  value={lastname} placeholder='Last Name'/>
                    </View>
                    <View>
                    <TextInput style={styles.input} onChangeText={(text)=>setEmail(text)}  value={email} placeholder='Email or phone number'/>
                    <TextInput style={styles.input} onChangeText={(text)=>setPassword(text)}  value={password} secureTextEntry={true} placeholder='password'/>

                    </View>
                <TouchableOpacity onPress={handleSignup} style={styles.loginbtn}>
            <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
            <View>
                <Text style={styles.orText}>Already a User?</Text>
                <TouchableOpacity onPress={()=>navigation.navigate("Login")} style={styles.Signupbtn}>
            <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
            </View>
            </View>
</View>
    )
}

const styles = StyleSheet.create({
   inputStyle:{
    position:'absolute',
    top:'40%',
    width:'100%'
   },
   inlineInput:{
    display:'flex',
    flexDirection:'row'

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
      inputHalf: {
        backgroundColor:'white',
        height: 50,
        marginLeft:12,
        marginVertical:12,
        width:'45%',
        justifyContent:'space-evenly',
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