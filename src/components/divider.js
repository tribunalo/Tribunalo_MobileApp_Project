import * as React from 'react';
import { View } from 'react-native';
import { Divider, Text, Button } from 'react-native-paper';

const DividerComponent = ({navigation}) => (
  <View>
    <Text>Apple</Text>
    <Divider />
    <Text>Mango</Text>
    <Divider />
    <Text>Grapes</Text>
    <Divider />
    <Text>Strawberry</Text>
    <Divider />
    <Text>Banana</Text>
    <Divider />
    <Text>Guava</Text>
    <Divider />
    <Text>Lanzones</Text>
    <Divider />
    <Text>Lemon</Text>
    <Divider />

    <Button
         
          
          style={{ alignSelf: 'flex-end', width: 300, height: 30 }}
          onPress={() => navigation.navigate('Dropdown')} // Pass the name of the screen as a string
        >
          Go to Dropdown →
        </Button>
  </View>
);

export default DividerComponent;