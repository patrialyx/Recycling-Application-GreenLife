import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import Fire from "../../Fire";

class DepositResults extends React.Component {
  constructor() {
    super();
    //Array of subcategories
    const subcategories = ["Plastics", "Glass", "Paper", "Metal", "E-waste"];
    let randomSubcategory = subcategories[Math.floor(Math.random() * subcategories.length)];

    //set random number
    let RandomNumber = Math.floor(Math.random() * 100) + 1;
    this.state = {
      // This is our Default number value
      Type: randomSubcategory,
      Weight: Math.floor(Math.random()) + 1,
      Points: RandomNumber,
    };
    Fire.shared.submitItem(this.state.Type,this.state.Weight, this.state.Points);
  }

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={{
            uri:
              "https://png.pngtree.com/thumb_back/fw800/back_our/20190621/ourmid/pngtree-small-fresh-green-cute-wavy-border-poster-background-image_203633.jpg",
          }}
          style={styles.image}
        >
          <Text style={styles.text}>Items Deposited:</Text>
          <View style={styles.doneButton}>
            <Text style={styles.buttonText}>Valid Items</Text>
            <View></View>
          </View>
          <View style={styles.doneButton}>
            <Text style={styles.buttonText}>Valid Items</Text>
            <View></View>
          </View>
        </ImageBackground>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flexBasis: 230,
    flexGrow: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 25,
    fontWeight: "700",
  },
  buttonText: {
    fontSize: 25,
    fontWeight: "700",
    color: "#fff",
  },
  doneButton: {
    backgroundColor: "#CACC90",
    marginTop: 250,
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
  image: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },
});
export default DepositResults;
