import {View,Text, ScrollView,TouchableOpacity} from 'react-native'
import NavigationBottom from '../components/NavigationBottom'
import TopNavigation from '../components/TopNavigation'
import JournalImages from '../components/JournalImages'
import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import axios from 'axios';


export default function Journal({route}){
  const journalScreen = 'Your Journal'; 
  const navigation = useNavigation();
  const {email} = route.params;
  const [userJournal,setuserJournal]= useState();
  

  // useEffect(() => {
  //   const fetchUserData = async () => {
  //     try {
  //       const response = await fetch(`http://192.168.1.100:3000/api/users/${email}`);
  //       const data = await response.json();

  //       if (response.ok) {
  //         console.log(data.user.image.path)
  //          setuserJournal(data.user);
  //       } else {
  //         setError(data.message);
  //       }
  //     } catch (error) {
  //      console.log(error)
  //     }
  //   };

  //   fetchUserData();
  // }, [email]);
  // useEffect(() => {
  //   // This will run when userData changes
  //   if (userJournal) {
  //     console.log(userJournal.username)

  //     // console.log(  userJournal.image.path);
  //     // You can perform other side effects or actions here
  //   }
  // }, [userJournal]);


  useEffect(()=>{
const url=`http://192.168.1.100:3000/api/users/${email}`
axios.get(url).then((res)=>{
  setuserJournal(res.data)
  console.log(userJournal)
})
  },[])
  

    return(
<View style={{flex:1,backgroundColor:'#021024'}}>
  <TopNavigation screenName={journalScreen} route={route}/>
  <ScrollView contentContainerStyle={{flexDirection:'row',flexWrap:'wrap',justifyContent:'center'}} style={{top:70}}>
  {userJournal ? (
  <JournalImages postImageDestination={userJournal.users.postImage.destination} postDetailsPath={userJournal.users.postImage.filename}/>
):(
  <Text style={{color:'white',fontSize:24,textAlign:'center'}}>No Posts Yet</Text>
)} 
  </ScrollView> 
  <View style={{ position: 'absolute', bottom: 90, right: 20, zIndex: 1 }}>
  <TouchableOpacity 
  onPress={()=>navigation.navigate('CreateJournal')}
  style={{backgroundColor: 'white', borderRadius: 50, height:50,width:50,justifyContent:'center',alignItems:'center'}}>
            <Text style={{fontSize:32}}>+</Text>
            </TouchableOpacity>

  </View>
  <NavigationBottom route={route}/>
</View>
    )
}