/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useState } from 'react';
import {
    SafeAreaView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    FlatList,
    Image
} from 'react-native';
import { Colors, Fonts, Strings } from "./../value";

function LimitBar({ fillWidth }) {

    console.log('fillWidth,', fillWidth)
    return (
        <View style={Styles.container}>
            <View style={[Styles.fillContainer, { width: `${fillWidth}%` }]}>

            </View>
        </View>
    )
}

const Styles = StyleSheet.create({
    container: {
        height: 18,
        borderRadius: 15,
        backgroundColor: Colors.PRIMARY_10
    },
    fillContainer: {
        flex: 1,
        borderRadius: 15,
        backgroundColor: Colors.PRIMARY
    },
});

export default LimitBar;
