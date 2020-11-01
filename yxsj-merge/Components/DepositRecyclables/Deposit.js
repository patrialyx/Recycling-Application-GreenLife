import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
} from "react-native";

class Deposit extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={{
            uri:
              "https://png.pngtree.com/thumb_back/fw800/back_our/20190621/ourmid/pngtree-small-fresh-green-cute-wavy-border-poster-background-image_203633.jpg",
            //   "https://cutewallpaper.org/21/cute-green-wallpapers/Cute-little-dinosaurs.-iPhone-X-Wallpapers-iPhone-X-.jpg",
            //   "https://i.pinimg.com/originals/d8/e6/c7/d8e6c7b8d280644e48c2ec9b6649e97b.jpg",
            //   "https://cutewallpaper.org/21/recycle-wallpapers/Wallpapers-recycling-Seamless-recycle-background.-Vector-.jpg",
          }}
          style={styles.image}
        >
          <Text style={styles.text}>Success! Bin is connected.</Text>
          <Text style={styles.text}>Place items inside the bin</Text>
          <TouchableOpacity
            style={styles.doneButton}
            onPress={() => this.props.navigation.navigate("DepositResults")}
          >
            <Text style={styles.buttonText}>I am Done!</Text>
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
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 25,
    fontWeight: "700",
  },
  buttonText: {
    fontSize: 25,
    fontWeight: "600",
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
    flexBasis: 230,
    flexGrow: 2,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },
});
export default Deposit;
