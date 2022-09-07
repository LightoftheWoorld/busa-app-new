import React, {useState} from 'react';
import  { Paystack }  from 'react-native-paystack-webview';
import { View, TouchableOpacity,Text, SafeAreaView, Button} from 'react-native';


export default function Pay() {
  const [start, setStart]= useState(false)
  return (
    <View style={{ flex: 1 }}>
      <Paystack 
        paystackKey="pk_live_d9cf3ea81e5578c61ea74f28faeb8c67c90d3697"
        amount={'500.00'}
        billingEmail="dada.stephenolamide@gmail.com"
        activityIndicatorColor="green"
        SafeAreaViewContainer ={{marginTop: 10}}
      
        onCancel={(e) => {
          // handle response here
        }}
        onSuccess={(res) => {
          // handle response here
          console.log(res)
        }}
        autoStart={true}
      />
       {/* <SafeAreaView style={{marginTop:30}}>
       <TouchableOpacity
       onPress ={()=> Pay}>
       <View>
    <Button title="pay now"/>
</View>
        </TouchableOpacity>
                  </SafeAreaView> */}
                 
    </View> 
  );
}





// import React, { useRef } from 'react';
// import  { Paystack , paystackProps}  from 'react-native-paystack-webview';
// import { View, TouchableOpacity,Text } from 'react-native';

// function Pay(){
//   const paystackWebViewRef = useRef<paystackProps.PayStackRef>();

//   return (
//     <View style={{flex: 1}}>
//       <Paystack
//         paystackKey="your-public-key-here"
//         billingEmail="paystackwebview@something.com"
//         amount={'25000.00'}
//         onCancel={(e) => {
//           // handle response here
//         }}
//         onSuccess={(res) => {
//           // handle response here
//         }}
//         ref={paystackWebViewRef}
//       />

//         <TouchableOpacity onPress={()=> paystackWebViewRef.current.startTransaction()}>
//           <Text>Pay Now</Text>
//         </TouchableOpacity>
//       </View>
//   );
// }