import React from 'react';
import { Text, TouchableOpacity, ActivityIndicator } from 'react-native';

const LoadingComponent = ({ backgroundColor = 'rgba(0, 0, 0, 0.30)', msg = '' }) => {
    return (
        <TouchableOpacity activeOpacity={1} style={{ position: 'absolute', justifyContent: 'center', alignItems: 'center', backgroundColor: backgroundColor, top: 0, bottom: 0, left: 0, right: 0, elevation: 6, shadowColor: '#00000000' }}>
            <ActivityIndicator size="large" color={'orange'} />
            <Text>{msg}</Text>
        </TouchableOpacity>
    )
}

export default LoadingComponent;
