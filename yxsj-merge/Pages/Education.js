import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TextInput,
    Platform,
    StatusBar,
    ScrollView,
    Image, Button,
    Dimensions, Linking
} from "react-native";

import Category from '../Category'
const { height, width } = Dimensions.get('window')

class Education extends Component {

    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View style={{ flex: 1 }}>
                    
                    <ScrollView
                        scrollEventThrottle={16}
                    >
                        <View style={{ flex: 1, backgroundColor: 'white', paddingTop: 20 }}>
                            {/* <Text style={{ fontSize: 24, fontWeight: '700', paddingHorizontal: 20 }}>
                                News
                            </Text> */}
                            <Text
                            onPress={() => {
                                //on clicking we are going to open the URL using Linking
                                Linking.openURL('https://www.straitstimes.com/tags/recycling');
                            }}
                            style={{ fontSize: 24, fontWeight: '700', paddingHorizontal: 20 }}>
                                News
                            </Text>

                            <View style={{ height: 200, marginTop: 20 }}>
                                {/* <ScrollView>
                                    <View style={{height: 200, width: 130}}>
                                        <View style = {{flex: 2}}>
                                            <Image source = {require('../assets/icon.png')}
                                            style={{flex: 1, width: null, height: 200}} />
                                        </View>
                                    </View>
                                </ScrollView> */}
                                <ScrollView
                                    horizontal={true}
                                    showsHorizontalScrollIndicator={false}
                                >
                                    <Category imageUri={require('../assets/upcycle.jpg')}
                                        name="Upcycling"
                                    />
                                    <Category imageUri={require('../assets/reduceplastic.png')}
                                        name="Reduce Plastic Waste"
                                    />
                                    <Category imageUri={require('../assets/dyk.jpg')}
                                        name="Did you know?"
                                    />
                                </ScrollView>
                            </View>
                            <View style={{ marginTop: 20, paddingHorizontal: 20 }}>
                                <Text style={{ fontSize: 24, fontWeight: '700' }}> 
                                    Plastic
                                </Text>
                                
                                <View style={{ width: width - 40, height: 200, marginTop: 20 }}>
                                    <Image
                                        style={{ flex: 1, height: null, width: null, resizeMode: 'contain', borderRadius: 5, borderWidth: 1, borderColor: '#dddddd' }}
                                        source={require('../assets/plastic.png')}
                                    />
                                </View>
                                <Button  
                                    title="More Info"  
                                    onPress={() => this.props.navigation.navigate("Plastic")}
                                />  
                            </View>

                            <View style={{ marginTop: 40, paddingHorizontal: 20 }}>
                                <Text style={{ fontSize: 24, fontWeight: '700' }}>
                                    Paper
                                </Text>
                                <View style={{ width: width - 40, height: 200, marginTop: 20 }}>
                                    <Image
                                        style={{ flex: 1, height: null, width: null, resizeMode: 'contain', borderRadius: 5, borderWidth: 1, borderColor: '#dddddd' }}
                                        source={require('../assets/paper.png')}
                                    />
                                </View>
                                <Button  
                                    title="More Info"  
                                    onPress={() => this.props.navigation.navigate("Paper")}
                                />  
                            </View>

                            <View style={{ marginTop: 40, paddingHorizontal: 20 }}>
                                <Text style={{ fontSize: 24, fontWeight: '700' }}>
                                    Glass
                                </Text>
                                <View style={{ width: width - 40, height: 200, marginTop: 20 }}>
                                    <Image
                                        style={{ flex: 1, height: null, width: null, resizeMode: 'contain', borderRadius: 5, borderWidth: 1, borderColor: '#dddddd' }}
                                        source={require('../assets/glass.png')}
        
                                    />
                                </View>
                                <Button  
                                    title="More Info"  
                                    onPress={() => this.props.navigation.navigate("Glass")}
                                />  
                            </View>

                            <View style={{ marginTop: 40, paddingHorizontal: 20 }}>
                                <Text style={{ fontSize: 24, fontWeight: '700' }}>
                                    E-Waste
                                </Text>
                                <View style={{ width: width - 40, height: 200, marginTop: 20 }}>
                                    <Image
                                        style={{ flex: 1, height: null, width: null, resizeMode: 'contain', borderRadius: 5, borderWidth: 1, borderColor: '#dddddd' }}
                                        source={require('../assets/ewaste.png')}
                                    />
                                </View>
                                <Button  
                                    title="More Info"  
                                    onPress={() => this.props.navigation.navigate("Ewaste")}
                                />  
                            </View>

                            <View style={{ marginTop: 40, paddingHorizontal: 20 }}>
                                <Text style={{ fontSize: 24, fontWeight: '700' }}>
                                    Metal
                                </Text>
                                <View style={{ width: width - 40, height: 200, marginTop: 20 }}>
                                    <Image
                                        style={{ flex: 1, height: null, width: null, resizeMode: 'contain', borderRadius: 5, borderWidth: 1, borderColor: '#dddddd' }}
                                        source={require('../assets/metal.png')}
                                    />
                                </View>
                                <Button  
                                    title="More Info"  
                                    onPress={() => this.props.navigation.navigate("Metal")}
                                />  
                            </View>

                            <View style={{ marginTop: 40, paddingHorizontal: 20 }}>
                                <Text style={{ fontSize: 24, fontWeight: '700' }}>
                                    Non-Recyclables
                                </Text>
                                <View style={{ width: width - 40, height: 200, marginTop: 20 }}>
                                    <Image
                                        style={{ flex: 1, height: null, width: null, resizeMode: 'contain', borderRadius: 5, borderWidth: 1, borderColor: '#dddddd' }}
                                        source={require('../assets/no.png')}
                                    />
                                </View>
                                <Button  
                                    title="More Info"  
                                    onPress={() => this.props.navigation.navigate("Nonrecyclables")}
                                />  
                            </View>

                            <View style={{ marginTop: 40, paddingHorizontal: 20 }}>
                                <Text style={{ fontSize: 24, fontWeight: '700' }}>
                                </Text>      
                            </View>
                        </View>
                    </ScrollView>
                </View>
            </SafeAreaView>
        );
    }
}
export default Education;

