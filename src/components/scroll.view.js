import React from 'react';
import { StyleSheet, Text, View, StatusBar, SafeAreaView } from 'react-native';
import { Button } from 'react-native-paper';

const ScrollviewComponent = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.heading}>Welcome to Our App</Text>
        <Text style={styles.paragraph}>
          We are excited to have you as our user. Our app provides a wide range of features and services designed to make your life easier.
        </Text>
        <Text style={styles.paragraph}>
          Explore our app and discover the amazing possibilities that await you. Whether it's productivity, entertainment, or information, we've got you covered.
        </Text>
        <Text style={styles.paragraph}>
          Thank you for choosing our app. Get started now and enjoy the journey!
        </Text>
      </View>
      <Button         
      style={{ alignSelf: 'flex-end', width: 300, height: 30 ,maginTop:20}}
      onPress={() => navigation.navigate('SearchBar')} // Pass the name of the screen as a string
    >
      Go to Search Bar →
    </Button>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'orange',
  },
  innerContainer: {
    padding: 20,
    alignItems: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333', 
  },
  paragraph: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 10,
    color: 'black', 
    
  },
});

export default ScrollviewComponent;