import { StatusBar } from 'expo-status-bar';
import React ,{ Component,useState,useEffect } from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity} from 'react-native';
import Donut from '../ProgressBar/progress_chart.js'
import Fire from '../Backend/Fire.js'


class Home extends Component {


  constructor(props) {
    
    super(props);
    
    this.state = {
      total_points: 0,
      hist: [],
      percent: 0,
      level: 0,
      next_level: 0,
      isLoading: false,
      error: null
    }
  }

  // async loadAsyncData() {
    
  //   this.setState({isLoading: true, error: null});
    
  //   try {
  //     console.log("This is running");
  //     const resp = await Fire.shared.getTotalPoints();
  //     const hist_resp = await Fire.shared.getPointHistory();
  //     const percent = Math.floor((resp%1000)/10);
  //     const level = Math.floor(resp/1000)+1;
  //     const next_level = Math.floor(1000-(resp%1000));
  //     this.setState({isLoading: false, total_points: resp,hist: hist_resp, percent: percent, level: level, next_level: next_level});
  //   } catch(e) {
  //     this.setState({isLoading: false, error: e});
  //   }
  // }

  updateState = (total, hist) => {
    const percent = Math.floor((total%1000)/10);
    const level = Math.floor(total/1000)+1;
    const next_level = Math.floor(1000-(total%1000));
    this.setState({total_points: total, hist, percent, level, next_level});
  }
  
  componentDidMount() {
    
    // this.loadAsyncData();
    Fire.shared.getRealtimePoints(this.updateState)
    
  }
  render(){
    return (
      <View style={styles.screen}>
        {/* header */}
        <TouchableOpacity style = {styles.header} onPress={()=> this.props.navigation.navigate("Education")}> 
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
        <TouchableOpacity style = {styles.search} onPress={()=>this.props.navigation.navigate('Search')}>
          <Image 
            source={require('../assets/loupe.png')} 
            style={{ width: 50, height: 50, resizeMode: 'contain',flex: 1}}
            />
          <Text style={{fontSize:30,flex:2,fontWeight: 'bold'}}>Search</Text> 
        </TouchableOpacity>
        {/* progress container */}
        <TouchableOpacity style = {styles.progress} onPress={()=>this.props.navigation.navigate('Points',{total_points:this.state.total_points,percent:this.state.percent,hist: this.state.hist,level:this.state.level})}>
          <Text style={{fontSize:30,fontWeight: 'bold',paddingTop:10}}>My Progress</Text> 
          <Text style={{fontSize:20}}>Level {this.state.level}</Text> 
          <View style={{flexDirection: 'row', justifyContent: 'space-evenly', flexWrap: 'wrap', alignItems: 'center',paddingLeft:'10%'}}>
            <Donut percentage={this.state.percent}/>
            <Text style={{flex:1, fontSize:20, marginLeft:50}}>{this.state.next_level} points to the next level</Text> 
          </View>
        </TouchableOpacity>
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

export default Home;