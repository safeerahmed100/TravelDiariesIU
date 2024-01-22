import {Image,TouchableOpacity,View} from 'react-native'


export default function JournalImages(){
    return(
       <TouchableOpacity style={{width:'48%',marginVertical:2,marginHorizontal:2}} >
        <Image style={{width:'100%'}} source={require('../assets/batman.png')}/>
        </TouchableOpacity>
    )
}