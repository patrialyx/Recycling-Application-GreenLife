// import React, { useState, useEffect, Component } from "react";
// import {
//   StyleSheet,
//   Text,
//   View,
//   FlatList,
//   Image,
//   ActivityIndicator,
//   TextInput,
//   TouchableOpacity,
// } from "react-native";
// import filter from "lodash.filter";
// import _ from "lodash";
// // import recyclingData from "./api/data";
// import Fire from "../Fire";

// import { useNavigation } from "@react-navigation/native";
// import { IconButton } from "react-native-paper";

// export default function Search() {
//   const [isLoading, setIsLoading] = useState(false);
//   const [query, setQuery] = useState("");
//   const [fullData, setFullData] = useState([]);
//   const [data, setData] = useState([]);

//   if (isLoading) {
//     return (
//       <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//         <ActivityIndicator size="large" color="#5500dc" />
//       </View>
//     );
//   }

//   useEffect(() => {
//     setIsLoading(true);
//     setData(Fire.shared.getSearchResults());
//     setFullData(Fire.shared.getSearchResults());
//     setIsLoading(false);
//   }, []);

//   const handleSearch = (text) => {
//     const formattedQuery = text.toLowerCase();
//     const filteredData = filter(fullData, (user) => {
//       return contains(user, formattedQuery);
//     });
//     setData(filteredData);
//     setQuery(text);
//   };

//   const contains = ({ id, title, picture, synonyms }, query) => {
//     const name = title.toLowerCase();
//     if (name.includes(query) || synonyms.includes(query)) {
//       console.log(title);
//       return true;
//     }
//     return false;
//   };

//   const navigation = useNavigation();
//   return (
//     <View style={styles.container}>
//       <Text style={styles.text}>What do you want to recycle?</Text>
//       <FlatList
//         showsVerticalScrollIndicator={false}
//         ListHeaderComponent={
//           <View style={styles.listHeader}>
//             <TextInput
//               autoCapitalize="none"
//               autoCorrect={false}
//               clearButtonMode="always"
//               value={query}
//               onChangeText={(queryText) => handleSearch(queryText)}
//               placeholder="Search"
//               style={{
//                 backgroundColor: "#fff",
//                 paddingHorizontal: 20,
//                 alignItems: "stretch",
//                 width: "80%",
//               }}
//             />
//             <IconButton
//               icon="camera"
//               size={20}
//               onPress={() => navigation.navigate("Camera")}
//             />
//           </View>
//         }
//         data={data}
//         keyExtractor={(item) => item.id}
//         renderItem={({ item }) => (
//           <TouchableOpacity onPress={() => navigation.navigate(item.category)}>
//             <View style={styles.listItem}>
//               <Image source={{ uri: item.picture }} style={styles.coverImage} />
//               <View style={styles.metaInfo}>
//                 <Text style={styles.title}>{item.title}</Text>
//               </View>
//             </View>
//           </TouchableOpacity>
//         )}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#CACC90",
//     alignItems: "center",
//   },
//   text: {
//     fontSize: 25,
//     color: "#fff",
//     marginTop: 15,
//     fontWeight: "700",
//   },
//   listHeader: {
//     flex: 1,
//     justifyContent: "space-between",
//     flexDirection: "row",
//     backgroundColor: "#fff",
//     padding: 5,
//     marginVertical: 10,
//     borderRadius: 18,
//   },
//   listItem: {
//     marginTop: 10,
//     paddingVertical: 20,
//     paddingHorizontal: 10,
//     backgroundColor: "#fff",
//     flexDirection: "row",
//     borderRadius: 20,
//   },
//   coverImage: {
//     width: 100,
//     height: 100,
//     borderRadius: 8,
//   },
//   metaInfo: {
//     marginLeft: 10,
//     justifyContent: "center", //Centered vertically
//     alignItems: "center", // Centered horizontally
//   },
//   title: {
//     fontSize: 25,
//     width: 200,
//     padding: 10,
//     fontWeight: "bold",
//     textAlign: "center",
//   },
// });
