import React, { Component } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';


export default class Splash extends Component {

    constructor(props) {
        super(props);
        this.state = {
            fontLoaded: false
        };
    }

    render() {
        const recyclingTips = ["'Just use, later then recycle lah!': Did you know that You can only recycle your plastic bottle a limited number of times before it becomes another piece of waste on our planet? ", "'Biodegradable plastics are good for the earth!': Unfortunately, we do not have the facilities to treat biodegradable plastics in Singapore, so they should be thrown away as general waste. Biodegradable plastics are incinerated and sent to the landfill, where they act like any normal plastic. "];
        var randomElement = recyclingTips[Math.floor(Math.random() * recyclingTips.length)];
        return (
            <View style={styles.container}>

                <View style={styles.secondContainer} >

                    <Image style={{ flex: 1, resizeMode: "cover", }} source={require('../assets/recycling.jpg')} />

                </View>
                <View style={{ flex: 1, backgroundColor: 'transparent', justifyContent: 'center', }} >
                    <View style={{ justifyContent: 'center', alignItems: 'center', }}>

                        <Image source={require('../assets/greenlife.png')} style={styles.image} />
                            <View style={{margin: 15}}>
                                <Text style={{ textAlign: 'center', fontSize: 20, fontWeight: 'bold' }} >
                                    Busting Singaporean Recycling Myths:
                                </Text>
                            </View>
                            <View style={{margin: 15}}>
                                <Text style={{ textAlign: 'center', fontSize: 15 }} >
                                    {randomElement}
                                </Text>
                            </View>
                    </View>

                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eee'
    },

    secondContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
    },

    image: {
        marginBottom: 20,
        height: 200,
        width: 200,
    },
});
