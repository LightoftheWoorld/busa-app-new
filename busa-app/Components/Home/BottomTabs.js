import { View, Text, TouchableOpacity} from 'react-native'
import React from 'react'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

export default function BottomTabs() {
  return (
    <View style ={{flexDirection: "row", margin:8, marginHorizontal: 20, justifyContent:"space-between",}}
    >
     <Icon icon="home" text="Home"/>
      <Icon   icon ="ad"  text="Advertise"/>
     <Icon icon ="ticket-alt"  text="Ticket"/>
     <Icon icon ="user"  text="Account" />
    </View>
  )
}

const Icon =(props)=>(
  <TouchableOpacity>
    <View>
<FontAwesome5
 name ={props.icon}
  size={20} style={{
 marginBottom: 3, 
 alignSelf:"center", color:"#1528ea"
}}
/>
<Text style={{color:"#ccc", fontSize: 15}}>{props.text}</Text>
</View>
</TouchableOpacity>
)