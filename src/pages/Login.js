import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, StatusBar ,TouchableOpacity,
ImageBackground} from 'react-native';


import Logo from '../components/Logo';
import Form from '../components/Form';


import {Actions} from 'react-native-router-flux';

export default class Login extends Component{
        
        

    signup(){
          Actions.signup()
    
}
    render(){
    return(
    <View style={styles.container}>
    <ImageBackground style={{width:500, height:619}}
   source={require('/home/digvijay/Desktop/newp/src/Images/25.jpg')}>
    <Logo/>
    <Form type='Login'/>
    <View style={styles.signupTextcont}>
        <Text style={styles.signupText}>Don't have an account yet ?</Text>
        <TouchableOpacity onPress={()=>Actions.Signup({})}>
        <Text style={styles.SignupButton}>Signup</Text>
        </TouchableOpacity>
    </View>
    </ImageBackground>
    </View>
    )
}
    

}
const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    
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
