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

const MIN_HEIGHT = Platform.OS === 'ios' ? 90 : 55;
const MAX_HEIGHT = 350;

const Glass = ({route}) => {

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
          source={require('../assets/about.jpg')}
      />
    )}

    >
      <View style={{flexDirection: 'column', justifyContent: 'space-between'}}>
        <Text style={styles.sectionTitle}>Team REngineers</Text>
        <Text style={styles.sectionContent}>Team REngineers aims to promote recycling and foster positive recycling habits among residents of Singapore. The application will provide crucial information about recycling such as the locations of recycling bins nearby (using recycling bins API). </Text>
        <Text style={styles.sectionContent}>It also allows users to search items that can be recycled using a built in AI to recognise objects and allows users to track their recycling habits.</Text>
        <Text style={styles.sectionContent}>This app is designed and developed with software engineering principles. Hope you enjoy it! </Text>
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
