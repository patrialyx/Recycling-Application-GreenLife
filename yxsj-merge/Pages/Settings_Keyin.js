import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView, TextInput, titleChangeHandler, Button, Alert, Image} from "react-native";
import Fire from '../Backend/Fire';

const initialState = {
    description: '',
  };
class Settings_Keyin extends Component {
    state = initialState;
    
    
    onBinDesChange = (description) => {
      this.setState({
        ...this.state, 
        description
      })
    };

  handleSubmit = () => {
    //receives variable from settings_qr

   if (this.state.description.length === 0) {
     alert("Description is empty. Please describe the bin fault.")
     return
   } 
    Fire.shared.reportFault(this.props.route.params.bin_uid, this.state.description)
    this.props.navigation.navigate("Settings")
    this.setState(initialState)
    alert("Thank you for your feedback. We will address the issue as soon as possible.")
    
  }

  render() {
    return (
          <View style={styles.screen}>
          <Image source={require('../assets/recycling.jpg')} style={styles.secondContainer} /> 
            <Text style={styles.label}>Description of Fault</Text>
            
            <TextInput
              style={styles.textInput}
              value={this.state.description}
              onChangeText={(description)=>this.onBinDesChange(description)}
              autoCorrect = {true}
              multiline = {true}
              scrollEnabled = {true}
            />

            <Button
              title="Submit"
              onPress={() => this.handleSubmit()}
            />

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
    padding:15
  },
    label: {
      fontSize: 18,
      marginBottom: 15
    },
    textInput: {
      borderBottomColor: '#ccc',
      borderBottomWidth: 1,
      marginBottom: 25,
      paddingVertical: 4,
      paddingHorizontal: 2
    },
  });
  
export default Settings_Keyin;
