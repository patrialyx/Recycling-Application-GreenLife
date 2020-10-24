import React, { useState, useEffect, Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  ActivityIndicator,
  TextInput,
  TouchableOpacity,
} from "react-native";
import filter from "lodash.filter";
import _ from "lodash";
import Fire from "../Backend/Fire";

import { useNavigation } from "@react-navigation/native";
import { IconButton } from "react-native-paper";
import { useIsFocused } from "@react-navigation/native";

export default function SearchFlatList({ route, navigation }) {
  let prediction = "";
  //isFocused is used so that if user previously searched by image 
  //and is led back to this page, we can ensure that the useEffect hook is 
  //run again and the results are filtered according to mobileNet's predictions
  //if we don't use this, the useEffect hook won't run again upon navigating back
  //because the page wasn't destroyed/already loaded up
  const isFocused = useIsFocused();

  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState(prediction);
  const [fullData, setFullData] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    //load the whole list
    Fire.shared.getSearchResults().then((doc) => {
      setFullData(doc);
      setData(doc);
      //if user previously searched by image
      const imagePrediction = route.params
      //ensure that the image prediction object is not null
      if (imagePrediction != undefined){
        console.log("imagePrediction is " + imagePrediction);
        prediction = imagePrediction.prediction
        console.log("prediction is " + prediction);
        //filter the data using the prediction from mobileNet
        //and straightaway display the result (setData is called within handleSearch)
        {handleSearch(prediction)};
        console.log("this is the data " + data)
      } else{
        //otherwise set data to be the same as fullData 
        setData(doc);
      }
    });
    setIsLoading(false);
  }, [isFocused]);
  

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#5500dc" />
      </View>
    );
  }
  
  const handleSearch = (text) => {
    const formattedQuery = text.toLowerCase();
    const filteredData = filter(fullData, (user) => {
      return contains(user, formattedQuery);
    });
    setData(filteredData);
    setQuery(text);
  };

  const contains = ({ id, title, picture, synonyms }, query) => {
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


  return (
    <View style={styles.container}>
      <Text style={styles.text}>What do you want to recycle?</Text>
      <FlatList
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <View style={styles.listHeader}>
            <TextInput
              autoCapitalize="none"
              autoCorrect={false}
              clearButtonMode="always"
              value={query}
              onChangeText={(queryText) => handleSearch(queryText)}
              placeholder="Search"
              style={{
                backgroundColor: "#fff",
                paddingHorizontal: 20,
                alignItems: "stretch",
                width: "80%",
              }}
            />
            <IconButton
              icon="camera"
              size={20}
              onPress={() => navigation.navigate("ImgPicker")}
            />
          </View>
        }
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate(item.category)}>
            <View style={styles.listItem}>
              <Image source={{ uri: item.picture }} style={styles.coverImage} />
              <View style={styles.metaInfo}>
                <Text style={styles.title}>{item.title}</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#CACC90",
    alignItems: "center",
  },
  text: {
    fontSize: 25,
    color: "#fff",
    marginTop: 15,
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
  coverImage: {
    width: 100,
    height: 100,
    borderRadius: 8,
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
});
