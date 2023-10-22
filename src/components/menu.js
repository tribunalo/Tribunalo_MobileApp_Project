import * as React from 'react';
import { View } from 'react-native';
import { Button, Menu, Divider, PaperProvider } from 'react-native-paper';

const MenuComponent = ({navigation}) => {
  const [visible, setVisible] = React.useState(false);

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);

  return (
    <PaperProvider>
      <View
        style={{
          paddingTop: 50,
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
        <Menu
          visible={visible}
          onDismiss={closeMenu}
          anchor={<Button onPress={openMenu}>Drinks Flavor Menu</Button>}>
          <Menu.Item onPress={() => { }} title="Mango" />
          <Divider />
          <Menu.Item onPress={() => { }} title="Grapes" />
          <Divider />
          <Menu.Item onPress={() => { }} title="Orange" />
          <Divider />
          <Menu.Item onPress={() => { }} title="Apple" />
          <Divider />
          <Menu.Item onPress={() => { }} title="Lemon" />
          <Divider />
          <Menu.Item onPress={() => { }} title="Melon" />
          <Divider />
        </Menu>      
      </View> 
      <Button
          style={{ alignSelf: 'flex-end', width: 300, height: 30, maginTop: 100 }}
          onPress={() => navigation.navigate('Modal')} // Pass the name of the screen as a string
        >
          Go to Modal →
        </Button>
    </PaperProvider>
  );
};

export default MenuComponent;