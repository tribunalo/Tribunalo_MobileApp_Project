import * as React from 'react';
import { View } from 'react-native';
import { ProgressBar, MD3Colors ,Button} from 'react-native-paper';

const ProgressbarComponent = ({navigation}) => (
  <View style={{alignContent:'center', alignItems:'center'}}>
  <ProgressBar progress={0.6} color={MD3Colors.error50} style={{alignSelf:'center', alignContent:'center', alignItems:'center'}} />
  
  <Button         
      style={{ alignSelf: 'flex-end', width: 300, height: 30 ,maginTop:20}}
      onPress={() => navigation.navigate('Radio Button')} // Pass the name of the screen as a string
    >
      Go to Radio button →
    </Button>
  </View>

  );

export default ProgressbarComponent;