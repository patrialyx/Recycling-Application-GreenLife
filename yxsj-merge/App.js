import React from 'react'
import Splash from './Pages/Splash';
import Login from './MakeProfile/Login';

import SwitchNavigator from './navigation/SwitchNavigator'

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      timePassed: false,
    };
  } 

  render() {

    var mainScreen = <Splash />

    setTimeout(() => { this.setState({ timePassed: true }) }, 1000)

    if (!this.state.timePassed) {

      return mainScreen

    } else {

      mainScreen = <Login />

    }
    return (
				<SwitchNavigator />
		)
  }
}
