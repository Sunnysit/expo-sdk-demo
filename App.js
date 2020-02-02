import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Navigator from './src/routes/HomeStack';
import VibrationView from './src/views/VibrationView';
import TextToSpeech from './src/components/TextToSpeech';

export default function App() {
  return (
      <Navigator/>
  );
}


