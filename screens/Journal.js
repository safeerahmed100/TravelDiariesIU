import {View,Text, ScrollView,TouchableOpacity} from 'react-native'
import NavigationBottom from '../components/NavigationBottom'
import TopNavigation from '../components/TopNavigation'
import JournalImages from '../components/JournalImages'
import { useNavigation } from '@react-navigation/native';

export default function Journal(){
  const journalScreen = 'Your Journal'; 
  const navigation = useNavigation();
 

    return(
<View style={{flex:1,backgroundColor:'#021024'}}>
  <TopNavigation screenName={journalScreen}/>
  <ScrollView contentContainerStyle={{flexDirection:'row',flexWrap:'wrap',justifyContent:'center'}} style={{top:70}}>
  <JournalImages/>
  <JournalImages/>
  <JournalImages/>
  <JournalImages/>
  <JournalImages/>
  <JournalImages/>
  <JournalImages/>
  <JournalImages/>
  <JournalImages/>
  <JournalImages/>
  <JournalImages/>
  <JournalImages/>
  </ScrollView> 
  <View style={{ position: 'absolute', bottom: 90, right: 20, zIndex: 1 }}>
  <TouchableOpacity 
  onPress={()=>navigation.navigate('CreateJournal')}
  style={{backgroundColor: 'white', borderRadius: 50, height:50,width:50,justifyContent:'center',alignItems:'center'}}>
            <Text style={{fontSize:32}}>+</Text>
            </TouchableOpacity>

  </View>
  <NavigationBottom/>
</View>
    )
}