import * as React from 'react';
import { View } from 'react-native';
import { Switch,Button } from 'react-native-paper';

const SwitchComp = ({navigation}) => {
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);

  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

  return (
    
    <View>
    <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />

    <Button         
      style={{ alignSelf: 'flex-end', width: 300, height: 30 ,maginTop:20}}
      onPress={() => navigation.navigate('Form')} // Pass the name of the screen as a string
    >
      Go to Text Input →
    </Button>
    </View>
  );
};

export default SwitchComp;