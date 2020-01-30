import React, {useState} from 'react';
import {
    Text,
    View,
    StyleSheet,
    Button,
    TextInput,
    Picker
} from 'react-native';
import * as Speech from 'expo-speech';

const TextToSpeech = () => {

    const [content,
        setContent] = useState("Hello World!");
    const [targetLanguage,
        setTargetLanguage] = useState({name: "English", code: "en-US"})

    const speak = () => {
        const thingToSay = content;
        Speech.speak(thingToSay, {language: targetLanguage.code});
    }

    const languageList = [
        {
            name: "English",
            code: "en-US"
        }, {
            name: "Chinese",
            code: "zh-CN"
        }, {
            name: "French",
            code: "fr-CA"
        }, {
            name: "Spanish",
            code: "es-MX"
        }
      
    ]

    const renderPickerItem =  languageList.map((language,index)=>{

        return (
            <Picker.Item key={index} label={language.name} value={language.code} />
        )
    })
       


    return (
        <View>
            <Picker
                selectedValue={targetLanguage.name}
                style={{
                height: 50,
                width: 100
            }}
                onValueChange={(itemValue) => setTargetLanguage(itemValue)}>
                {renderPickerItem}
            </Picker>
            <TextInput onChangeText={text => setContent(text)} value={content}/>
            <Text>
                {JSON.stringify(targetLanguage)}
            </Text>
            <Button title="Speak" onPress={speak}/>

        </View>
    );
}

export default TextToSpeech;
