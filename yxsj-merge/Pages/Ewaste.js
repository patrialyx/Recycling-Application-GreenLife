import React, {useRef} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  StatusBar,
  Platform,
} from 'react-native';
import HeaderImageScrollView, {
  TriggeringView,
} from 'react-native-image-header-scroll-view';

// import * as Animatable from 'react-native-animatable';
// import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
// import FontAwesome from 'react-native-vector-icons/FontAwesome';

const MIN_HEIGHT = Platform.OS === 'ios' ? 90 : 55;
const MAX_HEIGHT = 350;

const Ewaste = ({route}) => {
//   const itemData = route.params.itemData;
//   const navTitleView = useRef(null);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <HeaderImageScrollView
        maxHeight={MAX_HEIGHT}
        minHeight={MIN_HEIGHT}
        maxOverlayOpacity={0.6}
        minOverlayOpacity={0.3}
        
        renderHeader={() => (
          <Image 
          source={require('../assets/e-waste.jpg')} />
        )}
        
        >
          <View style={{flexDirection: 'column', justifyContent: 'space-between'}}>
            <Text style={styles.sectionTitle}>E-Waste Items: Laptop, Printer, Mobile Phones, Hard Disk Drives, Battery Chargers</Text>
            <Text style={styles.sectionContent}>Improper disposal of E-waste leads to environmental pollution and this may in turn harm human health.</Text>
            <Text style={styles.sectionContent}>E-waste comprises many different components and requires specialised equipment to dismantle, shred, process and extract the constituent materials that can then be turned into new products.</Text>
            <Text style={styles.sectionContent}>Do your part and deposit these items in the nearest recycling bin! </Text>
          </View>

      </HeaderImageScrollView>
    </View>
  );
};

export default Ewaste;

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