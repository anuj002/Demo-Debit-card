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
    Switch,
    Image,
    TouchableOpacity
} from 'react-native';
import HeaderComponent from "../components/HeaderComponent"
import LoadingComponent from "../components/LoadingComponent"
import { Colors, Fonts, Strings } from "../value";

function SpendingLimit({ navigation, route }) {
    const [loading, setLoading] = useState(false);
    const [value, setValue] = useState(5000);

    useEffect(() => {
    }, []);

    const onItemPress = (value) => {
        setValue(value)
    }

    const onSavePress = () => {
        route.params?.weeklyLimit(value)
        navigation.goBack()
    }

    const onBackPress = () => {
        navigation.goBack()
    }

    return (
        <SafeAreaView style={Styles.container}>
            <StatusBar backgroundColor={Colors.SCREEN_BACKGROUND} />
            <View style={{ flex: 1 }}>
                <HeaderComponent
                    iconMap={[{
                        image: require('../assets/limit.png')
                    }]}
                    leftIcon={true}
                    values={{ title: '' }}
                    actions={{ onLeftPress: onBackPress }}
                />

                <Text style={Styles.headText}>{Strings.SPENDING_LIMIT}</Text>

                <View style={Styles.mainContainer}>
                    <View style={Styles.rowContainer}>
                        <Image style={{ width: 16, height: 16, marginRight: 12 }}
                            source={require('./../assets/limit.png')} />

                        <Text style={Styles.titleText}>Set a weekly debit card spending limit</Text>
                    </View>

                    <View style={{ flexDirection: 'row', paddingVertical: 12, alignItems: 'center', borderBottomColor: Colors.GRAY_LIGHT, borderBottomWidth: 0.8 }}>
                        <View style={{ backgroundColor: Colors.PRIMARY, paddingHorizontal: 12, paddingVertical: 3, marginRight: 10, borderRadius: 4 }}>
                            <Text style={{ fontSize: 12, color: Colors.WHITE, fontWeight: 'bold' }}>S$</Text>
                        </View>
                        <Text style={Styles.boldText}>{value}</Text>
                    </View>

                    <Text style={Styles.decsText}>Here weekly means the last 7 days - not the calendar week</Text>

                    <View style={[Styles.rowContainer, { justifyContent: 'space-between' }]}>
                        <TouchableOpacity
                            activeOpacity={0.8}
                            onPress={() => onItemPress(5000)}>

                            <View style={Styles.itemContainer}>
                                <Text style={Styles.valueText}>S$ 5,000</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity
                            activeOpacity={0.8}
                            onPress={() => onItemPress(10000)}>

                            <View style={Styles.itemContainer}>
                                <Text style={Styles.valueText}>S$ 10,000</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity
                            activeOpacity={0.8}
                            onPress={() => onItemPress(20000)}>

                            <View style={Styles.itemContainer}>
                                <Text style={Styles.valueText}>S$ 20,000</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

            <TouchableOpacity
                activeOpacity={0.8}
                style={{ backgroundColor: Colors.WHITE }}
                onPress={onSavePress}>

                <View style={Styles.buttonContainer}>
                    <Text style={Styles.buttonText}>Save</Text>
                </View>
            </TouchableOpacity>

            {loading ? <LoadingComponent /> : null}
        </SafeAreaView>
    )
}

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.SCREEN_BACKGROUND
    },
    mainContainer: {
        flex: 1,
        marginTop: 20,
        paddingHorizontal: 24,
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
        backgroundColor: Colors.WHITE
    },
    rowContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 32
    },
    headText: {
        fontSize: 24,
        lineHeight: 32,
        marginBottom: 32,
        paddingHorizontal: 24,
        fontWeight: 'bold',
        color: Colors.WHITE
    },
    titleText: {
        fontSize: 14,
        color: Colors.TEXT_COLOR
    },
    decsText: {
        fontSize: 13,
        marginTop: 12,
        color: Colors.TEXT_COLOR_40
    },
    boldText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: Colors.TEXT_COLOR
    },
    itemContainer: {
        paddingVertical: 12,
        paddingHorizontal: 32,
        backgroundColor: Colors.PRIMARY_10
    },
    valueText: {
        fontSize: 12,
        color: Colors.PRIMARY
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: Colors.WHITE
    },
    buttonContainer: {
        width: '75%',
        padding: 17,
        margin: 24,
        borderRadius: 30,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.PRIMARY
    }
});

export default SpendingLimit;
