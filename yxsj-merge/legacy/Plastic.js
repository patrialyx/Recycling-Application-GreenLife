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

const Plastic = ({route}) => {
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
              style={{ flex: 1, height: null, width: null, resizeMode: 'contain', borderRadius: 5, borderWidth: 1, borderColor: '#dddddd' }}
              source={require('../assets/plastic.jpeg')}
          />
        )}
        
        >
          <View style={{flexDirection: 'column', justifyContent: 'space-between'}}>
            <Text style={styles.sectionTitle}>Plastic Items: Plastic Packaging, Plastic Boxes, Plastic Bags, Detergent/Shampoo Bottles (rinsed), Juice/ Milk Containers, CD casings, Toiletries containers etc</Text>
            <Text style={styles.sectionContent}>People buy a million plastic bottles per minute and 91% of them end up in the garbage.  </Text>
            <Text style={styles.sectionContent}>Recycling takes 88% less energy than making plastic from raw materials while helping reducing fossil fuel consumption </Text>
            <Text style={styles.sectionContent}>Do your part and deposit these items in the nearest recycling bin! </Text>
          </View>

      </HeaderImageScrollView>
    </View>
  );
};

export default Plastic;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    height: null, 
    width: null, 
    resizeMode: 'contain', 
    borderRadius: 5, 
    borderWidth: 1, 
    borderColor: '#dddddd'
    // height: MAX_HEIGHT,
    // width: Dimensions.get('window').width,
    // alignSelf: 'stretch',
    // resizeMode: 'cover',
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
    padding: 12
  },
  titleContainer: {
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
  },
  
});
