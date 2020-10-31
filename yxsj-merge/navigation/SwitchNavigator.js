import React from 'react'
import { createSwitchNavigator, createAppContainer } from 'react-navigation'
import Login from '../MakeProfile/Login'
import Register from '../MakeProfile/Register'
import ForgetPassword from '../MakeProfile/ForgetPassword'
import Profile from '../MakeProfile/Profile'
import TabNavigator from './TabNavigator'
import { createStackNavigator } from "@react-navigation/stack";


const SwitchNavigator = createSwitchNavigator(
	{
		Login: {
			screen: Login
		},
		// TabNavigator: {
		// 	screen: TabNavigator
		// },
    Register: {
      screen: Register
    }, 
    ForgetPassword: {
      screen: ForgetPassword
    } 
	},
	{
		initialRouteName: 'Login', 
		backBehavior: 'initialRoute'
	}
)

const Stack = createStackNavigator()
const LoginNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component= {Home} />
      <Stack.Screen name="Points" component= {Points} />
      <Stack.Screen name="Search" component= {SearchStackNavigator} />
    </Stack.Navigator>
  );
}

export default createAppContainer(SwitchNavigator)

