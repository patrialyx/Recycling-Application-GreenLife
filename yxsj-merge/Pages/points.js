import { StatusBar } from 'expo-status-bar';
import React ,{ Component,useState,useEffect } from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity,ScrollView } from 'react-native';
import ProgressBar from '../ProgressBar/progress_bar.js';


class Points extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      total_points: props.route.params.total_points,
      percent: props.route.params.percent,
      hist: props.route.params.hist.reverse(),
      level:props.route.params.level
    } 
  }
  render(){
    return (
    <View style={styles.screen}>
      <Image source={require('../assets/recycling.jpg')} style={styles.secondContainer} />        
      <Text style={{fontSize:30}}>Points History</Text> 
      <ProgressBar value={this.state.percent}/>
      <Text style={{fontSize:20,paddingTop:10}}>Level {this.state.level}</Text> 
      <Text style={{fontSize:20,paddingTop:10}}>Total Points: {this.state.total_points}</Text> 
      <ScrollView 
          style={{width:'100%', height: '100%'}}
          contentContainerStyle={{
            justifyContent: 'space-between'
        }}>
      {this.state.hist.map((point_value)=>
      <View style={styles.point_box}>
         <Text style={{fontSize:30,fontWeight: 'bold'}}>{point_value['type']} </Text>
          <Text style={{fontSize:20,fontWeight: 'bold'}}>{point_value['points']} Points</Text>
      </View>
      )}
      </ScrollView>
      
      <StatusBar style="auto" />
    </View>
    );
  }
  
}

const styles = StyleSheet.create({
  secondContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: '110%',
    height: '110%',
  },
  screen: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding:10,
  },
  point_box: {
    height:'15%',
    width:'100%',
    backgroundColor: '#CACC90',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 5,
    paddingLeft:'10%',
    paddingRight:'10%'
    
  },
});
export default Points;