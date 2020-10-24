import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Button
          title="Search page"
          onPress={() => this.props.navigation.navigate("Search")}
        />
        <Button
          title="QR Code Scanner"
          onPress={() => this.props.navigation.navigate("QRScanner")}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flexBasis: 230,
    flexGrow: 2,
    alignItems: "center",
    justifyContent: "space-between",
    alignItems: "stretch",
  },
});
export default HomeScreen;
