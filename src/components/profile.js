import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  AppRegistry,
  Image,
  TouchableOpacity,
  ViewPagerAndroid
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Profile extends Component {

  

  render() {
    return(
      <View style={styles.container}>
        
        <View style={styles.header}>
        <Icon name="cog" style={{
                            position: 'absolute',
                            left: 0,
                            right: 0,
                            top: 0,
                            bottom: 0,
                            
                        }} />
          <View style={styles.profilrpicwrap}>
            <Image style={styles.profilrpic} source={require('/home/digvijay/Desktop/newp/src/Images/1234.jpeg')}></Image>
          </View>
          <Text style={styles.name}>Digvijay kumar</Text>
          
          <View >
          <Text style={styles.name} > Country - <Text style={styles.pos}>India</Text></Text>
            <Text style={styles.name} > Work - <Text style={styles.pos}>Work </Text></Text>
            <TouchableOpacity style={styles.buttonContainer} onPress={() => ''}>
              <Text style={styles.name}> Teams </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonContainer} onPress={() => ''}>
              <Text style={styles.name}> EditProfile </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonContainer} onPress={() => ''}>
              <Text style={styles.name}> Log Out </Text>
            </TouchableOpacity>
            
          </View>
          
        </View>
        
      
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#000'
  },
  containers:{
    backgroundColor: '#000'
  },
  header:{
    flex:1,
    backgroundColor: 'rgba(0,0,0, 0.5)',
    alignItems: 'center',
    
    padding:20,
  },
  background: {
    flex: 1,
    width: null,
    alignSelf: 'stretch',
    
  },
  name:{
    fontSize:22,
    marginTop:10,

    color:"#fff",
    fontWeight:'bold'
  },
  profilrpicwrap:{
    width:180,
    height:180,
    borderRadius: 100,
    borderColor: 'rgba(0,0,0,0.4)',
    borderWidth:16,
  },
  profilrpic: {
    flex: 1,
    width:null,
    borderRadius:100,
    alignItems: 'stretch',
    borderColor:'#fff',
    borderWidth:4
  },
  
  pos:{
    fontSize:18,
    color:'#f3fcd9',
    fontWeight:'300',
    fontStyle:'italic'

  }
});
