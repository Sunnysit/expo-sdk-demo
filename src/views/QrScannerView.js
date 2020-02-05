import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';



const QrScanner = ({navigation}) => {

    handleOpenCamera = ()=>{
        navigation.navigate('CameraScreen')
    }

    return ( 
        <View style={styles.rootContainer}>
            <Button onPress={handleOpenCamera} title="Activate Camera to Scan"/>
        </View>
     );
}

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        alignItems: "center",
        flexDirection: "column",
        justifyContent: 'center'
    }
})


export default QrScanner;