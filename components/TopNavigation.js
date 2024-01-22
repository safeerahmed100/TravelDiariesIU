import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Image, Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { ChatBubbleBottomCenterIcon } from 'react-native-heroicons/outline';

export default function TopNavigation({ screenName }) {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

  const navigation= useNavigation()
  const toggleSideMenu = () => {
    setIsSideMenuOpen(!isSideMenuOpen);
  };

  

  return (
    <>
      <View style={styles.topNav}>
        <TouchableOpacity onPress={toggleSideMenu}>
          <Image source={require('../assets/menu.png')} style={{ width: 40, height: 40 }} />
        </TouchableOpacity>
        <Text style={{ color: 'white', fontSize: 20 }}>{screenName}</Text>
        <TouchableOpacity onPress={()=>navigation.navigate('Profile')}>
        <Image style={{ width: 50, height: 50 }} source={require('../assets/avatar.png')} />
        </TouchableOpacity>
      </View>
      {isSideMenuOpen && (
        <View style={styles.sideMenu}>
          <TouchableOpacity onPress={()=>navigation.navigate('Home')}>
          <ChatBubbleBottomCenterIcon size={20} color='white' stroke={1}/>
            <Text style={styles.sideMenuItem}>Discover</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>navigation.navigate('Journal')}>
          <ChatBubbleBottomCenterIcon size={20} color='white' stroke={1}/>

            <Text style={styles.sideMenuItem}>Feed</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>navigation.navigate('CreateJournal')}>
          <ChatBubbleBottomCenterIcon size={20} color='white' stroke={1}/>
            <Text style={styles.sideMenuItem}>Create Journal</Text>
          </TouchableOpacity>   
          <View style={{width:'100%',height:1,backgroundColor:'#527DBE'}}></View>
          <TouchableOpacity onPress={()=>navigation.navigate('Policy')}>
          <ChatBubbleBottomCenterIcon size={20} color='white' stroke={1}/>
            <Text style={styles.sideMenuItem}>Privacy Policy</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>navigation.navigate('Journal')}>
          <ChatBubbleBottomCenterIcon size={20} color='white' stroke={1}/>
            <Text style={styles.sideMenuItem}>About Us</Text>
          </TouchableOpacity>
          <View style={{width:'100%',height:1,backgroundColor:'#527DBE'}}></View>
          <TouchableOpacity onPress={()=>navigation.navigate('Journal')}>
          <ChatBubbleBottomCenterIcon size={30} color='white'  stroke={1}/>
            <Text style={styles.sideMenuItem}>Logout</Text>
          </TouchableOpacity>
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  topNav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    top: 40,
    width: 'auto',
    height:'auto',
    paddingHorizontal:20,
    paddingVertical:5,
    backgroundColor: '#021024',
    zIndex:3,
  },
  sideMenu: {
    justifyContent:'center',
    alignItems:'flex-start',
    paddingLeft:50,
        position: 'absolute',
    top: 80,
    left: 0,
    width: 300,
    height:'100%',
    backgroundColor: '#021024',
    padding: 10,
    zIndex:2
  },
  sideMenuItem: {
    color: 'white',
    fontSize: 20,
    marginVertical: 20,
    flexDirection:'row',
    justifyContent:'space-evenly',

  },
});
