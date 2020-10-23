import React from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text,
  Button,
  Image,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import Fire from '../Backend/Fire';

const initialState = {
  email: '',
  password: '',
  name:''
};

class Register extends React.Component {
  state = initialState;

  onEmailChange = (email) => {
    this.setState({
      ...this.state, 
      email
    })
  };

  onPasswordChange = (password) => {
    this.setState({
      ...this.state, 
      password
    })
  };

  onNameChange = (name) => {
    this.setState({
      ...this.state, 
      name
    })
  };

  handleRegister = async (email, password, name ) => {
    this.setState(initialState)
    const success = await Fire.shared.handleRegister(email, password, name)
    if (success) {
      this.props.navigation.navigate("Profile")
    }
  };

  
  handleBack = () => {
    this.props.navigation.navigate('Login')
  }


  render() {
    const resizeMode = 'cover';
    const text = 'gREenLife';
    return (
      <View style={styles.container}>
        <View
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
          }}>
          <Image
            style={{
              flex: 1,
              resizeMode,
            }}
            source={require('../assets/recycling.jpg')}
          />
        </View>
        <View
          style={{
            flex: 1,
            backgroundColor: 'transparent',
            justifyContent: 'center',
          }}>
          <KeyboardAwareScrollView>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
              <Image
                source={require('../assets/greenlife.png')}
                style={styles.image}
              />

              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 22,
                }}>
                {text}
              </Text>
            </View>

            <View style={styles.main}>
              <TextInput
                underlineColorAndroid="transparent"
                value={this.state.email}
                onChangeText={(email) => this.onEmailChange(email)}
                style={styles.input}
                placeholder="Email"
                autoCapitalize="none"
              />
              <TextInput
                underlineColorAndroid="transparent"
                value={this.state.name}
                onChangeText={(name) => this.onNameChange(name)}
                style={styles.input}
                placeholder="Name"
                autoCapitalize="none"
              />
               <TextInput 
                underlineColorAndroid='transparent'
                value={this.state.password} 
                onChangeText={(password) => this.onPasswordChange(password)} 
                style={styles.input} 
                placeholder="Password" 
                secureTextEntry={true} 
              /> 
              <TouchableOpacity
                style={styles.buttonContainer2}
                onPress={() => this.handleRegister(this.state.email, this.state.password, this.state.name)}>
                <Text style={styles.buttonText}> Register </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.buttonContainer2}
                onPress={()=> this.handleBack()}>
                <Text style={styles.buttonText}> Back </Text>
              </TouchableOpacity>
            </View>
          </KeyboardAwareScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 45,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    fontSize: 20,
    paddingLeft: 5,
    paddingRight: 5,
    backgroundColor: '#FFFFFF',
  },
  main: {
    margin: 20,
  },
  image: {
    marginBottom: 20,
    marginTop: 50,
    height: 120,
    width: 120,
  },

  buttonContainer2: {
    backgroundColor: '#75704E',
    paddingVertical: 10,
    marginTop: 20,
    height: 50,
    borderRadius: 5,
  },

  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#FFFFFF',
  },
});

export default Register;
