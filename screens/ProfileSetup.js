import { useNavigation } from '@react-navigation/native'
import {View,StyleSheet,Text,TouchableOpacity,Image, TextInput, SafeAreaView } from 'react-native'
import { useState } from 'react';
import * as ImagePicker from 'expo-image-picker';


export default function ProfileSetup({route}){
  const {email} = route.params;
  const navigation= useNavigation()
  const [username,setUsername]=useState('')
  const [image, setImage] = useState(null);



  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const sendProfileSetupData = async()=>{
      try{
        if(!image){
          alert("Select Image First");
        return;
      
      }
      const formData = new FormData();
    formData.append('email', email);
    formData.append('username', username);
    formData.append('profilePicture', {
      uri: image,
      type: 'image/jpeg', // or the actual type of your image
      name: new Date() + '_profile',
    });

        console.log(image)
        const response = await fetch('http://192.168.1.108:3000/profile',{
        method:'POST',
        headers:{
          'Content-Type':'multipart/form-data',
        },
        body: formData
      }
          )
          const data = await response.json();
  
      if (response.ok) {
        // Signup successful, navigate to Profile
        navigation.navigate('Home',{email});
      } else {
        // Signup failed, display error message
        alert(data.message);
      }
    } catch (error) {
      // Handle network or other errors
      console.error('Error:', error);
      alert('An error occurred during signup');
    }
   
    }
 
  
      

return(

    <SafeAreaView style={styles.background}>
    {/* Top */}
    <View style={{alignItems:'center',flexDirection:'row',marginHorizontal:22}}>
    <TouchableOpacity onPress={()=>navigation.navigate("Signup")}>
    <Image source={require('../assets/Arrow.png')}/>
    </TouchableOpacity>
    <Text style={styles.topHeading}>Setup your profile</Text>
    </View>
    {/* image */}
    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
      
      <Image source={{ uri: image }} style={{ width: 200, height: 200,borderRadius:20,margin:20,backgroundColor:'white' }} />
      <TouchableOpacity onPress={pickImage} style={{backgroundColor:'#527DBE',borderRadius:12,height:44,width:'100%',marginHorizontal:20}}><Text style={{alignItems:'center',color:'white',textAlign:'center',top:'25%'}}>Upload Image</Text></TouchableOpacity>
    </View>
    {/* Button */}


    <View style={styles.profileContainer}>
        <TextInput style={styles.input} placeholder='Email' 
         value={email}/>
        <Text style={styles.Text}>Enter a Valid username</Text>
        <TextInput style={styles.input} placeholder='@username'  onChangeText={(text) => setUsername(text)}
        value={username}/>
<TouchableOpacity style={styles.Signupbtn} onPress={sendProfileSetupData}>
            <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
        </View>
    </SafeAreaView>
)
}


const styles = StyleSheet.create({
   Text:{
    margin:20,
    color:'white'
   },
   profileContainer:{
    top:20
   },
   avatar:{
    top:50,
    position:'absolute',
    left:'18%',
    width:250,
    height:250,
    justifyContent:'center',
    display:'flex',
    alignItems:'center',
   },
   background:{
    backgroundColor:'#021024',
    height:'100%',
    width:'100%',
    paddingTop:90,
   },
   topHeading:{
   marginLeft:70,
    color:'white',
    fontSize:20,
   },
   input: {
    backgroundColor:'white',
    height: 50,
    margin: 12,
    borderRadius:50,
    padding: 10,
  },
   
   
    Signupbtn:{
        backgroundColor:'#527DBE',
        borderRadius:10,
        padding:20,
        borderRadius:50,
        height:50,
        margin:12,
        
      },
      buttonText:{
        position:'absolute',
        left:'48%',
        zIndex:1,
        top:15,
        color:'white',
        textAlign:'center',
      }
})