import React, { useState } from 'react';
import { View, Button, Image, Text, StyleSheet, Alert, TouchableOpacity, ImageBackground } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import TensorJS from './TF';
import filter from "lodash.filter";
import _ from "lodash";
import { IconButton } from "react-native-paper";
import Loader from './Loader';
// import HeaderImageScrollView from 'react-native-image-header-scroll-view';

//Instantiate TensorJS model
// let TensorJS.shared = new TensorJS();
class SearchByPhoto extends React.Component{
  constructor(props){
    super(props);
  }
  componentDidMount() {
    console.log('componentDidMount() initialising model');
  }

  
  state = {
    pickedImage: null,
    category: null,
    picture: null,
    loading: false
  }
  verifyPermissions = async () => {
    console.log("Verifying Permissions...")
    const result = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    const result1 = await Permissions.askAsync(Permissions.CAMERA);
    if (result.status !== 'granted') {
      Alert.alert(
        'Insufficient permissions!',
        'You need to grant camera permissions to use this app.',
        [{ text: 'Okay' }]
        );
        return false;
      }
    return true;
  }
    
  takeImageHandler = async () => {
    const hasPermission = await this.verifyPermissions();
    if (!hasPermission) {
      return;
    }
    this.setState({
      loading: true,
    });
    const image = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [16, 16],
      quality: 0.5,
      base64: true
    });
    
    this.setState({
      pickedImage: image.uri
    })
    console.log("pickedImage is now", this.state.pickedImage)

    TensorJS.shared.state.image = image;
    try {
      if (TensorJS.shared.state.isTfReady && TensorJS.shared.state.isModelReady){
        console.log("Classifying...")
        await TensorJS.shared.classifyImage(image)
        const classificationResult = TensorJS.shared.state.predictions[0]
        this.setState({
          loading: false
        });
        this.navigateToSubcategory(classificationResult)
        console.log("Done classifying!")
      } else {
        return;
      }
    } catch (error){
      console.log(error)
    }
  }

  navigateToSubcategory = (classificationResult) => {
    //extract out the class name, search for it and return the first object from the list of objects
    var searchResults = this.handleSearch(classificationResult.className)
    //if the object in the image cannot be found in the database, then the list will be empty,
    //so we have to check if the list is empty, if it is, then return the first result of
    //the fullData
    console.log(searchResults)
    if ((searchResults != undefined) && (searchResults.length != 0)){
      console.log("returning the prediction from the model")
      var closestResult = searchResults[0]
      //set the values in this class
      this.setState({
        category: closestResult.category,
        picture: closestResult.picture,
      })
      this.props.navigation.navigate("SubcategoryInterface", {category: this.state.category, picture: this.state.picture})
    } else {
      console.log("object could not be found in database")
      console.log("pickedImage is currently", this.state.pickedImage)
      Alert.alert(
        "Error!",
        "Object could not be found in database!",
        [
          { text: "Try Again!", onPress: () => console.log("OK Pressed") }
        ],
        { cancelable: false }
      );
      this.forceUpdate()
    }
  }
    
  handleSearch = (text) => {
    const formattedQuery = text.toLowerCase();
    const filteredData = filter(this.props.route.params.fullData, (user) => {
      return this.contains(user, formattedQuery);
    });
    return filteredData;
  };

  contains = ({ id, title, picture, synonyms }, query) => {
    const name = title.toLowerCase();
    const otherNames = synonyms.toLowerCase();
    //use regex to split model predictions into array of query substrings
    var queryarray = query.split(/[ ,]+/);
    //get length of array
    var length = queryarray.length;
    //search through the array of query words
    while(length--) {
      //indexOf returns index at which the substring is found in the name
      //as long as one of the query substrings are in either the title or the 
      //synonyms, the index returned will not be -1 
      if ((name.indexOf(queryarray[length])!=-1)||(otherNames.indexOf(queryarray[length])!=-1)) {
          return true;
      }
    }
    return false;
  };

  render  = () => {
    return (
      <ImageBackground
      source={{
        uri:
        "https://png.pngtree.com/thumb_back/fw800/back_our/20190621/ourmid/pngtree-small-fresh-green-cute-wavy-border-poster-background-image_203633.jpg",
      }}
      imageStyle= {{opacity:0.6}}
      style={styles.backgroundImage}
      >
        <Loader loading={this.state.loading} />
        <View style={styles.imagePicker}>
        <View style={styles.imagePreview}>
        {!this.state.pickedImage ? (
          <Text style={styles.textPlaceHolder}>Take a picture of your recyclable to find out the subcategory it belongs to!</Text>
          ) 
          :(
            <Image style={styles.image} source={{ uri: this.state.pickedImage }} />
          )
        }
        </View>
        <IconButton
          icon="camera"
          size={20}
          onPress={() => this.takeImageHandler()}
        />
        
        </View>
      </ImageBackground>
    );
          
  }
}
      
const styles = StyleSheet.create({
  imagePicker: {
    width: '80%',
    height: '70%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    marginRight: 10,
    marginLeft: 10,
  },
  imagePreview: {
    width: '100%',
    height: '70%',
    marginBottom: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#CACC90",
    opacity:1,
    borderColor: '#fff',
    borderWidth: 0,
    borderRadius: 10
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 10
  },
  textPlaceHolder: {
    fontSize: 25,
    width: 250,
    padding: 1,
    color: '#fff',
    fontWeight: "bold",
    textAlign: "center",
  },
  backgroundImage: {
    // flexBasis: 200,
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
    // width: "100%",
    // height: "100%",
  },
});
export default SearchByPhoto;