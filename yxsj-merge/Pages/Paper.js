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

const Paper = ({route}) => {
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
          source={require('../assets/paper.jpeg')}
      />
    )}
    
    >
      <View style={{flexDirection: 'column', justifyContent: 'space-between'}}>
        <Text style={styles.sectionTitle}>Paper Items: Cardboard Packaging, Newspaper, Juice/Milk Cartons, Flyers, Magazines etc</Text>
        <Text style={styles.sectionContent}>Recycling one ton of paper can save 17 trees, 7,000 gallons of water, 380 gallons of oil, 3.3 cubic yards of landfill space and 4,000 kilowatts of energy. It can also reduce greenhouse gas emissions by one metric ton of carbon equivalent.  </Text>
        <Text style={styles.sectionContent}>Do your part and deposit these items in the nearest recycling bin! </Text>
      </View>

      </HeaderImageScrollView>
    </View>
  );
};

export default Paper;

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
    padding: 12
  },
  titleContainer: {
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
  },
  
});