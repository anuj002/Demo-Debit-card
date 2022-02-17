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

function Card({ isCardNoHide }) {

    return (
        <View style={Styles.container}>
            <View style={{ flexDirection: 'row', marginBottom: 24, alignItems: 'center', justifyContent: 'flex-end' }}>
                <Image style={{ width: 25, height: 25, tintColor: Colors.WHITE }}
                    source={require('./../assets/insight.png')} />
                <Text style={Styles.logoText}>aspire</Text>
            </View>

            <Text style={Styles.headText}>Mark Henry</Text>

            {!isCardNoHide ?
                <View style={{ flexDirection: 'row', marginTop: 24, alignItems: 'center' }}>
                    <Text style={Styles.cardNoText}>5647</Text>
                    <Text style={Styles.cardNoText}>3411</Text>
                    <Text style={Styles.cardNoText}>2413</Text>
                    <Text style={Styles.cardNoText}>2020</Text>
                </View>
                :
                <View style={{ flexDirection: 'row', marginTop: 24, alignItems: 'center' }}>
                    <Text style={Styles.cardNoText}>****</Text>
                    <Text style={Styles.cardNoText}>****</Text>
                    <Text style={Styles.cardNoText}>****</Text>
                    <Text style={Styles.cardNoText}>****</Text>
                </View>
            }

            <View style={{ flexDirection: 'row', marginTop: 15, alignItems: 'center' }}>
                <Text style={Styles.expiryText}>Thru: 12/20</Text>
                <Text style={Styles.cvvText}>CVV: 456</Text>
            </View>

            <Text style={Styles.visaText}>VISA</Text>
        </View>
    )
}

const Styles = StyleSheet.create({
    container: {
        padding: 24,
        borderRadius: 10,
        backgroundColor: Colors.PRIMARY
    },
    headText: {
        fontSize: 22,
        letterSpacing: 0.53,
        lineHeight: 20,
        fontWeight: 'bold',
        color: Colors.WHITE
    },
    cardNoText: {
        fontSize: 14,
        letterSpacing: 3.4,
        lineHeight: 19,
        marginRight: 24,
        fontWeight: 'bold',
        color: Colors.WHITE
    },
    expiryText: {
        fontSize: 13,
        letterSpacing: 1.56,
        lineHeight: 18,
        marginRight: 32,
        fontWeight: 'bold',
        color: Colors.WHITE
    },
    cvvText: {
        fontSize: 13,
        letterSpacing: 1.56,
        lineHeight: 24,
        fontWeight: 'bold',
        color: Colors.WHITE
    },
    visaText: {
        fontSize: 28,
        textAlign: 'right',
        fontWeight: 'bold',
        color: Colors.WHITE
    },
    logoText: {
        fontSize: 20,
        marginLeft: 5,
        color: Colors.WHITE
    }
});

export default Card;
