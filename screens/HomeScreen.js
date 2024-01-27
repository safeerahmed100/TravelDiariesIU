import {Text,Image,View,StyleSheet, ScrollView,TextInput, SafeAreaView} from 'react-native'
import { MagnifyingGlassIcon as MagnifyingGlass } from 'react-native-heroicons/outline'

import Card from '../components/Card'
import NavigationBottom from '../components/NavigationBottom'
import TopNavigation from '../components/TopNavigation'
import { useEffect, useState } from 'react'
import axios from 'axios'


export default function HomeScreen({route}){
  const {email} = route.params;
  const[postDetails,setPostDetails]=useState()

  useEffect(()=>{
    let url = 'http://192.168.1.100:3000/api/users';
    axios.get(url).then((res)=>{
setPostDetails(res.data)
});

},[])


  const home='Home'
    return(
        <SafeAreaView style={styles.bgScreen}>
          <TopNavigation screenName={home} route={route}/>
             <View style={{top:55,marginHorizontal:20}}>
          <View style={{backgroundColor:'#5483B3',flexDirection:'row',alignItems:'center',borderRadius:20,paddingHorizontal:10,height:44,}} >
            <MagnifyingGlass size={20} strokeWidth={3} color="lightgray" />
            <TextInput
            style={{marginLeft:20}}
              placeholder='Search destination'
              placeholderTextColor={'lightgrey'} />
          </View>

        </View>
        <Text style={{color:'white',top:80,marginLeft:20,fontWeight:'bold',fontSize:18}}>Treding Places</Text>
       <ScrollView contentContainerStyle={{justifyContent:'center',alignItems:'center'}} showsHorizontalScrollIndicator={false} horizontal={false} style={{top:'12%'}}>
       {/* {postDetails && postDetails.postImage && postDetails.caption && postDetails.location ? (

<Card location={postDetails.location} caption={postDetails.caption} postImage={postDetails.postImage}/>

       ):(<View style={{display:'none'}}></View>)} */}


{postDetails && postDetails.users && postDetails.users.map((user) => (

<Card key={user._id} username={user.username} location={user.location} caption={user.caption} postImageDestination={user.postImage.destination} postDetailsPath={user.postImage.filename} />))}
       </ScrollView>
       <NavigationBottom route={route}/>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({

bgScreen:{
    backgroundColor:'#021024',
    height:'100%',
    width:'100%'
},
Card:{
    top:'10%'
   
},
    
})