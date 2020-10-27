import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  StatusBar,
  Platform,
} from 'react-native';
import HeaderImageScrollView from 'react-native-image-header-scroll-view';

// import * as Animatable from 'react-native-animatable';
// import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
// import FontAwesome from 'react-native-vector-icons/FontAwesome';

const MIN_HEIGHT = Platform.OS === 'ios' ? 90 : 55;
const MAX_HEIGHT = 350;

class SubcategoryDetails extends Component {

  renderBody = () => {
    switch (this.props.route.params.type) {
      case "Plastic":
        return (
          <View style={{flexDirection: 'column', justifyContent: 'space-between'}}>
            <Text style={styles.sectionTitle}>Plastic Items: Plastic Packaging, Plastic Boxes, Plastic Bags, Detergent/Shampoo Bottles (rinsed), Juice/ Milk Containers, CD casings, Toiletries containers etc</Text>
            <Text style={styles.sectionContent}>People buy a million plastic bottles per minute and 91% of them end up in the garbage.  </Text>
            <Text style={styles.sectionContent}>Recycling takes 88% less energy than making plastic from raw materials while helping reducing fossil fuel consumption </Text>
            <Text style={styles.sectionContent}>Do your part and deposit these items in the nearest recycling bin! </Text>
          </View>
        )
      case "Paper":
        return (
          <View style={{flexDirection: 'column', justifyContent: 'space-between'}}>
            <Text style={styles.sectionTitle}>Paper Items: Cardboard Packaging, Newspaper, Juice/Milk Cartons, Flyers, Magazines etc</Text>
            <Text style={styles.sectionContent}>Recycling one ton of paper can save 17 trees, 7,000 gallons of water, 380 gallons of oil, 3.3 cubic yards of landfill space and 4,000 kilowatts of energy. It can also reduce greenhouse gas emissions by one metric ton of carbon equivalent.  </Text>
            <Text style={styles.sectionContent}>Do your part and deposit these items in the nearest recycling bin! </Text>
          </View>
        )
      case "Glass":
        return (
          <View style={{flexDirection: 'column', justifyContent: 'space-between'}}>
            <Text style={styles.sectionTitle}>Glass Items: Beer/ Condiment Bottle, Jam Jars</Text>
            <Text style={styles.sectionContent}>Recycling saves energy. Compared to making glass from raw materials for the first time, cullet melts at a lower temperature.  </Text>
            <Text style={styles.sectionContent}>Glass produced from recycled glass reduces related air pollution by 20% and related water pollution by 50%.</Text>
            <Text style={styles.sectionContent}>Do your part and deposit these items in the nearest recycling bin! </Text>
          </View>
        )
      case "Ewaste":
        return (
          <View style={{flexDirection: 'column', justifyContent: 'space-between'}}>
            <Text style={styles.sectionTitle}>E-Waste Items: Laptop, Printer, Mobile Phones, Hard Disk Drives, Battery Chargers</Text>
            <Text style={styles.sectionContent}>Improper disposal of E-waste leads to environmental pollution and this may in turn harm human health.</Text>
            <Text style={styles.sectionContent}>E-waste comprises many different components and requires specialised equipment to dismantle, shred, process and extract the constituent materials that can then be turned into new products.</Text>
            <Text style={styles.sectionContent}>Do your part and deposit these items in the nearest recycling bin! </Text>
          </View>
          )
      case "Metal":
        return (
          <View style={{flexDirection: 'column', justifyContent: 'space-between'}}>
            <Text style={styles.sectionTitle}>Metal Items:  Drink Cans, Aluminium Cans, Biscuit Tins etc</Text>
            <Text style={styles.sectionContent}>Recycling is more economic - less energy is needed to produce metal</Text>
            <Text style={styles.sectionContent}>Saves valuable raw materials - reserves of metal ores will last longer and there will be less damage to the environment. s</Text>
            <Text style={styles.sectionContent}>Do your part and deposit these items in the nearest recycling bin! </Text>
          </View>
        )
      case "Nonrecyclable":
        return (
          <View style={{flexDirection: 'column', justifyContent: 'space-between'}}>
            <Text style={styles.sectionTitle}>Non-Recyclables Items: Items with Food or Liquid Waste (eg. banana, pizza boxes), Styrofoam, Ceramics, Polystyrene</Text>
            <Text style={styles.sectionContent}>Recycling contaminated items may contaminate the recyclables present and make them not recyclables. 😭</Text>   
          </View>
        )
    }
  }



  renderHeader = () => {
    switch (this.props.route.params.type) {
      case "Plastic":
        return (
          <Image
            style={{ flex: 1, height: null, width: null, resizeMode: 'contain', borderRadius: 5, borderWidth: 1, borderColor: '#dddddd' }}
            source={require('../assets/plastic.jpeg')}
          />
        )
      case "Paper":
        return (
          <Image
            style={{ flex: 1, height: null, width: null, resizeMode: 'contain', borderRadius: 5, borderWidth: 1, borderColor: '#dddddd' }}
            source={require('../assets/paper.jpeg')}
          />
        )
      case "Glass":
        return (
          <Image
            style={{ flex: 1, height: null, width: null, resizeMode: 'contain', borderRadius: 5, borderWidth: 1, borderColor: '#dddddd' }}
            source={require('../assets/glass.jpeg')}
          />
        )
      case "Ewaste":
        return (
          <Image
            style={{ flex: 1, height: null, width: null, resizeMode: 'contain', borderRadius: 5, borderWidth: 1, borderColor: '#dddddd' }}
            source={require('../assets/e-waste.jpg')}
          />
        )
      case "Metal":
        return (
          <Image
            style={{ flex: 1, height: null, width: null, resizeMode: 'contain', borderRadius: 5, borderWidth: 1, borderColor: '#dddddd' }}
            source={require('../assets/metal.jpeg')}
          />
        )
      case "Nonrecyclable":
        return (
          <Image
            style={{ flex: 1, height: null, width: null, resizeMode: 'contain', borderRadius: 5, borderWidth: 1, borderColor: '#dddddd' }}
            source={require('../assets/no.png')}
          />
        )
    }
  }

  renderTitle = () => {
    switch (this.props.route.params.type) {
      case "Plastic":
        return (
          <View style={{ flex: 1,justifyContent: "flex-end", alignItems: "center" }} >
            <Text style={{ backgroundColor: "transparent", fontSize:50, color:"white" }}>Plastic</Text>
          </View>
        )
      case "Paper":
        return (
          <View style={{ flex: 1, justifyContent: "flex-end", alignItems: "center" }} >
            <Text style={{ backgroundColor: "transparent", fontSize:50, color:"white" }}>Paper</Text>
          </View>
        )
      case "Glass":
        return (
          <View style={{ flex: 1, justifyContent: "flex-end", alignItems: "center" }} >
            <Text style={{ backgroundColor: "transparent", fontSize:50, color:"white" }}>Glass</Text>
          </View>
        )
      case "Ewaste":
        return (
          <View style={{ flex: 1, justifyContent: "flex-end", alignItems: "center" }} >
            <Text style={{ backgroundColor: "transparent", fontSize:50, color:"white" }}>E-Waste</Text>
          </View>
        )
      case "Metal":
        return (
          <View style={{ flex: 1, justifyContent: "flex-end", alignItems: "center" }} >
            <Text style={{ backgroundColor: "transparent", fontSize:50, color:"white" }}>Metal</Text>
          </View>
        )
      case "Nonrecyclable":
        return (
          <View style={{ flex: 1, justifyContent: "flex-end", alignItems: "center" }} >
            <Text style={{ backgroundColor: "transparent", fontSize:50, color:"white" }}>Non-Recyclable</Text>
          </View>
        )
    }
  }

  render () {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <HeaderImageScrollView
          maxHeight={MAX_HEIGHT}
          minHeight={MIN_HEIGHT}
          maxOverlayOpacity={0.6}
          minOverlayOpacity={0.3}
          renderForeground={this.renderTitle}
          renderHeader={this.renderHeader}
        >
        {this.renderBody()}
        
        </HeaderImageScrollView>

      </View>
    );
  }

}

export default SubcategoryDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    height: MAX_HEIGHT,
    width: Dimensions.get('window').width,
    alignSelf: 'stretch',
    resizeMode: 'cover',
  },
  title: {
    fontSize: 20,
  },
  body: {
    fontSize: 14,
  },
  name: {
    fontWeight: 'bold',
  },
  section: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
    backgroundColor: 'white',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    padding: 20
  },
  sectionContent: {
    fontSize: 16,
    textAlign: 'justify',
    padding: 10
  },
  titleContainer: {
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
  },
  
});