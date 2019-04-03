import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, StatusBar,TouchableOpacity} from 'react-native';


import Logo from '../components/Logo';
import Form from '../components/Form';

import {Actions} from 'react-native-router-flux';


export default class Signup extends Component{z
   
goBack(){
     Actions.pop();

}
    render(){
    return(
    <View style={styles.container}>
    <Logo/>
    <Form type='Signup'/>
    <View style={styles.signupTextcont}>
        <Text style={styles.signupText}>Already have an account?</Text>
        <TouchableOpacity onPress={()=>Actions.Login({})}>
        <Text style={styles.SignupButton}>Sign in</Text>
        </TouchableOpacity>
    </View>
    </View>
    )
}

}
const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#455a64',
    },
    signupTextcont:{
        flexGrow: 1,
        justifyContent: 'center', 
        alignItems: 'flex-end',
        marginVertical: 16,
        flexDirection:'row'
    },
    signupText:{
        color:'rgba(255,255,255,0.7)'
    },
    SignupButton:{
     color:'#ffffff',
     fontSize:16,
     fontWeight:'500'   
    }
});