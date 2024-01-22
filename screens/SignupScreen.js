import {View,StyleSheet,Text,TouchableOpacity,Image, TextInput } from 'react-native'
import { useNavigation } from '@react-navigation/native'

export default function SignupScreen(){
    const navigation=useNavigation()
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
                    <TextInput style={styles.inputHalf} placeholder='First Name'/>
                    <TextInput style={styles.inputHalf} placeholder='Last Name'/>
                    </View>
                    <View>
                    <TextInput style={styles.input} placeholder='Email or phone number'/>
                    <TextInput style={styles.input} placeholder='password'/>

                    </View>
                <TouchableOpacity onPress={()=>navigation.navigate("Profile")} style={styles.loginbtn}>
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