import React, { useState } from 'react';
import { View, StyleSheet, Text, CheckBox } from 'react-native';
import { Button } from "react-native-paper";

const CheckboxComponent = ({ navigation }) => {
  const [isCheckedBasketball, setIsCheckedBasketball] = useState(false);
  const [isCheckedVolleyball, setIsCheckedVolleyball] = useState(false);
  const [isCheckedBadminton, setIsCheckedBadminton] = useState(false);

  return (
    <View style={styles.container}>

      <Text style={styles.label}>Interests</Text>
      <View style={styles.checkBoxContainer}>
        <View style={styles.checkBoxItem}>
          <CheckBox
            value={isCheckedBasketball}
            onValueChange={() => setIsCheckedBasketball(!isCheckedBasketball)}
          />
          <Text style={styles.checkBoxLabel}>Basketball</Text>
        </View>

        <View style={styles.checkBoxItem}>
          <CheckBox
            value={isCheckedVolleyball}
            onValueChange={() => setIsCheckedVolleyball(!isCheckedVolleyball)}
          />
          <Text style={styles.checkBoxLabel}>Volleyball</Text>
        </View>

        <View style={styles.checkBoxItem}>
          <CheckBox
            value={isCheckedBadminton}
            onValueChange={() => setIsCheckedBadminton(!isCheckedBadminton)}
          />
          <Text style={styles.checkBoxLabel}>Badminton</Text>
        </View>
        
      </View>
      <View>
        <Button
         
          
          style={{ alignSelf: 'flex-end', width: 300, height: 30 }}
          onPress={() => navigation.navigate('Accordion Items')} // Pass the name of the screen as a string
        >
          Go to Accordion Items →
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',

    marginLeft: 20,
  },
  label: {
    fontSize: 30,
    marginBottom: 20,
    fontWeight: 'bold'
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  checkBoxContainer: {
    flexDirection: 'column',
  },
  checkBoxItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkBoxLabel: {
    marginLeft: 5,
    fontSize: 20,
  },
});

export default CheckboxComponent;