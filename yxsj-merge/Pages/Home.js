import { StatusBar} from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity} from 'react-native';
import Donut from '../ProgressBar/progress_chart.js';
import Fire from '../Backend/Fire.js';

export default function Home(props) {
  
  const [value, setValue] = useState(1);
  useEffect(() => {
    async function updateValue(){
      const number = await Fire.shared.getTotalPoints();
      // console.log('number is ',number)
      setValue(number);
    }
    updateValue();
  }, []);
  const total_points = value
  const percent = Math.floor((total_points%1000)/10)
  const level = Math.floor(total_points/1000)+1
  const next_level = Math.floor(1000-(total_points%1000))
  return (
    <View style={styles.screen}>
      {/* header */}
      <TouchableOpacity style = {styles.header} onPress={()=> console.log("header pressed")}> 
      <Text style={{fontSize:30}}>gREenlife</Text>
      </TouchableOpacity>
      {/* funfact */}
      <TouchableOpacity style = {styles.funfact} onPress={()=> console.log("fun fact pressed")}>
        <Text style={{fontSize:30,fontWeight: 'bold',paddingTop:10}}>Fun Fact</Text> 
          <View style={{flexDirection: 'row', justifyContent: 'space-evenly',flex : 1, alignItems: 'center'}}>
            <Image 
            source={require('../assets/recycle.png')} 
            style={{ width: 100, height: 100, resizeMode: 'contain',flex: 1}}
            />
            <Text style={{fontSize:15,flex: 2}}>
            In 2019, about 7.23 million tonnes of solid waste was generated, of which 4.25 million tonnes were recycled
            </Text> 
          </View>
      </TouchableOpacity>
      {/* search container */}
      <TouchableOpacity style = {styles.search} onPress={()=> props.navigation.navigate('Search')}>
        <Image 
          source={require('../assets/loupe.png')} 
          style={{ width: 50, height: 50, resizeMode: 'contain',flex: 1}}
          />
        <Text style={{fontSize:30,flex:2,fontWeight: 'bold'}}>Search</Text> 
      </TouchableOpacity>
      {/* progress container */}
      <TouchableOpacity style = {styles.progress} onPress={()=> this.props.navigation.navigate('Points',{total_points})}>
        <Text style={{fontSize:30,fontWeight: 'bold',paddingTop:10}}>My Progress</Text> 
        <Text style={{fontSize:20}}>Level {level}</Text> 
        
        <View style={{flexDirection: 'row', justifyContent: 'space-evenly', flexWrap: 'wrap', alignItems: 'center',paddingLeft:'10%'}}>
          <Donut percentage={percent}/>
          <Text style={{flex:1, fontSize:20, marginLeft:50}}>{next_level} points to the next level</Text> 
        </View>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding:10,
    
  },
  header: {
    flex: 1,
    width: '100%',
    backgroundColor: '#fff',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  funfact: {
    flex: 4,
    width: '100%',
    backgroundColor: '#add8e6',
    flexDirection: 'column',
    alignItems: 'center',
    // paddingTop:30,
    // justifyContent: 'space-between',
    borderWidth:10,
    borderColor:'#fff',
  },
  search: {
    flex: 2,
    width: '100%',
    backgroundColor: '#8ED081',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth:10,
    borderColor:'#fff',
  },
  progress: {
    flex: 3,
    width: '100%',
    backgroundColor: '#FFE2D1',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth:10,
    borderColor:'#fff',
  },
});
