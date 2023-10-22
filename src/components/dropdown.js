import React, { useState } from 'react';
import { View, Text, Picker, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';

const DropdownComponent = ({navigation}) => {
  const [selectedValue, setSelectedValue] = useState('option1');

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Select Language:</Text>
      <View style={styles.dropdownContainer}>
        <Picker
          selectedValue={selectedValue}
          onValueChange={(itemValue) => setSelectedValue(itemValue)}
          style={styles.dropdown}
        >
          <Picker.Item label="English(United States)" value="option1" />
          <Picker.Item label="Spanish" value="option2" />
          <Picker.Item label="Filipino" value="option3" />
          <Picker.Item label="Korean" value="option4" />
          <Picker.Item label="Chinese" value="option5" />
        </Picker>
      </View>
      <Button
         
          
          style={{ alignSelf: 'flex-end', width: 300, height: 30 }}
          onPress={() => navigation.navigate('Elevation')} // Pass the name of the screen as a string
        >
          Go to Elevation →
        </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 10,
  },
  dropdownContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  dropdown: {
    height: 40,
  },
});

export default DropdownComponent;