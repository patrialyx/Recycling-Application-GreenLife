import React from 'react';

import MapView, { AnimatedRegion, Marker } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";

import {
  StyleSheet,
  Dimensions,
  View,
  Text,
  TouchableWithoutFeedback,
  Button,
} from "react-native";

// import Fire from "./Fire";

height = Dimensions.get("window").height;
width = Dimensions.get("window").width;

export default class Map extends React.Component {

state = {
  card: false,
  category: 0,
  destination: {},
  direction: false,
  intitalRegion: {},
  mapRegion: {}
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
    case(1):
      return 'blue';
    case(2):
      return 'red';
  }
}

getCurrentLocation = async() => {
  navigator.geolocation.getCurrentPosition(
      position => {
      let region = {
              latitude: parseFloat(position.coords.latitude),
              longitude: parseFloat(position.coords.longitude),
              latitudeDelta: 0.09,
              longitudeDelta: 0.09
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
  this.getCurrentLocation();
  console.log("componentDidMount():", this.state.intitalRegion)
 }

render() {
    return (
      <>
      <MapView
          style={StyleSheet.absoluteFillObject}
          // region={this.state.mapRegion}
          followUserLocation={true}
          ref={ref => (this.mapView = ref)}
          zoomEnabled={true}
          showsUserLocation={true}
          onMapReady={this.goToInitialLocation.bind(this)}
          initialRegion={this.state.initialRegion}
          onPress={()=>{
            this.setState({
              card:false,
            })
          }}>

          {response.map((marker) => (
          <MapView.Marker
            key={marker.id}
            identifier={marker.id}
            coordinate={marker.coordinates}
            title={marker.title}
            pinColor={this.pinColor(marker.category)}
            onPress={() => {
                this.setState({
                  destination: marker.coordinates,
                  direction: false,
                  card: true,
                  category: marker.category,
                });
              }}
          />
          ))} 

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
      </>
    );
  }
}

const styles = StyleSheet.create({
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
    fontSize: 20,
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