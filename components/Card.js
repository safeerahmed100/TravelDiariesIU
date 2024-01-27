import { View,StyleSheet,Text,TouchableOpacity,Image, } from "react-native";



export default function Card({location,caption,postImageDestination,postDetailsPath,username}){
    return(
        <View style={styles.card}>
            <TouchableOpacity>
           
            <Image style={{width:'100%',height:142,borderRadius:20}}  source={{ uri: `http://192.168.1.100:3000/${postImageDestination}${postDetailsPath}` }}/>  
                  <View style={styles.locationView} >
            <Image source={require('../assets/Location.png')} />
            <View style={styles.locationViewTextBar} >
            <Text style={{textAlign:'center'}}>{location}</Text></View>
            </View>
        <View style={{justifyContent:'space-between',flexDirection:'row',marginHorizontal:20,marginVertical:5,}}><Text style={{color:'white'}}>{username}</Text>
        <Image source={require('../assets/Share.png')}/>
        </View>
        <Text style={styles.cardText}>{caption}</Text>
        </TouchableOpacity>
        </View>

)}

const styles = StyleSheet.create({

    card:{
        backgroundColor:'#052659',
        borderRadius:20,
        width:'90%',
        margin:5,
        
        height:220,
    },
    cardText:{
        color:'white',
        paddingHorizontal:20,
        paddingVertical:5,
    },
    locationView:{
       
       
        marginHorizontal:20,
        position:'absolute',
        top:20,
       
        alignItems:'center',
        flexDirection:'row',
    },
    locationViewTextBar:{
        backgroundColor:'white',
        padding:5,
        borderRadius:20,
        width:100,
        marginLeft:10,
    }


})