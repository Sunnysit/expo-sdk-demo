import React from 'react';
import {TouchableOpacity,Text,StyleSheet} from 'react-native';

const HomeNavButton = ({navigation,screenName,children}) => {

    const onPressHandler = ()=>{
        navigation.navigate(screenName);
    }

    return ( 
        <TouchableOpacity onPress={onPressHandler} style={styles.button}>
            <Text style={styles.buttonLabel}>{children}</Text>
        </TouchableOpacity>
     );
}
 
export default HomeNavButton;

const styles = StyleSheet.create({
    button:{
        backgroundColor:'#2BA6FF',
        width:"80%",
        color:"white",
        padding:20,
        marginBottom:10
        
        },
    buttonLabel:{
        color:"white",
        textAlign:"center",
    }
})