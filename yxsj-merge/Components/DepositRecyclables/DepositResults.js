import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import Fire from "../../Backend/Fire";

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
      Weight: Math.round(Math.random(), 2), //round off to 2 dp
      Points: RandomNumber,
    };
    Fire.shared.submitItem(this.state.Type,this.state.Weight, this.state.Points);
    console.log(this.state.Type)
    console.log(this.state.Weight)
    console.log(this.state.Points)
  }

  render() {
    return (
      <View>
        <ImageBackground
          source={{
            uri:
              "https://i.pinimg.com/originals/92/c4/d3/92c4d382dca3bb932c9c9205ef2e13ae.jpg",
          }}
          imageStyle= {{opacity:0.6}}
          style={styles.image}
        >
          <Text style={styles.text}>Items Deposited:</Text>
          <TouchableOpacity>
            <View style={styles.listItem}>
              
              <View style={styles.metaInfo}>
                <Text style={styles.title}>{this.state.Type}</Text>
                <Text style={styles.title}>{this.state.Weight} kg </Text>
                <Text style={styles.title}>+ {this.state.Points} Points!</Text>
              </View>
            </View>
          </TouchableOpacity>
        </ImageBackground>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flexBasis: 230,
    flexGrow: 2,
    // alignItems: "center",
    // justifyContent: "center",
  },
  text: {
    marginTop: 50,
    fontSize: 30,
    fontWeight: "700",

  },
  listHeader: {
    flex: 1,
    justifyContent: "space-between",
    flexDirection: "row",
    backgroundColor: "#fff",
    padding: 5,
    marginVertical: 10,
    borderRadius: 18,
  },
  listItem: {
    marginTop: 10,
    paddingVertical: 20,
    paddingHorizontal: 10,
    backgroundColor: "#fff",
    flexDirection: "row",
    borderRadius: 20,
  },
  metaInfo: {
    marginLeft: 10,
    justifyContent: "center", //Centered vertically
    alignItems: "center", // Centered horizontally
  },
  title: {
    fontSize: 25,
    width: 200,
    padding: 10,
    fontWeight: "bold",
    textAlign: "center",
  },
  coverImage: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
  image: {
    alignItems: "center",
    // justifyContent: "center",
    width: "100%",
    height: "100%",
  },
});
export default DepositResults;
