import React from 'react'
import { createSwitchNavigator, createAppContainer } from 'react-navigation'
import Login from '../MakeProfile/Login'
import Register from '../MakeProfile/Register'
import ForgetPassword from '../MakeProfile/ForgetPassword'
import Profile from '../MakeProfile/Profile'
import TabNavigator from './TabNavigator'

const SwitchNavigator = createSwitchNavigator(
	{
		Login: {
			screen: Login
		},
		TabNavigator: {
			screen: TabNavigator
		},
    Register: {
      screen: Register
    }, 
    ForgetPassword: {
      screen: ForgetPassword
    } 
	},
	{
		initialRouteName: 'Login'
	}
)

export default createAppContainer(SwitchNavigator)
