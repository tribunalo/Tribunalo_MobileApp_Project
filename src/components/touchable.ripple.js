import * as React from 'react';
import { View } from 'react-native';
import { Text, TouchableRipple, Button } from 'react-native-paper';

const TouchComponent = ({navigation}) => (
  <View>
  <TouchableRipple
    onPress={() => console.log('Pressed')}
    rippleColor="rgba(0, 0, 0, .32)"
  >
    <Text>Press anywhere</Text>
  </TouchableRipple>
  <Button         
      style={{ alignSelf: 'flex-end', width: 300, height: 30 ,maginTop:20}}
      onPress={() => navigation.navigate('Virtual List')} // Pass the name of the screen as a string
    >
      Go to Virtual List →
    </Button>
  </View>
);

export default TouchComponent;