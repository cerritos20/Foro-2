import React, { useState } from 'react'
import { Text, styleSheet, View, Image, Alert } from 'react-native'
import { TextInput } from 'react-native-gesture-handler';
import { ImageBackground, TouchableOpacity } from 'react-native-web';

import appFirebase from '../credenciales'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
const auth = getAuth(appFirebase)

export default function Login(props){

    const [email, setEmail] = useState()
    const [Password, setPassword] = useState()

    const logueo = async()=>{
        try{
            await signInWithEmailAndPassword(auth,email,Password)
            Alert.alert('iniciando sesion', 'accediendo...')
            props.navigation.navigate('home')
        }catch(error){
            console.log(error);
            Alert.alert('Error', 'El usuario o el password son incorrectos')
        }
        
    }

    return(
        <View>
            <View style={styles.tarjeta}>
                <View style={styles.cajaTexto}>
                    <TextInput placeholder='correo@gmail.com' style={{paddingHorizontal:15}}
                    onchangeText={(text)=>setEmail(text)} />
                </View>

                <View style={styles.cajaTexto}>
                    <TextInput placeholder='Password' style={{paddingHorizontal:15}} secureTextEntry={true}
                    onchangeText={(text)=>setPassword(text)}  />
                </View>

                <View style={styles.padreBoton}>
                    <TouchableOpacity style={styles.cajaBoton} onPress={logueo}>
                        <Text style={styles.textoboton}>Sign In</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );

}
const styles = styleSheet.create({
tarjeta:{
    margin:20,
    backgroundColor:'white',
    borderRadius:20,
    width:'90%',
    padding:20,
    ShadowColor:'#000',
    shadowOffser:{
        width:0,
        height:2,
    },
    ShadowOpacity:0.25,
    shadowRadius:4,
    elevation:5,
},
cajaTexto:{
    paddingVertical:20,
    backgroundColor:'#cccccc40',
    borderRadius:30,
    marginVertical:10,
},
padreBoton:{
    alignItems:'center',
},
cajaBoton:{
    backgroundColor:'#525FE1',
    borderRadius:30,
    paddingVertical:20,
    width:150,
    marginTop:20
},
textoboton:{
    textAlign: 'center',
    color:'white'
}
});