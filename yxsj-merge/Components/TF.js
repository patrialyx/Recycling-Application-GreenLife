
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import * as tf from '@tensorflow/tfjs';
import { fetch } from '@tensorflow/tfjs-react-native';
import * as mobilenet from '@tensorflow-models/mobilenet'
import * as jpeg from 'jpeg-js'
var base64Arraybuffer = require("base64-arraybuffer")


class TensorJS  {
  constructor () {
    this.state = {
      isTfReady: false,
      isModelReady: false,
      predictions: null,
      image: null
    }
  }
  
  imageToTensor(rawImageData) {
    const TO_UINT8ARRAY = true
    const { width, height, data } = jpeg.decode(rawImageData, TO_UINT8ARRAY)
    // Drop the alpha channel info for mobilenet
    const buffer = new Uint8Array(width * height * 3)
    let offset = 0 // offset into original data
    for (let i = 0; i < buffer.length; i += 3) {
      buffer[i] = data[offset]
      buffer[i + 1] = data[offset + 1]
      buffer[i + 2] = data[offset + 2]

      offset += 4
    }

    return tf.tensor3d(buffer, [height, width, 3])
  }

  classifyImage = async (image) => {
    try {
      const imageTensor = this.imageToTensor(base64Arraybuffer.decode(image.base64))
      const predictions = await this.model.classify(imageTensor)
      this.state.predictions = predictions
      console.log(predictions)
    } catch (error) {
      console.log(error)
    }
  }
      
      
  async init() {
    console.log("this is before undefined")
    try{
      await tf.setBackend('cpu');
      await tf.ready()
      // this.setState({
      //   isTfReady: true
      // })
      this.state = Object.assign({}, this.state, {isTfReady: true})
      console.log('hi', this.state.isTfReady)
      this.model = await mobilenet.load()
      // this.setState({isModelReady:true})
      this.state = Object.assign({}, this.state, {isModelReady: true})
      
      
      //Output in Expo console
      console.log(this.state.isTfReady)
    } catch (error) {
      console.log(error)
    }
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

export default TensorJS;