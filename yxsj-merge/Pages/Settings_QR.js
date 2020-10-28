import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import { useNavigation } from "@react-navigation/native";

export default function Settings_QR() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [bin_uid, setBinUid] = useState(0)

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    if (isNaN(parseInt(data))){
      alert("QR code is invalid");
      return;
    }
    else{
      setBinUid(data)
      setScanned(true);
      alert(`Recycling Bin ${data} has been scanned!`);
    }
    
  };

  
// patria or sj add in the code to link to back to connect with location of recycling bin  

  const navigation = useNavigation();
  //After scanning, lead to another page
  if (scanned === true) {
    navigation.navigate("Settings_Keyin", {bin_uid});
  }
  //exports variable to keyin

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }

  if (hasPermission === false) {
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
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />

      {scanned && (
        <Button title={"Tap to Scan Again"} onPress={() => setScanned(false)} />
      )}
    </View>
  );
}
