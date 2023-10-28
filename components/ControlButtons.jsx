// import React from 'react'
import {View,TouchableOpacity,Text,StyleSheet} from 'react-native'
import { useGlobleContext } from '../context/Context'

const ControlButtons = () => {

    const {setPokemons,setUrl,nextUrl,prevUrl}=useGlobleContext()

    return (
        <View style={styles.btnContainer}>
            <TouchableOpacity style={styles.button} onPress={() => {
                setPokemons([])
                setUrl(prevUrl)
            }}> <Text style={styles.text} > ←</Text></TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => {
                setPokemons([])
                setUrl(nextUrl)
            }} > <Text style={styles.text}> →</Text></TouchableOpacity>

        </View>

    )
}

const styles=StyleSheet.create({
    btnContainer:{
        flexDirection: "row",
        gap: 40,
        paddingBottom: 10
    },
    text:{
        color: "#fff",
        fontSize: 20
    },
    button:{
        backgroundColor: "#183D3D",
        padding: 10,
        borderRadius: 7
    },
})

export default ControlButtons