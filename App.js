import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, StatusBar} from 'react-native';
import {Router,Stack,Scene} from 'react-native-router-flux';
import Login from './src/pages/Login';
import Signup from './src/pages/Signup';
import Home from './src/Main';
import profile from './src/components/profile';



export default class App extends Component {
  render() {
    return (
     
<Router>
        <Scene key="root">
          <Scene key="Login" component={Login} title="Login"/>
          <Scene key="Signup" component={Signup} title="Register"/>
          <Scene key="main" component={Home}/>
          <Scene key="profile" component={profile}/>

        </Scene>
      </Router>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flexGrow: 1,
      justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#455a64',
  },
    welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
    instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
