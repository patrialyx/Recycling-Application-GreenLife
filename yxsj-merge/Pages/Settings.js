import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

class Settings extends React.Component {
  render() {
    return (
        <View style={{flex: 1, flexDirection: 'column'}}>
            <Button 
                style={{marginRight: 0}} 
                title="About Us"
                // onPress={() => this.props.navigation.navigate("")} 
            />
            <Button 
                style={{marginLeft: 0}} 
                title="Report Fault" 
                onPress={() => this.props.navigation.navigate("Settings_QR")}
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
