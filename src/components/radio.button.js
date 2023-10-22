import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';

const RadioButton = ({navigation}) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[
          styles.radioOption,
          selectedOption === 'Option 1' && styles.selectedOption,
        ]}
        onPress={() => handleOptionSelect('Option 1')}
      >
        <View style={styles.radioCircle}>
          {selectedOption === 'Option 1' && <View style={styles.selectedCircle} />}
        </View>
        <Text style={styles.radioText}>Certainly</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.radioOption,
          selectedOption === 'Option 2' && styles.selectedOption,
        ]}
        onPress={() => handleOptionSelect('Option 2')}
      >
        <View style={styles.radioCircle}>
          {selectedOption === 'Option 2' && <View style={styles.selectedCircle} />}
        </View>
        <Text style={styles.radioText}>Not at all</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.radioOption,
          selectedOption === 'Option 3' && styles.selectedOption,
        ]}
        onPress={() => handleOptionSelect('Option 3')}
      >
        <View style={styles.radioCircle}>
          {selectedOption === 'Option 3' && <View style={styles.selectedCircle} />}
        </View>
        <Text style={styles.radioText}>Possibly</Text>
      </TouchableOpacity>

      <Button         
      style={{ alignSelf: 'flex-end', width: 300, height: 30 ,maginTop:20}}
      onPress={() => navigation.navigate('Scroll View')} // Pass the name of the screen as a string
    >
      Go to Scroll View →
    </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  radioOption: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
  },
  selectedOption: {
    //backgroundColor: '#007AFF', // Customize the selected color
  },
  radioCircle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#007AFF', // Customize the border color
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  selectedCircle: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#007AFF', // Customize the selected circle color
  },
  radioText: {
    fontSize: 16,
    color: 'black',
  },
});

export default RadioButton;