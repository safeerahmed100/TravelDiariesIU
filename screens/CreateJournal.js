import { TextInput, TouchableOpacity, View,Text,Image } from "react-native";
import { useState } from "react";
import TopNavigation from "../components/TopNavigation";
import NavigationBottom from "../components/NavigationBottom";
import * as ImagePicker from 'expo-image-picker';
import SelectDropdown from 'react-native-select-dropdown'
import { useNavigation } from "@react-navigation/native";

const countriesWithCoordinates = [
  { name: "Egypt", latitude: 30.033, longitude: 31.233 },
  { name: "Canada", latitude: 56.130, longitude: -106.346},
  { name: "Australia", latitude: -25.274, longitude: 133.775},
  { name: "Ireland", latitude: 53.349, longitude: -6.2603 },
  {name:"Iqra University",latitude:24.839,longitude:67.080}
];



export default function CreateJournal({route}){
  const navigation=useNavigation()
    const {email}= route.params;
    const [image, setImage] = useState(null);
    const [caption,SetCaption]=useState('');
    const [location,SetLocation]=useState('');

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

   
      setImage(result.assets[0].uri);
    
  };

  const sendPostData = async()=>{
    try{
      if(!image){
        alert("Select Image First");
      return;
    
    }
    const formData = new FormData();
  formData.append('email', email);
  formData.append('caption', caption);
formData.append('location', location.name);
formData.append('latitude', location.latitude);
formData.append('longitude', location.longitude);
  formData.append('postImage', {
    uri: image,
    type: 'image/jpeg', // or the actual type of your image
    name:  Math.random() + '_post'+'.png',
  });

      console.log(image)
      const response = await fetch('http://192.168.1.100:3000/journal',{
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
      navigation.navigate('Map',{email});
    console.log(response.ok)
    } else {
      // Signup failed, display error message
      alert(data.message);
    }
  } catch (error) {
    // Handle network or other errors
    console.error('Error:', error);
    alert('An error occurred while creating post');
  }
 
  }




















    const screenCreateJournal='Create Journal'
    return(

        <View style={{backgroundColor:'#021024',height:'100%'}}>
<TopNavigation screenName={screenCreateJournal} route={route}/>
<View style={{backgroundColor:'#364B60',borderRadius:20,paddingHorizontal:20,marginTop:60,height:'100%',flex:1}}>
    {/* image picker */}
        {/* image */}
    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
      
      <Image source={{ uri: image }} style={{ width: 200, height: 200,borderRadius:20,margin:10,backgroundColor:'white' }} />
      <TouchableOpacity onPress={pickImage} style={{backgroundColor:'#527DBE',borderRadius:12,height:44,width:'100%',marginHorizontal:20}}>
        <Text style={{alignItems:'center',color:'white',textAlign:'center',top:'25%'}}>Upload Image</Text></TouchableOpacity>
    </View>

<View style={{marginTop:10}}>
    {/* Form Fields*/}
    <Text style={{color:'white',fontWeight:'bold',margin:20}}>Caption</Text>
    <TextInput style={{backgroundColor:'white',borderRadius:20,height:77}} onChangeText={(text) => SetCaption(text)}  value={caption} />
    <Text  style={{color:'white',fontWeight:'bold',margin:20}}>Location</Text>
    {/* <RNPickerSelect
        placeholder= 'Select a location'
        items={[
            { label: 'Location 1', value: { name: 'Location 1', latitude: 123, longitude: 456 } },
            { label: 'Location 2', value: { name: 'Location 2', latitude: 789, longitude: 101 } },
        ]}
        onValueChange={(value) => SetLocation(value)}
        style={{ ...pickerSelectStyles }}
        value={location}

    />     */}

<SelectDropdown
style={{width:'100%',borderRadius:20,height:77,justifyContent:'center'}}
	data={countriesWithCoordinates}
	onSelect={(selectedItem, index) => {
		SetLocation(selectedItem, index)
	}}
	buttonTextAfterSelection={(selectedItem, index) => {
		// text represented after item is selected
		// if data array is an array of objects then return selectedItem.property to render after item is selected
		return selectedItem.name
	}}
	rowTextForSelection={(item, index) => {
		// text represented for each item in dropdown
		// if data array is an array of objects then return item.property to represent item in dropdown
		return item.name
	}}
/>

    <TouchableOpacity style={{backgroundColor:'#052659',borderRadius:20,justifyContent:'center',margin:20,height:44}} onPress={sendPostData}>
        <Text style={{color:'white',textAlign:'center'}}>Upload</Text></TouchableOpacity>
        </View>
</View>

<NavigationBottom route={route}/>
        </View>
    )
}

const pickerSelectStyles = {
  inputIOS: {
      fontSize: 16,
      paddingVertical: 12,
      paddingHorizontal: 10,
      borderWidth: 1,
      borderColor: 'gray',
      borderRadius: 4,
      color: 'black',
      paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
      fontSize: 16,
      paddingHorizontal: 10,
      paddingVertical: 8,
      borderWidth: 0.5,
      borderColor: 'purple',
      borderRadius: 8,
      color: 'black',
      paddingRight: 30, // to ensure the text is never behind the icon
  },
};