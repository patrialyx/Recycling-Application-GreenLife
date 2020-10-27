import { StatusBar } from 'expo-status-bar';
import React ,{ Component,useState,useEffect } from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity } from 'react-native';
import ProgressBar from '../ProgressBar/progress_bar.js';


class Points extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      total_points: props.route.params.total_points,
      percent: props.route.params.percent,
      hist: props.route.params.hist
    } 
  }
  render(){
    return (
    <View style={styles.screen}>
      <Text style={{fontSize:30}}>Points History</Text> 
      <ProgressBar value={this.state.percent}/>
      <Text style={{fontSize:20,paddingTop:10}}>{this.state.total_points} Points</Text> 
      {this.state.hist.map((point_value)=>
      <View style={styles.point_box}>
         <Text style={{fontSize:30,fontWeight: 'bold'}}>{point_value['type']} </Text>
        <Text style={{fontSize:20,fontWeight: 'bold'}}>{point_value['points']} Points</Text>
      </View>
      )}
      <StatusBar style="auto" />
    </View>
    );
  }
  
}

const styles = StyleSheet.create({
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
    backgroundColor: '#FFE2D1',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 5,
    paddingLeft:'10%',
    paddingRight:'10%'
    
  },
});
export default Points;