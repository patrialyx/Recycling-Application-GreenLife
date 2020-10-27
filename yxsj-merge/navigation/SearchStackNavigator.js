import React from "react";
import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";

import SearchByText from "../Components/SearchByText"
import SearchByPhoto from "../Components/SearchByPhoto"

import QRScanner from "../Pages/QRScanner"

//Import Components that involve Camera
import SubcategoryInterface from "../Components/Subcategory/SubcategoryInterface.js";

const Stack = createStackNavigator();

const SearchStackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="SearchByText" component={SearchByText} />
            <Stack.Screen name="SearchByPhoto" component={SearchByPhoto} />
            <Stack.Screen name="QRScanner" component={QRScanner} />
            <Stack.Screen name="SubCategoryInterface" component={SubcategoryInterface}/>
        </Stack.Navigator>
    )
}

export {SearchStackNavigator};
