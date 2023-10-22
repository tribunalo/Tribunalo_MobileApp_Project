import * as React from 'react';
import { Surface, Text } from 'react-native-paper';
import { StyleSheet, View } from 'react-native';
import { Button } from 'react-native-paper';

const ElevationComponent = ({navigation}) => (
 
 <View>
  <Surface style={styles.surface} elevation={4}>
     <Text>Elevation 1</Text>
  
    
  </Surface>
  
  <Button
         
          
          style={{ alignSelf: 'flex-end', width: 300, height: 30 ,maginTop:20}}
          onPress={() => navigation.navigate('Helper Text')} // Pass the name of the screen as a string
        >
          Go to Helper Text →
        </Button>
        </View>
);

export default ElevationComponent;

const styles = StyleSheet.create({
  surface: {
    padding: 10,
    height: 80,
    width: 80,
    border: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});