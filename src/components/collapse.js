import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';

const AccordionItem = ({ title, content }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleCollapse} style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        <Text>{isCollapsed ? '+' : '-'}</Text>
      </TouchableOpacity>
      {!isCollapsed && <Text style={styles.content}>{content}</Text>}
    </View>
  );
};

const Accordion = ({navigation}) => {
  return (
    <View style={styles.container}>
      <AccordionItem
        title="Section 1"
        content="Give your best Not only for Yourself but
        For your Parents who also gave their Best in raising you"
      />
      <AccordionItem
        title="Section 2"
        content="You can't bring back what  you've lost, think about
        what you have now"
      />
      <AccordionItem
        title="Section 3"
        content="You might be alone at this moment. But no one is born into this world to be alone"
      />

      <Button
         
          
          style={{ alignSelf: 'flex-end', width: 300, height: 30 }}
          onPress={() => navigation.navigate('Divider')} // Pass the name of the screen as a string
        >
          Go to Divider →
        </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#800080',
    padding: 10,
    marginBottom: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  content: {
    padding: 10,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
  },
});

export default Accordion;