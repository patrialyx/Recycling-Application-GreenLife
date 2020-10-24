import React from "react";
import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";

import SearchFlatList from "../Components/SearchFlatList.js";

//Import Components that involve Camera
import ImgPicker from "../Components/ImagePicker";
import SubcategoryInterface from "../Components/SubcategoryInterface.js";

const Stack = createStackNavigator();

const SearchStackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Search" component={SearchFlatList} />
            <Stack.Screen name="ImgPicker" component={ImgPicker} />
            <Stack.Screen name="SubCategoryInterface" component={SubcategoryInterface}/>
        </Stack.Navigator>
    )
}

export {SearchStackNavigator};
