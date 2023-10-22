import React, { useState } from 'react';
import { SafeAreaView, View, Image, Text} from 'react-native';
import { Button } from 'react-native-paper';
import { styling } from '../styles/styles';



// Import statements...

function Home({ navigation }) {
    return (
        <SafeAreaView style={styling.main}>
                <View style={{ margin: 20 }}>
                    <Text style={{ fontSize: 22 }}> WELCOME TO REACT NATIVE</Text>
                </View>
                    <View>
                        <Button
                            mode="contained"
                            style={{ margin: 10, }}
                            onPress={() => navigation.navigate('Alert')} // Pass the name of the screen as a string
                        >
                        Let's Get Started
                        </Button>
                    </View>
        </SafeAreaView>
    );
}

export const Wow = ({ navigation }) => {
    return (
        <Home navigation={navigation} />
    );
}