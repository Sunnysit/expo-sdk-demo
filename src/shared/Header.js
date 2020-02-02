import React from 'react';
import {View,Text,StyleSheet} from 'react-native';

const Header = ({title}) => {
    return ( 
        <View>
            <Text>{title}</Text>
        </View>
     );
}
 
export default Header;