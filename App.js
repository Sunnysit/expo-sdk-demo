import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import VibrationView from './src/views/VibrationView';
import TextToSpeech from './src/components/TextToSpeech';

export default function App() {
  return (
    <View style={styles.container}>
        <VibrationView />
        <TextToSpeech />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
