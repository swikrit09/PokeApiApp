import {View,Text,StyleSheet} from "react-native"

const Box = ({style,children}) => {
  return (
    <View style={[styles.box,style]}>
        <Text style={[styles.text]}>{children}</Text>
    </View>
  )
}

export default Box


const styles=StyleSheet.create({
    box:{
        backgroundColor:"red",
        padding:20
    },
    text:{
        fontSize:24,
        fontWeight:"bold",
        textAlign:"center"
    }
})