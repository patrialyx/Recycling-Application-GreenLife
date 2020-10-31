import React, { Component } from 'react';
import { StyleSheet, ScrollView, View, Image} from 'react-native';
import { Card, Button, Icon, Text } from 'react-native-elements';

class Settings extends React.Component {
  render() {
    return (
      <ScrollView 
          style={{width:'100%', height: '100%'}}
          contentContainerStyle={{
            justifyContent: 'space-between'
        }}>
        <View style={{flex: 1, flexDirection: 'column'}}>
            <Image source={require('../assets/recycling.jpg')} style={styles.secondContainer} /> 
            <Card
              title="About Us"
              image={require('../assets/about.jpg')}
              containerStyle={{ marginBottom: 5 }}>
              <Text style={{ marginBottom: 10 }}>Find out more about the REngineer Team and their passion for the environment.</Text>
              <Button
                buttonStyle={{
                  borderRadius: 10,
                  marginLeft: 10,
                  marginRight: 10,
                  marginBottom: 0,
                  backgroundColor: '#CACC90'
                }}
                onPress={() => this.props.navigation.navigate("About")}
                title="About Us"
              />
            </Card>
            <Card
              title="Report Fault" 
              image={require('../assets/recycling.jpg')}
              containerStyle={{ marginBottom: 5 }}>
              <Text style={{ marginBottom: 10 }}>Faulty bins? Tell us more information about the bins and we will fix them as soon as possible.</Text>
              <Button
                title="Report Fault"
                buttonStyle={{
                  borderRadius: 10,
                  marginLeft: 10,
                  marginRight: 10,
                  marginBottom: 0,
                  backgroundColor: '#CACC90'
                }}
                onPress={() => this.props.navigation.navigate("Settings_QR")}
              />
            </Card>
            {/* <Button 
                style={{marginRight: 0}} 
                title="About Us"
                onPress={() => this.props.navigation.navigate("About")} 
            />
            <Button 
                style={{marginLeft: 0}} 
                title="Report Fault" 
                onPress={() => this.props.navigation.navigate("Settings_QR")}
                color = "#000080"
                /> */}
        </View>
        </ScrollView>

    //   <View style={styles.container}>
    //     <Button
    //       title="About Us"
    //     //   onPress={() => this.props.navigation.navigate("Search")}
    //     />
    //     <Button
    //       title="Report Fault"
    //       onPress={() => this.props.navigation.navigate("Settings_Keyin")}
    //       color = "#000080"
    //     //   onPress={() => this.props.navigation.navigate("Settings_QR")}
    //     />
    //   </View>

    );
  }
}

const styles = StyleSheet.create({
  secondContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: '110%',
    height: '110%',
  },
  screen: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding:15,
  },
  funfact: {
    flex: 4,
    width: '100%',
    backgroundColor: '#8AA989',
    flexDirection: 'column',
    alignItems: 'center',
    // paddingTop:30,
    // justifyContent: 'space-between',
    borderWidth:10,
    borderColor: 'transparent'

  },
  search: {
    flex: 2,
    width: '100%',
    backgroundColor: '#C0CEB2',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth:10,
    borderColor: 'transparent'
  },
  progress: {
    flex: 3,
    width: '100%',
    backgroundColor: '#CACC90',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth:10,
    borderColor: 'transparent'
  },
  image: {
    marginBottom: 20,
    height: 100,
    width: 100,
}
});

export default Settings;
