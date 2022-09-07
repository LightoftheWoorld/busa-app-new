import { View, Text, Image, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'

export default function Header() {
  return (
    <>
    <SafeAreaView style={{margin:30}}>
      <View> 
   <Date/>
<DateProfile/>
</View>
</SafeAreaView>
</>
  )
}



const Date=() =>(
<View>
 <Text style={{color:"#ccc",fontSize:16, marginTop: 35}}>WEDNESDAY, 7 SEPTEMBER 2022</Text>
</View>
)


const DateProfile =()=>(
 <View style={{flexDirection:"row", justifyContent:"space-between",}}>
<View>
 <Text style={{color:"#1528ea", fontSize: 40, fontWeight:"bold", marginRight:10}}>Today</Text>
</View>
<View>
  <TouchableOpacity
  activeOpacity ={0.5}>
    <Image source={{uri: "https://www.pngitem.com/pimgs/m/79-791921_male-profile-round-circle-users-profile-round-icon.png"}} style={styles.image}/>
</TouchableOpacity>
</View>
 </View>

)

const styles = StyleSheet.create({
image:{
 width: 40,
 height: 40,
 borderRadius: 50,
 margin: 10,
 borderWidth: 3,
 borderColor : "#1528ea",

}



})