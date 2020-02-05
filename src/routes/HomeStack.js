import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import React from 'react';
import Header from '../shared/Header';
import Home from '../views/Home';
import VibrationView from '../views/VibrationView';
import TextToSpeechView from '../views/TextToSpeechView';
import QrViewStack from '../routes/QrViewStack';



const screens = {
    Home: {
      screen: Home,
      navigationOptions: ({ navigation }) => {
        return {
          headerTitle: () => <Header title='expo sdk demo' navigation={navigation} />
        }
      },
    },
    VibrationView:{
        screen:VibrationView,
        navigationOptions: ({ navigation }) => {
            return {
              headerTitle: () => <Header title='Vibration' navigation={navigation} />
            }
          },
    },
    TextToSpeechView:{
        screen:TextToSpeechView,
        navigationOptions: ({ navigation }) => {
            return {
              headerTitle: () => <Header title='Text to Speech' navigation={navigation} />
            }
          },
    },
    QrScannerView:{
      screen:QrViewStack,
      navigationOptions: ({ navigation }) => {
        return {
          headerTitle: () => <Header title='QR code Scanner' navigation={navigation} />
        }
      },
    }
  };

// home stack navigator screens
const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
      headerTintColor: '#444',
      headerStyle: { backgroundColor: '#eee', height: 60 }
    }
  });
  
export default createAppContainer(HomeStack);
  