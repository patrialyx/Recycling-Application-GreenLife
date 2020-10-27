import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Image, Button,
  Dimensions, Linking
} from "react-native";

import Category from '../Category'
const { height, width } = Dimensions.get('window')

class SubcategoryCard extends Component {
  renderTitle = () => {
    switch (this.props.type) {
      case "Plastic":
        return "Plastic"
      case "Paper":
        return "Paper"
      case "Glass":
        return "Glass"
      case "Ewaste":
        return "E-Waste"
      case "Metal":
        return "Metal"
      case "Nonrecyclable":
        return "Non-Recyclables"
    }
  }
  
  
  
  renderImage = () => {
    switch (this.props.type) {
      case "Plastic":
        return (
          <Image
            style={{ flex: 1, height: null, width: null, resizeMode: 'contain', borderRadius: 5, borderWidth: 1, borderColor: '#dddddd' }}
            source={require('../assets/plastic.png')}
          />
        )
      case "Paper":
        return (
          <Image
            style={{ flex: 1, height: null, width: null, resizeMode: 'contain', borderRadius: 5, borderWidth: 1, borderColor: '#dddddd' }}
            source={require('../assets/paper.png')}
          />
        )
      case "Glass":
        return (
          <Image
            style={{ flex: 1, height: null, width: null, resizeMode: 'contain', borderRadius: 5, borderWidth: 1, borderColor: '#dddddd' }}
            source={require('../assets/glass.png')}
          />
        )
      case "Ewaste":
        return (
          <Image
            style={{ flex: 1, height: null, width: null, resizeMode: 'contain', borderRadius: 5, borderWidth: 1, borderColor: '#dddddd' }}
            source={require('../assets/ewaste.png')}
          />
        )
      case "Metal":
        return (
          <Image
            style={{ flex: 1, height: null, width: null, resizeMode: 'contain', borderRadius: 5, borderWidth: 1, borderColor: '#dddddd' }}
            source={require('../assets/metal.png')}
          />
        )
      case "Nonrecyclable":
        return (
          <Image
            style={{ flex: 1, height: null, width: null, resizeMode: 'contain', borderRadius: 5, borderWidth: 1, borderColor: '#dddddd' }}
            source={require('../assets/no.png')}
          />
        )
    }
  }


  render() {
    return (
        <View style={{ marginTop: 20, paddingHorizontal: 20 }}>
          <Text style={{ fontSize: 24, fontWeight: '700' }}> 
            {this.renderTitle()}
          </Text>
          
          <View style={{ width: width - 40, height: 200, marginTop: 20 }}>
            {this.renderImage()}
          </View>

          <Button  
            title="More Info"  
            onPress={() => this.props.navigation.navigate("Subcategory", {type: this.props.type})}
          />  
        </View>
    );
  }
}
  export default SubcategoryCard;
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    }
  });