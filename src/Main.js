import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    ViewPagerAndroid,
    Image
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import Profile from './components/profile';
import Movies from './components/Movies';

var {one}='0';
export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tab: 0,
        }
    }
    updateTab(n) {
        this.refs['slider'].setPage(n);
        this.setState({ tab: n });
    }
    static navigationOptions = {
        header: null

    }
    static defaultProps={
        feedIcon:'home',
        chatIcon:'comments-o',
        notifyIcon:'bell',
        userIcon:'user'
    }
   
    render() {
        return (
            <View style={styles.container}>
                <ViewPagerAndroid style={styles.bodyTab}
                    ref='slider'>
                    <View><Movies /></View>
                    <View><SecondTab /></View>
                    <View><ThirdTab /></View>
                    <View><Profile/></View>
                </ViewPagerAndroid>
                <View style={styles.renderTab}>

                    <Text style={styles.renderTabItems} onPress={() => this.updateTab(0)}>
                        <Icon  name={this.props.feedIcon} size={30} color={'#050'} />
                    </Text>

                    <Text style={styles.renderTabItems} onPress={() => this.updateTab(1)}>
                       <Icon name={this.props.chatIcon} size={30} color={'#050'} />
                    </Text>

                    <Text style={styles.renderTabItems} onPress={() => this.updateTab(2)}>
                        <Icon name={this.props.notifyIcon} size={30} color={'#050'} />
                    </Text>

                    <Text style={styles.renderTabItems} onPress={() => this.updateTab(3)}>
                       <Icon name={this.props.userIcon} size={30} color={'#050'} />
                    </Text>
                </View>
            </View>
        );
    }
}

class SecondTab extends Home {
    render() {
        return (
            <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
                <Text style={{fontSize:50}}> Hello</Text>
                <Text style={{fontSize:30}}>2</Text>
            </View>
        );
    }
}
class ThirdTab extends Home {
    render() {
        return (
            <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1}}>
                <Text style={{fontSize:50}}>Hello</Text>
                <Text style={{fontSize:30}}>3</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f3fcd9'
    },
    iconsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: '#ddd'
    },
    bodyTab: {
        flex: 10,
        width: '100%'
    },
    renderTab: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        width: '100%',
    },
    renderTabItems: {
        flex: 1,
        height: '100%',
        textAlign: 'center',
        textAlignVertical: 'center',
    },
    main:{
        flex: 1,
        backgroundColor: '#000'
    },
    header:{
        flex:1,
        backgroundColor: 'rgba(0,0,0, 0.5)',
        alignItems: 'center',
        justifyContent: 'center',
        padding:20,
      },
      background: {
        flex: 1,
        width: null,
        alignSelf: 'stretch',
        
      },
      name:{
        fontSize:22,
        marginTop:16,
    
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
        fontSize:14,
        color:'#0394c0',
        fontWeight:'300',
        fontStyle:'italic'
    
      }
});