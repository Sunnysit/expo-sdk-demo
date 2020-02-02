import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import VibrationComponent from '../components/VibrationComponent';


const VibrationView = () => {
    
    return ( 
        <View style={styles.container}>
            <Text>Touch to Shake</Text>
            <VibrationComponent/>
        </View>
     );
}
 
export default VibrationView;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  