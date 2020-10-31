import React from "react";
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity } from "react-native";
import Fire from '../Backend/Fire'
import Loader from '../Components/Loader';


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
            <TouchableOpacity
              style={styles.buttonContainer2}
              onPress={()=> this.props.navigation.navigate("About")}>
              <Text style={styles.buttonText}> About </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttonContainer2}
              onPress={()=> this.props.navigation.navigate("Settings_QR")}>
              <Text style={styles.buttonText}> Report Bin Fault </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttonContainer2}
              onPress={()=> this.handleLogout()}>
              <Text style={styles.buttonText}> Logout </Text>
            </TouchableOpacity>
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
  buttonContainer2: {
    backgroundColor: '#75704E',
    paddingVertical: 10,
    marginTop: 20,
    height: 50,
    borderRadius: 5,
    margin: 24
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    margin: 0,
    padding: 36,
    justifyContent: 'center',
  },
  
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#FFFFFF',
  },
  image: {
    flexBasis: 230,
    flexGrow: 2,
    // alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },
})

export default Settings;
