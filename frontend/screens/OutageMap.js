import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const OutageMap = () => {

    const navigation = useNavigation();
    return (
        <View style={{ margin: 10, marginTop: 500 }}>
            <Button onPress={() => navigation.navigate('Delivery')} title='Outage map'></Button>
        </View>
    );

}

export default OutageMap;
