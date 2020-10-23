import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView, TextInput, titleChangeHandler, Button } from "react-native";
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
    Fire.shared.reportFault(this.props.route.params.bin_uid, this.state.description)
    this.props.navigation.navigate("Settings")
    this.setState(initialState)
    
  }

  render() {
    return (
        <ScrollView>
          <View style={styles.form}>
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
        </ScrollView>
      );
    }
    
}
const styles = StyleSheet.create({
    form: {
      margin: 30
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
