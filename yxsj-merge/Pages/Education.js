import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    ScrollView,
    Image, Button,
    Dimensions, Linking,
    TouchableOpacity
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
                            style={{ fontSize: 24, fontWeight: '700', paddingHorizontal: 20 }}>
                                News 
                            </Text>
                            <Image 
                                source={require('../assets/latestnews.png')} 
                                style={{ width: "100%", height: 100, resizeMode: 'contain',flex: 1}}
                                />
    
                            <View style={{
                                backgroundColor: '#fff',
                                justifyContent: 'center', 
                                alignItems:'center',
                                paddingHorizontal: 30}}>
                            <TouchableOpacity style={{backgroundColor : "#CACC90"}} onPress = { () => 
                                                Linking.openURL('https://www.straitstimes.com/tags/recycling')}>
                                           
                                <Text style={{color:'#000000', textAlign: 'center', fontWeight: 'bold' }}>CLICK HERE TO CHECK OUT THE MOST RECENT RECYCLING NEWS</Text>
                            </TouchableOpacity>
                            </View>
                            <Text
                            style={{ fontSize: 24, fontWeight: '700', paddingHorizontal: 20 }}>
                                Recycling Tips
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
                                    {/* <Category imageUri={require('../assets/latestnews.png')}
                                        name="Recent Recycling News Updates"
                                    /> */}
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
                            
                            <SubcategoryCard type="Plastic" navigation={this.props.navigation}/>
                            <SubcategoryCard type="Paper" navigation={this.props.navigation}/>
                            <SubcategoryCard type="Glass" navigation={this.props.navigation}/>
                            <SubcategoryCard type="Ewaste" navigation={this.props.navigation}/>
                            <SubcategoryCard type="Metal" navigation={this.props.navigation}/>
                            <SubcategoryCard type="Nonrecyclable" navigation={this.props.navigation}/>


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
    },
    secondContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: '110%',
        height: '110%',
      },
});