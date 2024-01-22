import { useNavigation } from '@react-navigation/native'
import {View,StyleSheet,Text,TouchableOpacity,Image, TextInput, SafeAreaView } from 'react-native'
import CustomImagePicker from "../components/ImagePickFunction";




export default function ProfileSetup(){
  const handleImageSelected = (uri) => {
    // Handle the selected image URI as needed
    console.log('Selected Image URI:', uri);
  };
const navigation= useNavigation()
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
    <View>
         <Image />
         <CustomImagePicker onImageSelected={handleImageSelected} />
        </View>
    {/* Button */}


    <View style={styles.profileContainer}>
        <Text style={styles.Text}>Enter a Valid username</Text>
        <TextInput style={styles.input} placeholder='@username'/>
<TouchableOpacity style={styles.Signupbtn} onPress={()=>navigation.navigate('Home')}>
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