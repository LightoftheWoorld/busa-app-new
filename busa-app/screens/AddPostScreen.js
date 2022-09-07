import React, { useState } from "react";
import {
  ActivityIndicator,
  Button,
  FlatList,
  Image,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import * as ImagePicker from "expo-image-picker";

export default function AddPostScreen() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { width } = useWindowDimensions();

  const pickImages = async () => {
    // No permissions request is necessary for launching the image library
    setIsLoading(true);
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      // allowsEditing: true,
      allowsMultipleSelection: true,
      selectionLimit: 10,
      // maxFiles: 10,
      aspect: [4, 3],
      quality: 1,
    });
    setIsLoading(false);
    console.log(result);
    if (!result.cancelled) {
      setImages(result.uri ? [result.uri] : result.selected);
    }
    
  };

  return (
    <FlatList
      data={images}
      renderItem={({ item }) => (
       <View
       style={{width: 400, height: 400, alignSelf:"center",}}      
>
        <Image
          source={{ uri: item.uri }}
          style={{ width: 300, height: 350, resizeMode:"cover", alignSelf:"center",borderRadius: 20, }}
        />
</View>
      )}
      showsHorizontalScrollIndicator={false}
      horizontal
       snapToAlignment="center"
        pagingEnabled
               decelerationRate={0}
        scrollEventThrottle={10}
      // numColumns={2}
      // keyExtractor={(item) => item.uri}
      contentContainerStyle={{ marginVertical: 50, paddingBottom: 100 }}
      ListHeaderComponent={
        isLoading ?(
          <View>
            <Text
              style={{ fontSize: 20, fontWeight: "bold", textAlign: "center" }}
            >
              Loading...
            </Text>
            <ActivityIndicator size={"large"} />
          </View>
        ) : (
         <Button title="+" onPress={pickImages} />
        )
      }
    />
  );
}
