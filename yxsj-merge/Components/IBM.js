// const fs = require('fs');
// import {
//   StyleSheet,
//   Text,
//   View,
// } from "react-native";
// const VisualRecognitionV3 = require('ibm-watson/visual-recognition/v3');
// const { IamAuthenticator } = require('ibm-watson/auth');

// const visualRecognition = new VisualRecognitionV3({
//     version: '2018-03-19',
//     authenticator: new IamAuthenticator({
//       apikey: 'ZB5kB8138RrQr5WWrffZ204KI8vssVMZ8skaP04WLISh',
//     }),
//     serviceUrl: 'https://api.us-south.visual-recognition.watson.cloud.ibm.com/instances/a0fdfc05-f7ff-4919-982b-633aa70dc635',
//   });
  
//   const classifyParams = {
//     imagesFile: '',
//     owners: ['me'],
//     threshold: 0.6,
//   };

//   console.log("Running");
  
// export default function IBMClassifier(Imageuri){
//     classifyParams.imagesFile = Imageuri

//     visualRecognition.classify(classifyParams)
//     .then(response => {
//       const classifiedImages = response.result;
//       console.log(JSON.stringify(classifiedImages, null, 2));
//     })
//     .catch(err => {
//       console.log('error:', err);
//     });
//     return (
//         <View>
//             <Text> </Text>
//         </View> 
//     );
// };





// const fs = require('fs');
// const VisualRecognitionV3 = require('ibm-watson/visual-recognition/v3');
// const { IamAuthenticator } = require('ibm-watson/auth');

// import { Header } from "react-native/Libraries/NewAppScreen";
// const base64 = require('base-64');

// const visualRecognition = new VisualRecognitionV3({
//   version: '2018-03-19',
//   authenticator: new IamAuthenticator({
//     apikey: '{apikey}',
//   }),
//   serviceUrl: '{url}',
// });

// const classifyParams = {
//   imagesFile: "",
//   owners: ['me'],
//   threshold: 0.6,
// };
// export default function IBM(Imageuri){
//     classifyParams.imagesFile = Imageuri

//     visualRecognition.classify(classifyParams)
//     .then(response => {
//       const classifiedImages = response.result;
//       console.log(JSON.stringify(classifiedImages, null, 2));
//     })
//     .catch(err => {
//       console.log('error:', err);
//     });
// }

// const image = require('./assets/test.png')


// export default async function IBM2 (image) {
//   try {
//     const header = new Headers()
//     // header.append("apikey",  "UfM8L39dClued7gpUhhYbabBSy0i0vJKOdOlnLjUhAOR")
//     header.append('Authorization', 'Basic ' + base64.encode("apikey" + ":" + "UfM8L39dClued7gpUhhYbabBSy0i0vJKOdOlnLjUhAOR"));
//     console.log(imageuri)
//     const res = await fetch(
//       `https://api.us-south.visual-recognition.watson.cloud.ibm.com/instances/b907d88a-7b7a-47eb-be55-057ec933dc9c/v3/classify?url=data:image/jpeg;base64,${image.base64}&version=2018-03-19"`,
//       {
//         method: "GET", 
//         headers: header
//       }
//     )
//       console.log(JSON.stringify(res, null, 2));
  
//   } catch(err)  {
//     console.log('error:', err);
//   };
// }