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

const Glass = ({route}) => {
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
          source={require('../assets/glass.jpg')} />
        )}
        
        >
          <View style={{flexDirection: 'column', justifyContent: 'space-between'}}>
            <Text style={styles.sectionTitle}>Glass Items: Plastic Water Bottle, Plastic Cups, Plastic Bags</Text>
            <Text style={styles.sectionContent}>Plastic Items: Plastic Water Bottle, Plastic Cups, Plastic Bags</Text>
            
          </View>

      </HeaderImageScrollView>
    </View>
  );
};

export default Glass;

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  }
  
});