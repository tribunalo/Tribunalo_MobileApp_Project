import { createStackNavigator } from '@react-navigation/stack';
import {Wow} from './frame';
import TouchComponent from './touchable.ripple';
import ModalComponent from './modal';
import { Component5 } from './toast';
import AlertComponent from './alerts';
import CheckboxComponent from './checkBox';
import DividerComponent from './divider';
import DropdownComponent from './dropdown';
import HelpertextComponent from './helper.text';
import MenuComponent from './menu';
import Textinput from './text.input';
import ProgressbarComponent from './progress.bar';
import RadioButton from './radio.button';
import SegementedbuttonComponent from './segmented.button';
import Sectionlisting from './section.list';
import SearchbarComponent from './search.bar';
import ScrollviewComponent from './scroll.view';
import ElevationComponent from './elevation';
import SnackbarComponent from './snackbar';
import Accordion from './collapse';
import SwitchComp from './switch';
import App from './virtualList';




  
  const forFade = ({ current, next }) => {
    const opacity = Animated.add(
      current.progress,
      next ? next.progress : 0
    ).interpolate({
      inputRange: [0, 1, 2],
      outputRange: [0, 1, 0],
    });
  
    return {
      
    };
  };
  
    const Stack = createStackNavigator();
  
  function Hardernsi() {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={Wow}
          options={{
            headerTitle:"",
            headerTransparent:'transparent',
          }}
        />
        <Stack.Screen
          name="SearchBar"
          component={SearchbarComponent}
          options={{ headerStyleInterpolator: forFade }}
        />
        <Stack.Screen
          name="Accordion Items"
          component={ Accordion }
          options={{ headerStyleInterpolator: forFade }}
        />
        <Stack.Screen
          name="Touchable Ripple"
          component={ TouchComponent }
          options={{ headerStyleInterpolator: forFade }}
        />
        <Stack.Screen
          name="Modal"
          component={ ModalComponent }
          options={{ headerStyleInterpolator: forFade }}
        />
        <Stack.Screen
          name="Toast"
          component={ Component5 }
          options={{ headerStyleInterpolator: forFade }}
        />
        <Stack.Screen
          name="Elevation"
          component={ ElevationComponent }
          options={{ headerStyleInterpolator: forFade }}
        />
        <Stack.Screen
          name="Switch"
          component={ SwitchComp }
          options={{ headerStyleInterpolator: forFade }}
        />
        <Stack.Screen
          name="Segmented Button"
          component={ SegementedbuttonComponent }
          options={{ headerStyleInterpolator: forFade }}
        />
        <Stack.Screen
          name="Section List"
          component={ Sectionlisting }
          options={{ headerStyleInterpolator: forFade }}
        />
        <Stack.Screen
          name="Scroll View"
          component={ ScrollviewComponent }
          options={{ headerStyleInterpolator: forFade }}
        />
        <Stack.Screen
          name="Progress Bar"
          component={ ProgressbarComponent }
          options={{ headerStyleInterpolator: forFade }}
        />
        <Stack.Screen
          name="Menu"
          component={ MenuComponent }
          options={{ headerStyleInterpolator: forFade }}
        />
        <Stack.Screen
          name="Helper Text"
          component={ HelpertextComponent}
          options={{ headerStyleInterpolator: forFade }}
        />
        <Stack.Screen
          name="Dropdown"
          component={ DropdownComponent}
          options={{ headerStyleInterpolator: forFade }}
        />
        <Stack.Screen
          name="Alert"
          component={ AlertComponent}
          options={{ headerStyleInterpolator: forFade }}
        />
        <Stack.Screen
          name="Checkbox"
          component={ CheckboxComponent}
          options={{ headerStyleInterpolator: forFade }}
        />
        <Stack.Screen
          name="Divider"
          component={ DividerComponent}
          options={{ headerStyleInterpolator: forFade }}
        />
        <Stack.Screen
          name="Form"
          component={ Textinput}
          options={{ headerStyleInterpolator: forFade }}
        />
        <Stack.Screen
          name="Radio Button"
          component={ RadioButton}
          options={{ headerStyleInterpolator: forFade }}
        />
        <Stack.Screen
          name="Snack Bar"
          component={ SnackbarComponent}
          options={{ headerStyleInterpolator: forFade }}
        />
        <Stack.Screen
          name="Virtual List"
          component={ App}
          options={{ headerStyleInterpolator: forFade }}
        />

        
        
      </Stack.Navigator>
    );
  }
export const MyHardensi = () => {
  return (
    <Hardernsi />
  );
};