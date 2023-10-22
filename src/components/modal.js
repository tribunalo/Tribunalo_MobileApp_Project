import React, { useState } from "react";
import {View, Text, TouchableOpacity,StyleSheet} from "react-native";
import AwesomeAlert from "react-native-awesome-alerts";
import { Button } from "react-native-paper";


const ModalComponent = ({navigation}) => {

  const [ showAlert, setShowAlert] = useState(false)
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.forButtonDesign} 
      onPress={()=>{setShowAlert(!showAlert)}}>
        <Text style={styles.forTextDesign}>Continue</Text>
      </TouchableOpacity>
      <AwesomeAlert 

      show={showAlert} 

      title="Are you sure you want to Proceed?" 
      titleStyle={{fontSize: 22, color: 'red'}}

      message="Make sure your all answers are reliable"

      showCancelButton={true}
      cancelText="NO"
      cancelButtonStyle={{backgroundColor: 'red', width: 80, alignItems: 'center'}}
      onCancelPressed={() => {
        console.log("cancel pressed")
        setShowAlert(false)
      }}

      showConfirmButton={true}
      confirmText="YES"
      confirmButtonStyle={{backgroundColor: 'green', width: 80, alignItems: 'center'}}
      onConfirmPressed={() => {
        console.log("confirm pressed")
        setShowAlert(false)
      }}

      closeOnTouchOutside={false}
      closeOnHardwareBackPress={false}

      />

      <Button         
      style={{ alignSelf: 'flex-end', width: 300, height: 30 ,maginTop:20}}
      onPress={() => navigation.navigate('Progress Bar')} // Pass the name of the screen as a string
    >
      Go to Progress Bar →
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
    color: 'white',
  },

});

export default ModalComponent