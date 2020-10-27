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

import { IconButton } from "react-native-paper";
import { useIsFocused } from "@react-navigation/native";
import { render } from "react-dom";

class SearchByText extends React.Component{
  state = {
    isLoading: false,
    query: "",
    fullData: [],
    data: [],
  };

  componentDidMount() {
    this.setState({
      isLoading: true
    })
    //load the whole list
    Fire.shared.getSearchResults().then((doc) => {
      this.setState({
        fullData: doc,
        data: doc,
      })
    });
    this.setState({
      isLoading: false,
    })
  }

  
  EmptyListMessage = () => {
    return (
      // Flat List Item
      <Text style={styles.emptyListStyle}>
        No Recyclables Found!
      </Text>
    );
  };
  
  
  handleSearch = (text) => {
    const formattedQuery = text.toLowerCase();
    const filteredData = filter(this.state.fullData, (user) => {
      return this.contains(user, formattedQuery);
    });
    this.setState({
      data: filteredData,
      query: text,
    })
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
  
  render(){
    if (this.state.isLoading) {
      return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          <ActivityIndicator size="large" color="#5500dc" />
        </View>
      );
    } else {
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
                value={this.state.query}
                onChangeText={(queryText) => this.handleSearch(queryText)}
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
                onPress={() => this.props.navigation.navigate("SearchByPhoto", {fullData: this.state.fullData})}
                />
            </View>
          }
          data={this.state.data}
          keyExtractor={(item) => item.id}
          //Message to show for the Empty list
          ListEmptyComponent={() => this.EmptyListMessage()}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => this.props.navigation.navigate("SubcategoryInterface", item)}>
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
  }
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
  emptyListStyle: {
    marginTop: 190,
    fontSize: 25,
    width: 200,
    fontWeight: "bold",
    textAlign: "center",
    alignSelf : "center",
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
export default SearchByText;