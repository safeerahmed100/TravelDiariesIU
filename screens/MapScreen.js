// MapScreen.js
import React from 'react';
import { View,Text, Image } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { Callout } from 'react-native-maps';
import TopNavigation from '../components/TopNavigation';
import NavigationBottom from '../components/NavigationBottom';


export default function  MapScreen  () {

  return (
    <View style={{flex:1}}>
      <TopNavigation/>
      <MapView
        style={{flex:2}}
        initialRegion={{
          latitude: 24.83959968318691, 
          longitude: 67.08238145656878, 
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
       
          <Marker
            key='123' 
            coordinate={{
              latitude: 24.83959968318691, 
              longitude: 67.08238145656878
            }}
            title='MAD COURSE TAG'>
            <Callout >
            <View style={{flexDirection:'row',alignItems:'center'}}>
              <Image source={require('../assets/reveiw.png')} style={{width:90,height:77,borderRadius:7}}/>
              <View style={{flexDirection:'column'}}>
              <Text>Iqra University</Text>
            <Text>This app is build by group 06 Quantum Forge</Text>
            </View>
            </View>
        </Callout>
        </Marker>
         
        
          
      </MapView>
      <NavigationBottom/>
    </View>
  );
};

