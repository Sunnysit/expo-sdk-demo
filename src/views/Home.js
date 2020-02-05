import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import HomeNavButton from '../components/HomeNavButton';

const Home = ({navigation}) => {

    return (
        <View style={styles.rootContainer}>
            <HomeNavButton navigation={navigation} screenName="TextToSpeechView">
                Text to Speech
            </HomeNavButton>
            <HomeNavButton navigation={navigation} screenName="VibrationView">
                Vibration
            </HomeNavButton>
            <HomeNavButton navigation={navigation} screenName="QrScannerView">
                QR code Scanner
            </HomeNavButton>
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

export default Home;