import React from "react";
import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';

// import HomeScreen from "../Pages/HomeScreen";
import QRScanner from "../Pages/QRScanner";
import Settings_QR from "../Pages/Settings_QR";
import Settings from "../Pages/Settings";
import Settings_Keyin from "../Pages/Settings_Keyin";
import Education from "../Pages/Education";
// import Deposit from "../Pages/Deposit";
// import DepositResults from "../Pages/DepositResults";
// import Plastic from "../Pages/Plastic";
// import Paper from "../Pages/Paper";
// import Metal from "../Pages/Metal";
// import Glass from "../Pages/Glass";
// import Nonrecyclables from "../Pages/Nonrecyclables";
// import Ewaste from "../Pages/Ewaste";
import SubcategoryDetails from "../Pages/SubcategoryDetails";

import Deposit from "../Components/DepositRecyclables/Deposit";
import DepositResults from "../Components/DepositRecyclables/DepositResults";
// import Plastic from "../Pages/Plastic";
// import Paper from "../Pages/Paper";
// import Metal from "../Pages/Metal";
// import Glass from "../Pages/Glass";
// import Nonrecyclables from "../Pages/Nonrecyclables";
// import Ewaste from "../Pages/Ewaste";
import Map from "../Pages/Map";
import Home from "../Pages/Home";
import Points from "../Pages/Points";
import {SearchStackNavigator} from './SearchStackNavigator'

import About from "../Pages/About"
import Login from "../MakeProfile/Login";
import Register from "../MakeProfile/Register";
import ForgetPassword from "../MakeProfile/ForgetPassword";
import Fire from "../Backend/Fire";
import TabNavigator from "./TabNavigator";
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';



const Stack = createStackNavigator();
// lacking search cuz firebase stuff 

const HomeScreenStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component= {Home} />
      <Stack.Screen name="Points" component= {Points} />
      <Stack.Screen name="Education" component= {Education} />
      <Stack.Screen name="Search" component= {SearchStackNavigator} />
    </Stack.Navigator>
  );
}

const LocationStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name= "Map" component={Map} />
    </Stack.Navigator>
  );
}

const ScanStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name= "QRScanner" component= {QRScanner} />
      <Stack.Screen name= "Deposit" component={Deposit} />
      <Stack.Screen name = "DepositResults" component={DepositResults} />
    </Stack.Navigator>
  );
}

const EducationStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name = "Education" component={Education} />
      <Stack.Screen name = "Subcategory" component={SubcategoryDetails} />
      {/* <Stack.Screen name = "Plastic" component={Plastic} />
      <Stack.Screen name = "Metal" component={Metal} />
      <Stack.Screen name = "Paper" component={Paper} />
      <Stack.Screen name = "Glass" component={Glass} />
      <Stack.Screen name = "Ewaste" component={Ewaste} />
      <Stack.Screen name = "Nonrecyclables" component={Nonrecyclables} /> */}
    </Stack.Navigator>
  );
}

const SettingsStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name= "Settings" component={Settings} />
      <Stack.Screen name = "Settings_QR" component={Settings_QR} />
      <Stack.Screen name= "Settings_Keyin" component={Settings_Keyin} />
      <Stack.Screen name= "About" component={About} />
    </Stack.Navigator>
  );
}

const LoginStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name= "Login" component={Login} />
      <Stack.Screen name = "Register" component={Register} />
      <Stack.Screen name= "ForgetPassword" component={ForgetPassword} />
    </Stack.Navigator>
  );
  }
  

const getHeaderTitle = (route) => {
    return getFocusedRouteNameFromRoute(route) ?? 'HomeScreen'
  }

const MainLoginNavigator = () => {
  return (
    
    <NavigationContainer>
    <Stack.Navigator>
    
      {
        Fire.shared.user 
        ?
        (
          <Stack.Screen name= "TabNavigator" component={TabNavigator} options={({ route})=> ({ headerTitle: getHeaderTitle(route)})} />
          ) : (
            <Stack.Screen name = "Login" component={LoginStackNavigator} />
            )
          }
      <Stack.Screen name= "ForgetPassword" component={ForgetPassword} />
    </Stack.Navigator>
    </NavigationContainer>
  );
  
}

export {HomeScreenStackNavigator, LocationStackNavigator, ScanStackNavigator, EducationStackNavigator, SettingsStackNavigator, LoginStackNavigator, MainLoginNavigator};
