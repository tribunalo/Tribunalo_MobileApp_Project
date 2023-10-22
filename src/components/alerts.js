import React, { useState } from "react";
import {View, Text, TouchableOpacity,StyleSheet} from "react-native";
import AwesomeAlert from "react-native-awesome-alerts";
import { Button } from "react-native-paper";


const AlertComponent = ({navigation}) => {

  const [ showAlert, setShowAlert] = useState(false)
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.forButtonDesign} 
      onPress={()=>{setShowAlert(!showAlert)}}>
        <Text style={styles.forTextDesign}>Click Me</Text>
      </TouchableOpacity>
      <AwesomeAlert 

      show={showAlert} 

      title="Dreams do come true for those who never give up.!" 
      titleStyle={{fontSize: 22}}      
      />

      <Button
      
      style={{ alignSelf:'flex-end' }}
      onPress={() => navigation.navigate('Checkbox')} // Pass the name of the screen as a string
  >
      Go to Checkbox →
  </Button>

    </View>
  )
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: 'center',
    alignContent: 'center',
    justifyContent:'center'
  },

  forButtonDesign: {
    backgroundColor:"#03A9F4",
    margin: 40,
    padding: 10,
    borderRadius: 5,
    width: 120,
    alignItems: 'center',
  },

  forTextDesign: {
    fontSize: 22,
    color: '#FFF',
  },


});

export default AlertComponent;