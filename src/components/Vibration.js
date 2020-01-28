import React from 'react';
import { Text, View, StyleSheet, Button, Vibration } from 'react-native';

//Documentation: https://docs.expo.io/versions/v36.0.0/react-native/vibration/
const Vibration = () => {

    const clickToVibrate = ()=>{
        const PATTERN = [400,1400];
        Vibration.vibrate(PATTERN);
    }

    return ( 
        <View>
            <Button title="Click to Vibrate" onPress={clickToVibrate}/>
        </View>
     );
}
 
export default Vibration;