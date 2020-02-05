import React, {useState, useEffect} from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';
import {BarCodeScanner} from 'expo-barcode-scanner';

const CameraScreen = ({navigation}) => {

    const [hasPermission,
        setHasPermission] = useState(null);
    const [scanned,
        setScanned] = useState(false);

    useEffect(() => {
        (async() => {
            const {status} = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    const handleBarCodeScanned = ({type, data}) => {
        setScanned(true);
        alert(`Bar code with type ${type} and data ${data} has been scanned!`);
    };

    if (hasPermission === null) {
        return <Text>Requesting for camera permission</Text>;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    return (
        <View style={styles.rootContainer}>
            <Text style={styles.centerText}>Find a QR code to Scan</Text>
            <View style={styles.cameraContainer}>
            <BarCodeScanner
                onBarCodeScanned={scanned
                ? undefined
                : handleBarCodeScanned}
                style={StyleSheet.absoluteFillObject}/> 
                {scanned && 
                <Button title={'Tap to Scan Again'} 
                onPress={() => setScanned(false)}/>}
            </View>
            <Button onPress={()=> navigation.navigate("QrScannerView")} title="Go Back"/>
        </View>
    );
}

const styles = StyleSheet.create({
    rootContainer: {
            flex: 1,
            flexDirection: 'column',
    },
    cameraContainer:{
        width:"100%",
        backgroundColor:"hotpink",
        height:"85%"
    },
    centerText:{
        textAlign:"center",
        fontWeight:"bold",
        margin:10
    }
})


export default CameraScreen;