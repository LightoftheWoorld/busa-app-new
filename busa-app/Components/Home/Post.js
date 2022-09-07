import { View, Text, Image, StyleSheet, TouchableOpacity,} from 'react-native'
import React from 'react'
import {Divider} from "react-native-elements"

// taking Post to be busa post
const Post = () => {
  return (
    <View>
      <PostImage/>
    </View>
  )
}


const PostImage =()=>(
 <View 
 style={{
  width: 350,
  height:350,
  alignSelf:"center"
  }}
>
  <TouchableOpacity
  activeOpacity={1}
  // onPress={()=> navigation.push("PostImageDetails")}
  >
<Image 
source={{uri: "https://metrikal.io/blog/wp-content/uploads/2020/10/Apple-App-Store-screenshot-sizes-guidelines-v.1.png"}}
style={{ height:300, width:300, resizeMode:"cover", borderRadius:20, alignSelf:"center"}}
/>
</TouchableOpacity>
 </View>
)


export default Post