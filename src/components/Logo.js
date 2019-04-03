import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, StatusBar,Image} from 'react-native';

export default class Logo extends Component{
   
    render(){
    return(
        <View style={styles.container}>
   <Image style={{width:150, height:150}}
   source={require('../Images/335.png')}/>
   <Text style={styles.LogoText}>
    Connecting world toghter
   </Text>
   </View>
    )
    }
}
const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
    justifyContent: 'center',
    alignItems:'center'
    
    },
    LogoText : {
        marginVertical:15,
        fontSize :18,
        color:'#ffffff'
    }
});
