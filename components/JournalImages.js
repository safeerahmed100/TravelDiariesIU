import {Image,TouchableOpacity,View} from 'react-native'


export default function JournalImages({postImageDestination,postDetailsPath}){
    return(
       <TouchableOpacity style={{width:'48%',marginVertical:2,marginHorizontal:2}} >
        <Image style={{width:'100%'}}  source={{ uri: `http://192.168.1.100:3000/${postImageDestination}${postDetailsPath}`}}/>
        </TouchableOpacity>
    )
}