import React from "react";
import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";

import SearchByText from "../Components/SearchByText"
import SearchByPhoto from "../Components/SearchByPhoto"

// import Plastic from "../Pages/Plastic";
// import Paper from "../Pages/Paper";
// import Metal from "../Pages/Metal";
// import Glass from "../Pages/Glass";
// import Nonrecyclables from "../Pages/Nonrecyclables";
// import Ewaste from "../Pages/Ewaste";

import Map from "../Pages/Map"

import QRScanner from "../Pages/QRScanner"

//Import Components that involve Camera
import SubcategoryInterface from "../Components/Subcategory/SubcategoryInterface.js";
import SubcategoryDetails from "../Pages/SubcategoryDetails";

const Stack = createStackNavigator();

const SearchStackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="SearchByText" component={SearchByText} />
            <Stack.Screen name="SearchByPhoto" component={SearchByPhoto} />
            <Stack.Screen name="QRScanner" component={QRScanner} />
            <Stack.Screen name="SubcategoryInterface" component={SubcategoryInterface}/>
            <Stack.Screen name="Subcategory" component={SubcategoryDetails}/>
            {/* <Stack.Screen name = "Plastic" component={Plastic} />
            <Stack.Screen name = "Metal" component={Metal} />
            <Stack.Screen name = "Paper" component={Paper} />
            <Stack.Screen name = "Glass" component={Glass} />
            <Stack.Screen name = "E-waste" component={Ewaste} />
            <Stack.Screen name = "Non-recyclables" component={Nonrecyclables} /> */}
            <Stack.Screen name= "Map" component={Map} />
        </Stack.Navigator>
    )
}

export {SearchStackNavigator};
