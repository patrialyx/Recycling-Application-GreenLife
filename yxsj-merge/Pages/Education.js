import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    ScrollView,
    Image, Button,
    Dimensions, Linking
} from "react-native";

import Category from '../Category'
import SubcategoryCard from '../Components/SubcategoryCard'
const { height, width } = Dimensions.get('window')

class Education extends Component {

    // componentWillMount() {
    //     this.startHeaderHeight = 80
    //     if (Platform.OS == 'android') {
    //         this.startHeaderHeight = 100 + StatusBar.currentHeight
    //     }
    // }

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
                                News / Recycling Tips
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
                                    <Category imageUri={require('../assets/timer.png')}
                                        name="Spend some time to sort recycling"
                                    />
                                    <Category imageUri={require('../assets/noplastic.png')}
                                        name="Reduce Plastic Waste"
                                    />
                                    <Category imageUri={require('../assets/recycle-bin.png')}
                                        name="Ensure items are clean"
                                    />
                                    <Category imageUri={require('../assets/dyk.jpg')}
                                        name="Did you know?"
                                    />
                                </ScrollView>
                                
                            </View>
                            
                            <SubcategoryCard type="plastic"/>
                            <SubcategoryCard type="paper"/>
                            <SubcategoryCard type="glass"/>
                            <SubcategoryCard type="ewaste"/>
                            <SubcategoryCard type="metal"/>
                            <SubcategoryCard type="no"/>

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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});