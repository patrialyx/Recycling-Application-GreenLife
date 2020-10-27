import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import { useNavigation } from "@react-navigation/native";
import { render } from "react-dom";

class QRScanner extends React.Component{
  // const [hasPermission, setHasPermission] = useState(null);
  // const [scanned, setScanned] = useState(false);

  state = {
    hasPermission: true,
    scanned: false,
  }

  componentDidMount() {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      var permission = (status ==="granted")
      this.setState ({
        hasPermission: permission
      })
    })
  }
  setScanned = (scanned) => {
    this.setState ({
      scanned: scanned
    })
  };


  handleBarCodeScanned = ({ type, data }) => {
    this.setScanned(true);
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  };

  // const navigation = useNavigation();
  //After scanning, lead to another page
  render(){
    if (this.state.scanned === true) {
      this.props.navigation.navigate("Deposit");
    }
  
    if (this.state.hasPermission === null) {
      return <Text>Requesting for camera permission</Text>;
    }
  
    if (this.state.hasPermission === false) {
      return <Text>No access to camera</Text>;
    }
    return (
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          justifyContent: "flex-end",
        }}
      >
        <BarCodeScanner
          onBarCodeScanned={this.state.scanned ? undefined : this.handleBarCodeScanned}
          style={StyleSheet.absoluteFillObject}
        />
  
        {this.state.scanned && (
          <Button title={"Tap to Scan Again"} onPress={() => this.setScanned(false)} />
        )}
      </View>
    );
  }
}
export default QRScanner
