// MapScreen.js
import React, { useEffect, useState } from 'react';
import { View,Text, Image } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { Callout } from 'react-native-maps';
import TopNavigation from '../components/TopNavigation';
import NavigationBottom from '../components/NavigationBottom';
import axios from 'axios';
import { parse } from 'react-native-svg';


export default function  MapScreen  ({screenName,route}) {
  const {email}=route.params;
  const screenMap="Maps"
const [markerData,setMarker]= useState()


useEffect(()=>{

  let url='http://192.168.1.100:3000/api/users'
  axios.get(url).then((res)=>{
    setMarker(res.data)
     
  })
},[])




{ markerData? (markerData.users.forEach((user) => {
   
  console.log(`Location for user+++++++ ${user.username}:`, user.latitude,user.longitude);

})):(console.log("not loaded yet"))}
  return (
    <View style={{flex:1}}>
      <TopNavigation screenName={screenMap} route={route}/>
      <MapView
        style={{flex:2}}
        initialRegion={{
          latitude: 24.83959968318691, 
          longitude: 67.08238145656878, 
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
      {markerData? (markerData.users.map((user) => (
        
  <Marker
    key={user._id} 
    coordinate={{
      latitude: parseFloat(user.latitude), 
          longitude: parseFloat(user.longitude), 
    }}
    title={user.location}
  >
    <Callout>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Image source={require('../assets/reveiw.png')} style={{ width: 90, height: 77, borderRadius: 7 }} />
        <View style={{ flexDirection: 'column' }}>
          <Text>{user.location}</Text>
          <Text>{user.caption}</Text>
        </View>
      </View>
    </Callout>
  </Marker>)))
  :(<Text>No Markers</Text>
)
}
         
        
          
      </MapView>
      <NavigationBottom route={route}/>
    </View>
  );
};

