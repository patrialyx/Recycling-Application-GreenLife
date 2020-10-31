import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  TouchableOpacity,
} from "react-native";

class SubcategoryInterface extends React.Component {
    constructor(props){
        super(props);
        if (this.props.route.params)
        this.subcategory =this.props.route.params.category;
        //this should really be another field in the json file called categoryURI
        this.subcategoryImageURI = this.props.route.params.picture;
    }
  render() {
    return (
      <View style={styles.container}>
        <Image source={require('../../assets/recycling.jpg')} style={styles.secondContainer} />        
        <Text style={styles.text}>This belongs in the category of:</Text>
        <View style={styles.category}>
          <View style={styles.round}>
            <Text style={{ textAlign: "center", fontSize: 25 }}> {this.subcategory}! </Text>
            <Image
              style={styles.image}
              source={{
                uri: this.subcategoryImageURI,
              }}
            />
          </View>
          <View style={styles.buttonContainer}>
            {/* insert link to different categories */}
            <TouchableOpacity 
              onPress={() => this.props.navigation.navigate("Subcategory" , {type: this.subcategory})} 
              style={styles.button}
              > 
              <Text>More Info</Text>
            </TouchableOpacity>
            {/* insert link to map */}
            <TouchableOpacity 
              onPress={() => this.props.navigation.navigate("Map")} 
              style={styles.button}
              > 
              <Text>Find A Bin</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
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
  container: {
    flex: 1,
    // backgroundColor: "#CACC90",
    alignItems: "center",
  },
  text: {
    fontSize: 25,
    color: "#fff",
    marginTop: 15,
    fontWeight: "700",
  },

  category: {
    backgroundColor: "#F4EBBE",
    // alignItems: "center",
    justifyContent: "space-between",
    marginTop: 15,
    padding: 20,
    borderRadius: 20,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 10,
    padding: 10,
    alignItems: "center",
    // paddingRight: 2,
    // paddingLeft: 2,
  },
  button: {
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 5,
  },
  round: {
    marginTop: 10,
    paddingTop: 15,
    paddingBottom: 15,
    paddingRight: 25,
    paddingLeft: 25,
    marginLeft: 30,
    marginRight: 30,
    backgroundColor: "#fff",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#fff",
  },
});

export default SubcategoryInterface;