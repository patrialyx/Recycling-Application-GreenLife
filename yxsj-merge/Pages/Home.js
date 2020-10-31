import { StatusBar } from 'expo-status-bar';
import React ,{ Component,useState,useEffect } from 'react';
import { StyleSheet, View, Image, ScrollView, TouchableOpacity} from 'react-native';
import Donut from '../ProgressBar/progress_chart.js'
import Fire from '../Backend/Fire.js'
import { Card, Button, Icon, Text } from 'react-native-elements';


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
        <Image source={require('../assets/recycling.jpg')} style={styles.secondContainer} />        
        {/* header */}
        
        <ScrollView 
          style={{width:'100%', height: '100%'}}
          contentContainerStyle={{
            justifyContent: 'space-between'
        }}>
        <View style={{alignItems: 'center'}}>
        <Image source={require('../assets/greenlife.png')} style={styles.image} />
        </View>
        <Card
              title="My Progress" 
              containerStyle={{ marginBottom: 5 }}>
              <View style={{justifyContent: 'space-evenly', flexWrap: 'wrap', alignItems: 'center'}}>
                <View style={{flexDirection: 'row', justifyContent: 'space-evenly', flexWrap: 'wrap', alignItems: 'center'}}>
                <Donut style={{flex:1, padding: 10}} percentage={this.state.percent}/>
                <Text style={{flex:1, fontSize:15, padding: 10}}>{this.state.next_level} points to the next level!</Text>
                </View>
                <View style={{flex:4, flexDirection: 'column', fontSize:20, marginLeft:10}}>
                  <Text style={{fontSize:20, flex:1, flexDirection: 'column', fontWeight: 'bold', padding: 10}}>Welcome, {Fire.shared.user.displayName}!</Text> 
                  <Text style={{fontSize:18, flex:1, flexDirection: 'column', fontWeight: 'bold', textAlign: 'center', padding: 10}}>Level: {this.state.level}</Text>
                  <Text style={{fontSize:18, flex:1, flexDirection: 'column', fontWeight: 'bold', textAlign: 'center'}}>Total Points: {this.state.total_points}</Text>   
                </View>
              </View>
              
              <Button
                title="View recycling history"
                buttonStyle={{
                  borderRadius: 10,
                  marginLeft: 10,
                  marginRight: 10,
                  marginBottom: 0,
                  backgroundColor: '#CACC90'
                }}
                onPress={() => this.props.navigation.navigate("Points")}
              />
            </Card>
        
            <Card
              title="Search the recycling subcategory of your disposable!" 
              image={require('../assets/detect.jpg')}
              containerStyle={{ marginBottom: 5 }}>
              <Text style={{ marginBottom: 10 }}>Not sure if an item is recyclable? Simply tell us what it is, or take a photo of the object and we will tell you if it is recyclable!</Text>
              <Button
                title="Search"
                buttonStyle={{
                  borderRadius: 10,
                  marginLeft: 10,
                  marginRight: 10,
                  marginBottom: 0,
                  backgroundColor: '#CACC90'
                }}
                onPress={() => this.props.navigation.navigate("Search")}
              />
            </Card>

            <Card
              title="Fun Facts about Recycling"
              image={require('../assets/cute.jpg')}
              containerStyle={{ marginBottom: 5 }}>
              <Text style={{ marginBottom: 10 }}>In 2019, about 7.23 million tonnes of solid waste was generated, of which 4.25 million tonnes were recycled!</Text>
              <Button
                buttonStyle={{
                  borderRadius: 10,
                  marginLeft: 10,
                  marginRight: 10,
                  marginBottom: 0,
                  backgroundColor: '#CACC90'
                }}
                onPress={() => this.props.navigation.navigate("Education")}
                title="Learn more"
              />
            </Card>
            
            </ScrollView>
        {/* <TouchableOpacity style = {styles.funfact} onPress={()=> this.props.navigation.navigate("Education")}>
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
        {/* <TouchableOpacity style = {styles.search} onPress={()=>this.props.navigation.navigate('Search')}>
          <Text style={{fontSize:30,fontWeight: 'bold',paddingTop:10}}>Search</Text> 
              <View style={{flexDirection: 'row', justifyContent: 'space-evenly',flex : 1, alignItems: 'center'}}>
                <Image 
                source={require('../assets/loupe.png')} 
                style={{ width: 100, height: 100, resizeMode: 'contain',flex: 1}}
                />
                <Text style={{fontSize:15,flex: 2}}>
                Not sure if an item is recyclable? Simply tell us what it is, or take a photo of the object and we will tell you if it is recyclable!
                </Text> 
              </View>
        </TouchableOpacity> */}
        {/* progress container */}
        {/* <TouchableOpacity style = {styles.progress} onPress={()=>this.props.navigation.navigate('Points',{total_points:this.state.total_points,percent:this.state.percent,hist: this.state.hist,level:this.state.level})}>
        <Text style={{fontSize:30,fontWeight: 'bold',paddingTop:10}}>My Progress</Text> 
          <View style={{flexDirection: 'row', justifyContent: 'space-evenly', flexWrap: 'wrap', alignItems: 'center'}}>
            <Donut percentage={this.state.percent}/>
            <Text style={{fontSize:20, fontWeight: 'bold'}}>User: {Fire.shared.user.displayName}</Text> 
            <View style={{flex:1, fontSize:20, marginLeft:10}}>
            <Text style={{fontSize:20,fontWeight: 'bold'}}>Level: {this.state.level}</Text>
              <Text style={{fontSize:20,fontWeight: 'bold'}}>Total Points: {this.state.total_points}</Text>   
              <Text style={{fontSize:15}}>{this.state.next_level} points to the next level!</Text> 
            </View>
          </View>
        </TouchableOpacity> */}
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
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding:15,
  },
  funfact: {
    flex: 4,
    width: '100%',
    backgroundColor: '#8AA989',
    flexDirection: 'column',
    alignItems: 'center',
    // paddingTop:30,
    // justifyContent: 'space-between',
    borderWidth:10,
    borderColor: 'transparent'

  },
  search: {
    flex: 2,
    width: '100%',
    backgroundColor: '#C0CEB2',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth:10,
    borderColor: 'transparent'
  },
  progress: {
    flex: 3,
    width: '100%',
    backgroundColor: '#CACC90',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth:10,
    borderColor: 'transparent'
  },
  image: {
    flex: 1, 
    marginBottom: 20,
    height: 80,
    width: 150,
    alignContent: 'center'

}
});

export default Home;