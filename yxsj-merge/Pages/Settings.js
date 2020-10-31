import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
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
        <View style={{flex: 1, flexDirection: 'column'}}>
            <Loader loading={this.state.loading} />
            <Button 
                style={{marginRight: 0}} 
                title="About Us"
                onPress={() => this.props.navigation.navigate("About")} 
            />
            <Button 
                style={{marginLeft: 0}} 
                title="Report Fault" 
                onPress={() => this.props.navigation.navigate("Settings_QR")}
                color = "#000080"
                />
            <Button 
                style={{marginLeft: 0}} 
                title="logout" 
                onPress={() => this.handleLogout()}
                color = "#000080"
                />
        </View>

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

export default Settings;
