import React from 'react'
import { View, Text, StyleSheet, Button, Image } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Card, CardItem, Body } from "native-base";
import Fire from '../Backend/Fire'

class Profile extends React.Component {
	handleLogout = async () => {
    await Fire.shared.handleLogout()
		this.props.navigation.navigate('Login')
	}

  // temp
  getPoints = () => {
    Fire.shared.submitItem('metal', 200)
  }

	render() {
		return (

      <View
        style={{
          flex: 1,
          backgroundColor: '#eee',
        }}
      >

        <View
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
          }}
        >

          <Image
            style={{
              flex: 1,
              resizeMode: 'cover',
            }}
            source={require('../assets/recycling.jpg')}
          />

        </View>

        <View style={styles.container}>

          <Image source={require('../assets/alfoil.jpg')}
            style={{
              marginTop: 20,
              borderWidth: 1,
              borderColor: 'rgba(0,0,0,0.2)',
              alignItems: 'center',
              justifyContent: 'center',
              width: 120,
              height: 120,
              borderRadius: 100,
            }}
          />

          <Text style={styles.question}>
            Did you know?
            </Text>
          <Text style={styles.funFact}>
            Recycling scrap metals including iron and aluminium can benefit local construction projects such as roads and bridges.
            </Text>

          <Card style={styles.card}>
            <CardItem>
              <Body>
                <Text style={styles.cardTitle}>
                  Score
                </Text>
                <Text style={styles.cardText}>
                  {Fire.shared.user.points}
                </Text>
              </Body>
            </CardItem>
          </Card>

          <Card style={styles.card}>
            <CardItem>
              <Body>
                <Text style={styles.cardTitle}>
                  Deposit Recyclables
                </Text>
                <Text style={styles.cardText}>
                  Clock your points here!
                </Text>
              </Body>
            </CardItem>
          </Card>

        </View>
        <View style={styles.container}>
				<Text>{Fire.shared.user.displayName}</Text>
				<Button title='Get sum points' onPress={()=>this.getPoints()} />
				<Button title='Logout' onPress={this.handleLogout} />
			</View>

      </View>
    );
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center'
	}
})

export default Profile
