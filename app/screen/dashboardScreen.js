import * as React from 'react';
import {View, Text} from 'react-native';

export default function DashboardScreen({navigation}){

    return (
        <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
            <Text 
                onPress={() => navigation.navigate('Dashboard')}
                style={{fontSize: 16, fontWeight: "bold"}}>Dashboard Screen</Text>
        </View>
    )
}