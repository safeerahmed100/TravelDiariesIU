import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import { MapPinIcon, UserCircleIcon,HomeIcon } from 'react-native-heroicons/outline'
import { useNavigation } from '@react-navigation/native'


export default function NavigationBottom({route}) {
    const { email } = route.params;

    const navigation=useNavigation()
    return (
        <View style={styles.drawer}>
            <TouchableOpacity onPress={()=>navigation.navigate('Home',{email})}>
            <View style={styles.menu}>
                <HomeIcon size={30} strokeWidth={1} color="white" />
                <Text style={styles.menuText} >Home</Text>
            </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.navigate('Map',{email})} >
            <View style={styles.menu}>
                <MapPinIcon size={30} strokeWidth={1} color="white"/>
                <Text style={styles.menuText} >Map</Text>
            </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.navigate('Journal',{email})}>
            <View style={styles.menu}>
                <UserCircleIcon
                size={30} strokeWidth={1} color="white" />
                <Text style={styles.menuText} >Profile</Text>
            </View>
            </TouchableOpacity>
           
           
        </View>
    )
}

const styles = StyleSheet.create({
    drawer: {
        height: 60,
        backgroundColor: '#052659',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    menu:{
        flexDirection:'column',
        gap:5,
        alignItems:'center'
    },
    menuText:{
        color:'white'
    },
})