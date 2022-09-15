import * as React from 'react';
import {View, Text} from 'react-native';

export default function ChatScreen({navigation}){

    return (
        <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
            <Text 
                onPress={() => navigation.navigate('Chat')}
                style={{fontSize: 16, fontWeight: "bold"}}>Chat Screen</Text>
        </View>
    )
}