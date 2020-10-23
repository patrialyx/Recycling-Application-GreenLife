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

const Nonrecyclables = ({route}) => {

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
          source={require('../assets/no.png')}
      />
          // <Image 
          // source={require('../assets/no.png')} />
        )}
        
        >
          <View style={{flexDirection: 'column', justifyContent: 'space-between'}}>
            <Text style={styles.sectionTitle}>Non-Recyclables Items: Items with Food or Liquid Waste (eg. banana, pizza boxes), Styrofoam, Ceramics, Polystyrene</Text>
            <Text style={styles.sectionContent}>Recycling contaminated items may contaminate the recyclables present and make them not recyclables. 😭</Text>
            
          </View>

      </HeaderImageScrollView>
    </View>
  );
};

export default Nonrecyclables;

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