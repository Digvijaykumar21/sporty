import React, {Component} from 'react';

import {Router,Stack,Scene} from 'react-native-router-flux';

import Login from './src/pages/Login';
import Signup from './src/pages/Signup';


export default class Routes extends Component{
        
render(){
    return(
    
        <Router>
        <Stack key="root">
          <Scene key="Login" component={Login} title="Login"/>
          <Scene key="register" component={Signup} title="Register"/>
        </Stack>
      </Router>
    

    )
}
}