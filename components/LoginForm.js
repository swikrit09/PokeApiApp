import React, { useState } from 'react'
import { View,Text,TextInput,Button,StyleSheet,KeyboardAvoidingView,Platform } from 'react-native'


const LoginForm = () => {
    const [username,setUsername]=useState("")
    const [password, setPassword] = useState("")
    const [errors, setErrors] = useState({})

    const validateForm=()=>{
        let errors={}
        if(!username) errors.username="UserName is required"
        if(!password) errors.password="Password is required"

        setErrors(errors)

        return Object.keys(errors).length=== 0
    }
    const handleSubmit=()=>{
        if(validateForm()){
            console.log("submitted",username,password)
            setUsername("")
            setPassword("")
            setErrors({})
        }
    }

  return (
    <KeyboardAvoidingView style={styles.container} behavior='padding' keyboardVerticalOffset={Platform.OS==="ios"? 100 :0}>
        <View style={styles.form}>
            <Text style={styles.label}>User Name</Text>
            <TextInput style={styles.input} placeholder='Enter your UserName' value={username} onChangeText={setUsername} />
            {errors.username ? <Text style={styles.errText}>{errors.username}</Text>: null }
            <Text style={styles.label}>Password</Text>
            <TextInput style={styles.input} placeholder='Enter your Password' value={password} onChangeText={setPassword} secureTextEntry/>
            {errors.password ? <Text style={styles.errText}>{errors.password}</Text>: null }
            <Button title='Login' onPress={()=>{handleSubmit()}}></Button>
        </View>
    </KeyboardAvoidingView>
  )
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:"center",
        backgroundColor:"#f5f5f5"
    },
    form:{
        backgroundColor:"white",
        padding:20,
        borderRadius:10,
        shadowColor:"black",
        shadowOpacity:0.25,
        shadowOffset:{
width:0,
height:2
        },
        shadowRadius:4,
        elevation: 5
    },
    label:{
        fontSize:16,
        marginBottom:5,
        fontWeight:"bold"
    },
    input:{
        height:40,
        borderColor:"#ddd",
        borderWidth:1,
        marginBottom:5,
        padding:10,
        borderRadius:5
    },
    errText:{
        color:"red",
        marginBottom:10
    }
})

export default LoginForm