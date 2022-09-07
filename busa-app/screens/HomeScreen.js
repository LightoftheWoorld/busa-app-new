import {View, SafeAreaView, ScrollView, StatusBar } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Divider } from "react-native-elements"

import BottomTabs from '../Components/Home/BottomTabs'
import Header from '../Components/Home/Header'
import Post from '../Components/Home/Post'
import NewCategories from '../Components/Home/NewCategories'
import AddPostScreen from './AddPostScreen'



const COLORS = {primary: '#1528EA', white: '#ccc'};

const Home = () => {
return (
<>
<StatusBar backgroundColor={COLORS.white}/>
  <SafeAreaView style ={{backgroundColor: "#fafafa", flex: 1}}>
    <ScrollView showsVerticalScrollIndicator={false}>
     {/* <View style={{backgroundColor: "#fafafa", padding: 15, marginTop: 10}}> */}
    <Header/>
     {/* </View> */}
     
     <Post/>
     <Post/>
     <Post />
     <NewCategories/>
 
    {/* <Another category goes here */}
        <AddPostScreen/>
     </ScrollView>
       <Divider width ={1}/>
     <BottomTabs/>  
    </SafeAreaView>
</>
)

}

export default Home