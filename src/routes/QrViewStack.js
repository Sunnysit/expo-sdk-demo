import {createStackNavigator} from 'react-navigation-stack';

import QrScannerView from '../views/QrScannerView';
import CameraScreen from '../components/QrScanner/CameraScreen';

const QrViewStack = createStackNavigator({
    QrScannerView: {
        screen: QrScannerView
    },
    CameraScreen: {
        screen: CameraScreen
    }
}, {
    mode: 'modal',
    headerMode: 'none'
})

export default QrViewStack;