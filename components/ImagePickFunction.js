import React, { useState } from 'react';
import { Button, Image, TouchableOpacity, View,Text} from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const CustomImagePicker = ({ onImageSelected }) => {
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
      onImageSelected(result.assets[0].uri);
    }
  };

  return (
    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
      
      <Image source={{ uri: image }} style={{ width: 200, height: 200,borderRadius:20,margin:20,backgroundColor:'white' }} />
      <TouchableOpacity onPress={pickImage} style={{backgroundColor:'#527DBE',borderRadius:12,height:44,width:'100%',marginHorizontal:20}}><Text style={{alignItems:'center',color:'white',textAlign:'center',top:'25%'}}>Upload Image</Text></TouchableOpacity>
    </View>
  );
};

export default CustomImagePicker;
