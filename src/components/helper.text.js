import * as React from 'react';
import { View } from 'react-native';
import { HelperText, TextInput, Button } from 'react-native-paper';

const HelpertextComponent = ({navigation}) => {
  const [text, setText] = React.useState('');

   const onChangeText = text => setText(text);

  const hasErrors = () => {
    return !text.includes('@');
  };

 return (
    <View>
      <TextInput label="Email" keyboardType="email-address" value={text} onChangeText={onChangeText} />
      <HelperText type="error" visible={hasErrors()}>
        Email address is invalid!
      </HelperText>

      <Button
      style={{ alignSelf: 'flex-end', width: 300, height: 30 ,maginTop:20}}
      onPress={() => navigation.navigate('Menu')} // Pass the name of the screen as a string
    >
      Go to Menu →
    </Button>
    </View>
  );
};

export default HelpertextComponent;