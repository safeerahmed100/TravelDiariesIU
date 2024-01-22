import {Text,Image,View,StyleSheet, ScrollView,TextInput, SafeAreaView} from 'react-native'
import { MagnifyingGlassIcon as MagnifyingGlass } from 'react-native-heroicons/outline'

import Card from '../components/Card'
import NavigationBottom from '../components/NavigationBottom'
import TopNavigation from '../components/TopNavigation'



export default function HomeScreen(){
  const home='Home'
    return(
        <SafeAreaView style={styles.bgScreen}>
          <TopNavigation screenName={home}/>
             <View style={{top:55,marginHorizontal:20}}>
          <View style={{backgroundColor:'#5483B3',flexDirection:'row',alignItems:'center',borderRadius:20,paddingHorizontal:10,height:44,}} >
            <MagnifyingGlass size={20} strokeWidth={3} color="lightgray" />
            <TextInput
            style={{marginLeft:20}}
              placeholder='Search destination'
              placeholderTextColor={'lightgrey'}
              
            />
          </View>
        </View>
        <Text style={{color:'white',top:80,marginLeft:20,fontWeight:'bold',fontSize:18}}>Treding Places</Text>
       <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} style={{top:'22%'}}>
        <Card/>
        <Card/>
        <Card/>
       </ScrollView>
       <Text style={{color:'white',top:40,marginLeft:20,fontWeight:'bold',fontSize:18}}>Blogs</Text>
       <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} style={{top:'12%'}}>
        <Card/>
        <Card/>
        <Card/>
       </ScrollView>
       <NavigationBottom/>
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
    top:'30%'
   
},
    
})