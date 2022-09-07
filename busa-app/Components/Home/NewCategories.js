
import React from "react"
import {Text, View, Image, StyleSheet, TouchableOpacity} from "react-native"


  export default function NewCategories (){
  return(
    <>
  <DateProfile/>
  <PostImage/>
  </>
  )
  }


const PostImage =()=>(
 <View 
 style={{
  width: 350,
  height:400,
  alignSelf:"center"
  }}
>
  <TouchableOpacity
  >
<Image 
source={{uri: "https://metrikal.io/blog/wp-content/uploads/2020/10/Apple-App-Store-screenshot-sizes-guidelines-v.1.png"}}
style={{height:300, width:300, resizeMode:"cover", borderRadius:20, alignSelf:"center"}}
/>
  </TouchableOpacity>

 </View>
)


const DateProfile =()=>(
<View style={{marginRight:15, marginBottom:10}}>
 <Text style={{color:"#1528ea", fontSize: 30, fontWeight:"bold", justifyContent:"center", marginLeft:30, fontFamily:"sans-serif"}}>More Stories For You</Text>
</View>
)