import { StatusBar } from 'expo-status-bar';
import React ,{ useState,useEffect } from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity } from 'react-native';
import ProgressBar from '../ProgressBar/progress_bar.js';
import Fire from '../Backend/Fire.js'



export default function Points(props) {
  const [hist, setHist] = useState();
  useEffect(() => {
    async function updateHist(){
      const hist = await Fire.shared.getPointHistory()
      // console.log('number is ',number)
      setHist(hist);
    }
    updateHist();
  }, []);
  const total_points = props.route.params.total_points;
  const percent = Math.floor((total_points%1000)/10)
  const point_hist = [["Plastic",500],["Paper",500],["Metal",500]]
  return (
    <View style={styles.screen}>
      <Text style={{fontSize:30}}>Points History</Text> 
      <ProgressBar value={percent}/>
      <Text style={{fontSize:20,paddingTop:10}}>{total_points} Points</Text> 
      {point_hist.map((point_value)=>
      <View style={styles.point_box}>
         <Text style={{fontSize:30,fontWeight: 'bold'}}>{point_value[0]} </Text>
        <Text style={{fontSize:20,fontWeight: 'bold'}}>{point_value[1]} Points</Text>
      </View>
      )}
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
