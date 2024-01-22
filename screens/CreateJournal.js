import { TextInput, TouchableOpacity, View,Text,Image } from "react-native";
import TopNavigation from "../components/TopNavigation";
import NavigationBottom from "../components/NavigationBottom";
import CustomImagePicker from "../components/ImagePickFunction";

export default function CreateJournal(){
    const handleImageSelected = (uri) => {
        // Handle the selected image URI as needed
        console.log('Selected Image URI:', uri);
      };
    const screenCreateJournal='Create Journal'
    return(

        <View style={{backgroundColor:'#021024',height:'100%'}}>
<TopNavigation screenName={screenCreateJournal}/>
<View style={{backgroundColor:'#364B60',borderRadius:20,paddingHorizontal:20,marginTop:60,height:'100%',flex:1}}>
    {/* image picker */}
        <View>
         <Image />
         <CustomImagePicker onImageSelected={handleImageSelected} />
        </View>

<View stlye={{marginTop:50}}>
    {/* Form Fields*/}
    <Text style={{color:'white',fontWeight:'bold',margin:20}}>Caption</Text>
    <TextInput style={{backgroundColor:'white',borderRadius:20,height:77}}/>
    <Text  style={{color:'white',fontWeight:'bold',margin:20}}>Location</Text>
    <TextInput  style={{backgroundColor:'white',borderRadius:10,height:44}}/>
    {/* buttons */}
    <TouchableOpacity style={{backgroundColor:'#052659',borderRadius:20,justifyContent:'center',margin:20,height:44}}>
        <Text style={{color:'white',textAlign:'center'}}>Upload</Text></TouchableOpacity>
        </View>
</View>

<NavigationBottom/>
        </View>
    )
}