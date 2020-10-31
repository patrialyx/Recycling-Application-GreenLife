import React from "react";
import { StyleSheet, View, ImageBackground, ScrollView, Image, TouchableOpacity } from "react-native";
import Fire from '../Backend/Fire'
import Loader from '../Components/Loader';
import { Card, Button, Icon, Text } from 'react-native-elements';


class Settings extends React.Component {
  state = {
    loading: false
  }
  
  handleLogout = () => {
    this.setState({loading: true})
    Fire.shared.handleLogout();
    this.setState({loading: false})
  }
  
  render() {
    return (
        <ImageBackground 
          source={require('../assets/recycling.jpg')}
          style={styles.image}
        >
          {/* <View style={styles.container}> */}
            <Loader loading={this.state.loading} />

      <ScrollView 
          style={{width:'100%', height: '100%'}}
          contentContainerStyle={{
            justifyContent: 'space-between'
        }}>
        <View style={{flex: 1, flexDirection: 'column'}}>
            <Card
              title="About Us"
              image={require('../assets/about.jpg')}
              containerStyle={{ marginBottom: 5 }}>
              <Text style={{ marginBottom: 10 }}>Find out more about the REngineer Team and their passion for the environment.</Text>
              <Button
                buttonStyle={{
                  borderRadius: 10,
                  marginLeft: 10,
                  marginRight: 10,
                  marginBottom: 0,
                  backgroundColor: '#CACC90'
                }}
                onPress={() => this.props.navigation.navigate("About")}
                title="About Us"
              />
            </Card>
            <Card
              title="Report Fault" 
              image={require('../assets/recycling.jpg')}
              containerStyle={{ marginBottom: 5 }}>
              <Text style={{ marginBottom: 10 }}>Faulty bins? Tell us more information about the bins and we will fix them as soon as possible.</Text>
              <Button
                title="Report Fault"
                buttonStyle={{
                  borderRadius: 10,
                  marginLeft: 10,
                  marginRight: 10,
                  marginBottom: 0,
                  backgroundColor: '#CACC90'
                }}
                onPress={() => this.props.navigation.navigate("Settings_QR")}
              />
            </Card>
            <TouchableOpacity
              style={styles.buttonContainer2}
              onPress={()=> this.handleLogout()}>
              <Text style={styles.buttonText}> Logout </Text>
            </TouchableOpacity>
        </View>
        </ScrollView>
            {/* <TouchableOpacity
              style={styles.buttonContainer2}
              onPress={()=> this.props.navigation.navigate("About")}>
              <Text style={styles.buttonText}> About </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttonContainer2}
              onPress={()=> this.props.navigation.navigate("Settings_QR")}>
              <Text style={styles.buttonText}> Report Bin Fault </Text>
            </TouchableOpacity> */}
            
          {/* </View> */}
        </ImageBackground> 
            
            // {/* <Button 
            //     style={{marginRight: 0}} 
            //     title="About Us"
            //     onPress={() => this.props.navigation.navigate("About")} 
            // />
            // <Button 
            //     style={{marginLeft: 0}} 
            //     title="Report Fault" 
            //     onPress={() => this.props.navigation.navigate("Settings_QR")}
            //     color = "#000080"
            //     />
            // <Button 
            //     style={{marginLeft: 0}} 
            //     title="logout" 
            //     onPress={() => this.handleLogout()}
            //     color = "#000080"
            //     /> */}

    //   <View style={styles.container}>
    //     <Button
    //       title="About Us"
    //     //   onPress={() => this.props.navigation.navigate("Search")}
    //     />
    //     <Button
    //       title="Report Fault"
    //       onPress={() => this.props.navigation.navigate("Settings_Keyin")}
    //       color = "#000080"
    //     //   onPress={() => this.props.navigation.navigate("Settings_QR")}
    //     />
    //   </View>

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
  buttonContainer2: {
    backgroundColor: '#CACC90',
    paddingVertical: 10,
    marginTop: 20,
    height: 50,
    borderRadius: 5,
    margin: 24
  },
  image: {
    flexBasis: 230,
    flexGrow: 2,
    // alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#FFFFFF',
  }
});

export default Settings;
