// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View, Dimensions,SafeAreaView } from 'react-native';
// import Box from './components/Box';
// import { useEffect, useState } from 'react';
// import { SafeAreaView } from 'react-native-web';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Box style={{alignSelf:"flex-start",backgroundColor:'plum'}}>Box 1</Box>
//       <Box style={{alignSelf:"center",backgroundColor:'yellow'}}>Box 2</Box>
//       <Box style={{alignSelf:"flex-end",backgroundColor:'green'}}>Box 3</Box>
//       <Box style={{alignSelf:"stretch",backgroundColor:'pink'}}>Box 4</Box>
//       <Box style={{backgroundColor:'orange',alignSelf:"auto"}}>Box 5</Box>
//       <Box style={{backgroundColor:'brown'}}>Box 6</Box>
//       <Box style={{backgroundColor:'magenta'}}>Box 7</Box>
//     </View>
//   );
// }


// flex:1 takes the entire height or width remaining in the main axis
// if 2 items have flex :1 and flex:2 the remaining area will be divided into them in 1:2 ratio

// by default dirn is column 

// justify content places items along main axis 
// (space-between(item-space-item),
// space-around(space1-item-space2-item-space1),
//  space evenly(space-item-space-item-space))


// align items places items along cross axis
// 

// align self main axis
// align content cross axis



// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Box style={{backgroundColor:'plum'}}>Box 1</Box>
//       <Box style={{backgroundColor:'yellow'}}>Box 2</Box>
//       <Box style={{backgroundColor:'green'}}>Box 3</Box>
//       <Box style={{backgroundColor:'pink',flex:1}}>Box 4</Box>
//       <Box style={{backgroundColor:'orange',}}>Box 5</Box>
//       <Box style={{backgroundColor:'brown',flexBasis:240,}}>Box 6</Box>
//       <Box style={{backgroundColor:'magenta'}}>Box 7</Box>
//     </View>
//   );
// }
// const styles = StyleSheet.create({
//   container: {
//     // flex:1,
//     // flexWrap:"nowrap",
//     flexDirection:"row",
//     flexWrap:"wrap",
//     flex:1,
//     gap:9,
//     // height:400,
//     borderWidth:6,
//     borderColor:"black",
//     // alignItems:"flex-end"
//   },
// });

// // flex shrink: by defaut 0, items shrink along main axis
// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Box style={{backgroundColor:'plum',flexShrink:2}}>Box 1- shrink</Box>
//       <Box style={{backgroundColor:'yellow',flexShrink:1}}>Box 2- shrink</Box>
//       {/* <Box style={{backgroundColor:'green'}}>Box 3</Box>
//       <Box style={{backgroundColor:'pink',flex:1}}>Box 4</Box>
//       <Box style={{backgroundColor:'orange',}}>Box 5</Box>
//       <Box style={{backgroundColor:'brown',flexBasis:240,}}>Box 6</Box>
//       <Box style={{backgroundColor:'magenta'}}>Box 7</Box> */}
//     </View>
//   );
// }
// const styles = StyleSheet.create({
//   container: {

//     flexDirection:"row",
//     alignItems:"flex-start",

//     width:300,
//     gap:9,
//     // height:400,
//     borderWidth:6,
//     borderColor:"black",
//     // alignItems:"flex-end"
//   },
// });


// flex shrink: by defaut 0, items shrink along main axis
// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Box style={{backgroundColor:'plum',flexShrink:2}}>Box 1- shrink</Box>
//       <Box style={{backgroundColor:'yellow',flexShrink:1
//     ,top:75,left:75}}>Box 2- shrink</Box>
//       <Box style={{backgroundColor:'green',
//     top:75,left:75}}>Box 3</Box>
//       <Box style={{backgroundColor:'pink',top:75,left:75,position:"absolute"}}>Box 4</Box>
//       <Box style={{backgroundColor:'orange',flexGrow:3}}>Box 5</Box>
//       <Box style={{backgroundColor:'brown', flexGrow:1}}>Box 6</Box>
//       <Box style={{backgroundColor:'magenta'}}>Box 7</Box>
//     </View>
//   );
// }
// const styles = StyleSheet.create({
//   container: {
//     width:300,
//     // gap:9,
//     // height:400,
//     borderWidth:6, 
//     borderColor:"black",
//     alignItems:"flex-start"
//   },
// });


// dimensions (not update on changes by default)
// so we use useWindowDimension


// export default function App() {
//   const [dimensions,setDimensions]=useState({
//     widow:Dimensions.get("window")
//   })
//   useEffect(()=>{
//     const subsription= document.addEventListener("change",({window})=>{
//       setDimensions({window})
//     });
//     return ()=>subsription.remove();
//   })

//   const windowWidth=dimensions.width; 
//   const windowHeight=dimensions.height;

//   return (
//     <SafeAreaView style={styles.container}>
//       <View style={[styles.box,{width: windowWidth>500 ? "70%" : "50%",
//     height:windowHeight>600 ? "60%":"90%",}]}>
//         <Text style={[styles.text,{fontSize:windowWidth>500?50:24,}]}>Hello</Text>

//       </View>
//     </SafeAreaView>
//   )
// }

// // const windowWidth=Dimensions.get("window").width
// // const windowHeight=Dimensions.get("window").height

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "plum",

//     justifyContent:"center",
//     alignItems:"center"
//   },
//   box:{

//     justifyContent:"center",
//     backgroundColor:"lightblue",
//     alignItems:"center"

//   },

//   text: {
//     fontWeight:"bold"
//   }
// })


// // platform module
// import { Platform } from 'react-native';

// export default function App() {


//   return (
//       <View style={[styles.container]}>
//         <Text style={[styles.text]}>Hello</Text>

//       </View>
//   )
// }

// // const windowWidth=Dimensions.get("window").width
// // const windowHeight=Dimensions.get("window").height

// const styles = StyleSheet.create({

//   container: {
//     flex: 1,
//     backgroundColor: "plum",

//     // justifyContent:"center",
//     alignItems:"center"
//   },

//   text: {
//     fontWeight:"bold",
//     fontSize:20,
//     ...Platform.select({
//       ios:{
//         color:"blue"
//       },android:{
//         color:"red"
//       }
//     })
//   }
// })

import { View, StyleSheet, Image } from "react-native"
import PokeHome from "./components/PokeHome"
import { PokeDataProvider } from "./context/Context"
// import LoginForm from "./components/LoginForm"

export default function App() {
  return (
    // <LoginForm/>
    <PokeDataProvider>
      <View style={[styles.container]}>
        <Image
          source={{ uri: "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png" }}
          style={styles.logo}
        />
        <PokeHome />
      </View>
    </PokeDataProvider>
  )
}

// const windowWidth=Dimensions.get("window").width
// const windowHeight=Dimensions.get("window").height

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#040D12",
    justifyContent: "flex-start",
    alignItems: "center"
  },
  logo:{
    height: 100,
    width: 300
  }


})