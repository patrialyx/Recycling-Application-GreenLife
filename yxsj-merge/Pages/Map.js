import React from 'react';

import MapView, { AnimatedRegion, Marker } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
import Loader from '../Components/Loader';

import {
  StyleSheet,
  Dimensions,
  View,
  Text,
  TouchableWithoutFeedback
  
} from "react-native";
import { Icon, CheckBox, Button } from "react-native-elements"
import { ActivityIndicator } from "react-native";
import Fire from "../Backend/Fire";

height = Dimensions.get("window").height;
width = Dimensions.get("window").width;



export default class Map extends React.Component {

  state = {
    filterCard: false,
    card: false,
    category: 0,
    destination: {},
    direction: false,
    intitalRegion: {},
    mapRegion: {},
    loading: false,
    filters: {
      ewaste: true,
      metal: true, 
      glass: true, 
      plastic: true, 
      paper: true
    }
  }

  type = {
    "e-waste": "E-waste",
    others: "Paper, Plastic, Metal, Glass"
  }

  filterBins = (bin) => {
    if (bin.type == "e-waste") {
      if (this.state.filters.ewaste) {
        return true
      } else {
        return false
      }
    } else {
      if (this.state.filters.glass || this.state.filters.plastic ||this.state.filters.metal ||this.state.filters.paper) {
        return true
      } else {
        return false
      }
    }
  }

  walkTime = (distance) => {return distance/5}

  distance = (lat1, lon1, lat2, lon2) => {  // generally used geo measurement function
    console.log("Distance state?:", this.state.initialRegion)
    // lat1 = this.state.intitalRegion.latitude;
    // lon1 = this.state.intitalRegion.longitude;
    // lat2 = this.state.destination.latitude;
    // lon2 = this.state.destination.longitude;
    var R = 6378.137; // Radius of earth in KM
    var dLat = lat2 * Math.PI / 180 - lat1 * Math.PI / 180;
    var dLon = lon2 * Math.PI / 180 - lon1 * Math.PI / 180;
    var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
    Math.sin(dLon/2) * Math.sin(dLon/2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    var d = R * c;
    return Math.round(d * 1000); // meters
  }

  pinColor = (category) => {
    switch(category){
      case("others"):
        return 'blue';
      case("e-waste"):
        return 'red';
    }
  }

  getCurrentLocation = async() => {

    navigator.geolocation.getCurrentPosition(
        position => {
        let region = {
                latitude: parseFloat(position.coords.latitude),
                longitude: parseFloat(position.coords.longitude),
                latitudeDelta: 0.006,
                longitudeDelta: 0.006
            };
            this.setState({
                initialRegion: region
            });
            console.log("Initial Region:", this.state.initialRegion)
        },
        error => console.log(error),
        {
            enableHighAccuracy: true,
            timeout: 20000,
            maximumAge: 1000
        }
    );
  }

  goToInitialLocation = () => {
    let initialRegion = Object.assign({}, this.state.initialRegion);
    console.log("Did it change here?", this.state.initialRegion)
    initialRegion["latitudeDelta"] = 0.09;
    initialRegion["longitudeDelta"] = 0.09;
    this.mapView.animateToRegion(initialRegion, 2000);
  }
  
  componentDidMount(){
    console.log("Currently in Africa...")
    this.setState({
      loading: true,
    });
    this.getCurrentLocation();
    console.log("componentDidMount():", this.state.intitalRegion)
    this.setState({
      loading: false,
    });
    // this.forceUpdate()
    if (this.props.route.params) {
      switch (this.props.route.params.type) {
        case "Plastic" :
          this.setState({filters: {
            ewaste: false,
            metal: false, 
            glass: false, 
            plastic: true, 
            paper: false
          }})
          break
        case "Paper" :
          this.setState({filters: {
            ewaste: false,
            metal: false, 
            glass: false, 
            plastic: false, 
            paper: true
          }})
          break
        case "Glass" :
          this.setState({filters: {
            ewaste: false,
            metal: false, 
            glass: true, 
            plastic: false, 
            paper: false
          }})
          break
        case "Metal" :
          this.setState({filters: {
            ewaste: false,
            metal: true, 
            glass: false, 
            plastic: false, 
            paper: false
          }})
          break
        case "Ewaste" :
          this.setState({filters: {
            ewaste: true,
            metal: false, 
            glass: false, 
            plastic: false , 
            paper: false
          }})
          break
      }
    }
  }



  render() {
    return (
      <>
      <Loader loading={this.state.loading} />
      
      <MapView
          style={StyleSheet.absoluteFillObject}
          // region={this.state.mapRegion}
          followUserLocation={true}
          ref={ref => (this.mapView = ref)}
          zoomEnabled={true}
          showsUserLocation={true}
          // onMapReady={this.goToInitialLocation.bind(this)}
          initialRegion={this.state.initialRegion}
          onPress={()=>{
            this.setState({
              card:false,
            })
          }}>

      {Fire.shared.bins.filter(this.filterBins).map((marker) => {
        return (
          <MapView.Marker
          key={marker.uid}
          identifier={marker.uid.toString()}
          coordinate={{
            longitude: marker.coord.longitude? marker.coord.longitude : 0,
            latitude: marker.coord.latitude? marker.coord.latitude : 0, 
            latitudeDelta: 0.02,
            longitudeDelta: 0.02
          }}
          pinColor={this.pinColor(marker.type)}
          onPress={() => {
            this.setState({
              destination: marker.coord,
              direction: false,
              card: true,
              category: this.type[marker.type],
            });
          }}
          />
          )}
          )
        }
        

          {((this.state.destination) && this.state.direction) ?(
            <MapViewDirections
            // origin={{latitude: 1.3483, longitude: 103.6831,}}
            origin={this.state.initialRegion}
            destination={this.state.destination}
            apikey={"AIzaSyBEIbuhr6Srcq7eGKaVYjRSpAEuGefGPQ8"}
            strokeWidth={3}
            strokeColor="blue"
            mode="WALKING"
            onReady={result => {
                console.log(`Distance: ${result.distance} km`)
                console.log(`Duration: ${result.duration} min.`)
              }}
              />
              ):(<View/>)}
            
      </MapView>
      
      {this.state.card ? (
        <TouchableWithoutFeedback>
          <View style={styles.card}>
          <Button
              color='#3CB371'
              size={50}
              title="Directions"
              onPress={() => {
                  this.setState({direction: true, card: false}, () => {console.log('Where is my map?', this.state.intitalRegion )});
              }}
          />
          <View style={styles.description}>          
            <Text style={styles.distance}>
              Distance: {this.distance(
                this.state.initialRegion.latitude,
                this.state.initialRegion.longitude,
                this.state.destination.latitude,
                this.state.destination.longitude)}m
            </Text>
            <Text style={styles.distance}>
              Category: {this.state.category}
            </Text>
          </View>

          </View>
        </TouchableWithoutFeedback>
        ) : (
          <View />
        )}


        { this.state.filterCard?(
          <TouchableWithoutFeedback>
            <View style={styles.filter}>
              <CheckBox title='Metal' checked={this.state.filters.metal} onPress={()=>this.setState({filters: {...this.state.filters, metal: !this.state.filters.metal}})}/>
              <CheckBox title='Plastic' checked={this.state.filters.plastic} onPress={()=>this.setState({filters: {...this.state.filters, plastic: !this.state.filters.plastic}})}/>
              <CheckBox title='Paper' checked={this.state.filters.paper} onPress={()=>this.setState({filters: {...this.state.filters, paper: !this.state.filters.paper}})}/>
              <CheckBox title='Glass' checked={this.state.filters.glass} onPress={()=>this.setState({filters: {...this.state.filters, glass: !this.state.filters.glass}})}/>
              <CheckBox title='E-Waste' checked={this.state.filters.ewaste} onPress={()=>this.setState({filters: {...this.state.filters, ewaste: !this.state.filters.ewaste}})}/>
              <Button title="Close" onPress={()=>this.setState({filterCard: false})}/>

            </View>
          </TouchableWithoutFeedback>
        ) : (
        <TouchableWithoutFeedback>
          <Button
            buttonStyle={styles.filterButton}
            onPress={()=>this.setState({filterCard: true})}
            title="filters"
          /> 

        </TouchableWithoutFeedback>
        )
      }
      </>
    );
  }
}

const styles = StyleSheet.create({
  filter: {
    color: "#3CB371",
    backgroundColor: "#fff",
    width: width - 20,
    position: "absolute",
    overflow: "hidden",
    margin: 10,
    top: 0,
    shadowRadius: 20,
    borderRadius: 8,
    padding: 10,
    elevation: 20,
    flexDirection: "column-reverse",
  },
  filterButton: {
    flex: 1,
    color: '#ff1212',
    height: 300, 
    margin: 14,
    padding: 24
  },
  card: {
    color: "#3CB371",
    backgroundColor: "#fff",
    height: 90,
    width: width - 20,
    position: "absolute",
    overflow: "hidden",
    margin: 10,
    bottom: 0,
    shadowRadius: 20,
    borderRadius: 8,
    padding: 10,
    elevation: 20,
    flexDirection: "column-reverse",
  },
  description: {
    flexDirection: 'row'
  },
  distance: {
    fontSize: 16,
    padding: 10,
  },
});

const response = [
  {
    id: "1",
    coordinates: {
      latitude: 1.2893,
      longitude: 103.8631,
    },
    title: "Singapore Flyer",
    category: 1
  },
  {
    id: "2",
    coordinates: {
      latitude: 1.4043,
      longitude: 103.7930,
    },
    title: "Singapore Zoo",
    category: 1,
  },
  {
    id: "3",
    coordinates: {
      latitude: 1.3483,
      longitude: 103.6831,
    },
    title: "NUS 2.0",
    category: 2,
  },
  {
    id: "4",
    coordinates: {
      latitude: 1.3187,
      longitude: 103.7064,
    },
    title: "Jurong Bird Park",
    category: 1,
  },
];