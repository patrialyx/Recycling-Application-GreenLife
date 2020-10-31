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
import Loader from '../Components/Loader';


import Fire from '../Backend/Fire';

const initialState = {
  email: '',
  password: '',
  loading: false
};

class Login extends React.Component {
  state = initialState;

  componentDidMount = () => {
    if (Fire.shared.user) {
      this.props.navigation.navigate('Profile');
    }
  };

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


  handleLogin = async (email, password) => {
    // to access database
    // await Fire.shared.db.doc('test/doc1').set({field: "bye"})
    this.setState({
      loading: true,
    });
    const success = await Fire.shared.handleLogin(email, password)
    this.setState(initialState)
    if (success) {
      this.setState({
        loading: false,
      });
      this.props.navigation.navigate('TabNavigator');
    }
  }

  handleRegister = () => {
    this.props.navigation.navigate('Register')
  };

  handleForgetPassword = () => {
    this.props.navigation.navigate('ForgetPassword')
  }


  render() {
    const resizeMode = 'cover';
    const text = 'gREenLife';
    return (
      <View style={styles.container}>
        <Loader loading={this.state.loading} />
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
                underlineColorAndroid='transparent'
                value={this.state.password} 
                onChangeText={(password) => this.onPasswordChange(password)} 
                style={styles.input} 
                placeholder="Password" 
                secureTextEntry={true} 
              /> 
              <TouchableOpacity
                style={styles.buttonContainer}
                onPress={() => this.handleLogin(this.state.email, this.state.password)}>
                <Text style={styles.buttonText}> Login </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.buttonContainer2}
                onPress={() => this.handleRegister()}>
                <Text style={styles.buttonText}>  Register </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.buttonContainer2}
                onPress={()=> this.handleForgetPassword()}>
                <Text style={styles.buttonText}> Forget Password </Text>
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
    margin: 0,
    padding: 36,
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
  buttonContainer: {
    backgroundColor: '#CACC90',
    paddingVertical: 10,
    marginTop: 20,
    height: 50,
    borderRadius: 5,
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

export default Login;
