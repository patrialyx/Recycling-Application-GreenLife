import React, { useState } from 'react';
import { View, Button, Image, Text, StyleSheet, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import { useNavigation } from "@react-navigation/native";
import TensorJS from './TF';


const ImgPicker = props => {
  const [pickedImage, setPickedImage] = useState();
  
  const verifyPermissions = async () => {
    const result = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    const result1 = await Permissions.askAsync(Permissions.CAMERA);
    if (result.status !== 'granted') {
      Alert.alert(
        'Insufficient permissions!',
        'You need to grant camera permissions to use this app.',
        [{ text: 'Okay' }]
        );
        return false;
      }
      return true;
    };
    
    const navigation = useNavigation();
    const takeImageHandler = async () => {
      const hasPermission = await verifyPermissions();
      if (!hasPermission) {
        return;
      }
      const image = await ImagePicker.launchCameraAsync({
        allowsEditing: true,
        aspect: [16, 9],
        quality: 0.5,
        base64: true
      });
      
      //Instantiate TF model and wait for it to init
      let ClassifyThis = new TensorJS();
      await ClassifyThis.init()
      
      
      setPickedImage(image.uri);
      ClassifyThis.state.image = image;
    try {
      if (ClassifyThis.state.isTfReady && ClassifyThis.state.isModelReady){
        console.log("both are ready")
        await ClassifyThis.classifyImage(image)
        navigation.navigate("Search", {prediction: ClassifyThis.state.predictions[0].className})

      }
      console.log("end of try block")
    } catch (error){
      console.log(error)
    }
  }


    return (
      <View style={styles.imagePicker}>
      <View style={styles.imagePreview}>
        {!pickedImage ? (
          <Text>No image chosen yet.</Text>
          ) : (
            <Image style={styles.image} source={{ uri: pickedImage }} />
            )}
      </View>
      <Button
        title="Take Image of Bin"
        // color={Colors.primary}
        onPress={takeImageHandler}
        />
      
    </View>
    );

};

const styles = StyleSheet.create({
  imagePicker: {
    alignItems: 'center',
    marginBottom: 15
  },
  imagePreview: {
    width: '100%',
    height: 300,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#ccc',
    borderWidth: 1
  },
  image: {
    width: '100%',
    height: '100%'
  }
});
export default ImgPicker;