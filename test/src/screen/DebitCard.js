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
    ScrollView,
    TouchableOpacity
} from 'react-native';
import LoadingComponent from "../components/LoadingComponent"
import { Colors, Fonts, Strings } from "../value";
import Card from "./Card"
import LimitBar from "./LimitBar"

function DebitCard({ navigation }) {
    const isDarkMode = useColorScheme() === 'dark';
    const [isCardNoHide, setIsCardNoHide] = useState(false);
    const [loading, setLoading] = useState(false);
    const [isEnabled, setIsEnabled] = useState(false);
    const [isEnabled2, setIsEnabled2] = useState(false);
    const [weeklyLimit, setWeeklyLimit] = useState(5000);
    const [coverLimit, setCoverLimit] = useState(3450);

    const toggleSwitch = () => {
        setIsEnabled(previousState => !previousState)
        if (!isEnabled) {
            navigation.navigate('spendingLimit', {
                weeklyLimit: onWeeklyLimitChange
            })
        }
    };

    const onWeeklyLimitChange = (data) => {
        // console.log('data==>', data)
        setWeeklyLimit(parseInt(data))
    }

    const toggleSwitch2 = () => setIsEnabled2(previousState => !previousState);

    const onHideCardPress = () => setIsCardNoHide(previousState => !previousState);

    useEffect(() => {

    }, []);

    const getLimitPer = () => {
        let limitPer = ((coverLimit / weeklyLimit) * 100)
        // console.log('limitPer==>', limitPer)
        return limitPer
    }

    return (
        <SafeAreaView style={Styles.container}>
            <StatusBar backgroundColor={Colors.SCREEN_BACKGROUND} />
            <View style={{ flex: 1 }}>
                <View style={{ width: '100%', position: 'absolute', top: 10 }}>
                    <View style={{ paddingHorizontal: 24, marginBottom: 32 }}>
                        <Image style={{ width: 32, height: 32, tintColor: Colors.PRIMARY, alignSelf: 'flex-end' }}
                            source={require('./../assets/insight.png')} />

                        <Text style={Styles.headText}>{Strings.DABIT_CARD}</Text>

                        <Text style={{ fontSize: 14, color: Colors.WHITE }}>Available balance</Text>

                        <View style={{ flexDirection: 'row', marginTop: 10, alignItems: 'center' }}>
                            <View style={{ backgroundColor: Colors.PRIMARY, paddingHorizontal: 12, paddingVertical: 3, marginRight: 10, borderRadius: 4 }}>
                                <Text style={{ fontSize: 12, color: Colors.WHITE, fontWeight: 'bold' }}>S$</Text>
                            </View>
                            <Text style={{ fontSize: 24, color: Colors.WHITE, fontWeight: 'bold' }}>3,000</Text>
                        </View>
                    </View>
                </View>

                <ScrollView contentContainerStyle={{ paddingTop: 250 }} showsVerticalScrollIndicator={false}>
                    <View style={Styles.mainContainer}>

                        <View style={{ flex: 1, marginTop: -100 }}>
                            <TouchableOpacity
                                activeOpacity={0.8}
                                style={{ marginBottom: -20 }}
                                onPress={onHideCardPress}>

                                <View style={Styles.hideCardContainer}>
                                    <Image style={{ width: 16, height: 16 }}
                                        source={require('./../assets/hide.png')} />

                                    <Text style={Styles.hideText}>Hide card number</Text>
                                </View>
                            </TouchableOpacity>

                            <Card
                                isCardNoHide={isCardNoHide}
                            />
                        </View>

                        {isEnabled ?
                            <View style={{ marginTop: 20, backgroundColor: Colors.WHITE }}>
                                <View style={{ flexDirection: 'row', marginBottom: 6, justifyContent: 'space-between' }}>
                                    <Text style={Styles.blackText}>Debit card spending limit</Text>

                                    <View style={{ flexDirection: 'row' }}>
                                        <Text style={Styles.limitText}>${coverLimit}</Text>
                                        <View style={{ width: 1, height: 18, marginHorizontal: 12, backgroundColor: Colors.GRAY_LIGHT }} />
                                        <Text style={Styles.grayText}>${weeklyLimit}</Text>
                                    </View>
                                </View>

                                <LimitBar
                                    fillWidth={getLimitPer()}
                                />
                            </View>
                            : null
                        }

                        <View style={Styles.rowContainer}>
                            <Image style={{ width: 32, height: 32 }}
                                source={require('./../assets/insight.png')} />

                            <View style={{ marginLeft: 12 }}>
                                <Text style={Styles.titleText}>Top-up account</Text>
                                <Text style={Styles.decsText}>Deposit money to your account to use with card</Text>
                            </View>
                        </View>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View style={Styles.rowContainer}>
                                <Image style={{ width: 32, height: 32 }}
                                    source={require('./../assets/limit1.png')} />

                                <View style={{ marginLeft: 12 }}>
                                    <Text style={Styles.titleText}>Weekly spending limit</Text>
                                    <Text style={Styles.decsText}>Your weekly spending limit is S$ 5,000</Text>
                                </View>
                            </View>
                            <Switch
                                trackColor={{ false: Colors.SWITCH_DISABLE, true: Colors.PRIMARY }}
                                thumbColor={Colors.WHITE}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={toggleSwitch}
                                value={isEnabled}
                            />
                        </View>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View style={Styles.rowContainer}>
                                <Image style={{ width: 32, height: 32, }}
                                    source={require('./../assets/freezecard.png')} />

                                <View style={{ marginLeft: 12 }}>
                                    <Text style={Styles.titleText}>Freeze card</Text>
                                    <Text style={Styles.decsText}>Your debit card is currently active</Text>
                                </View>
                            </View>
                            <Switch
                                trackColor={{ false: Colors.SWITCH_DISABLE, true: Colors.PRIMARY }}
                                thumbColor={Colors.WHITE}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={toggleSwitch2}
                                value={isEnabled2}
                            />
                        </View>

                        <View style={Styles.rowContainer}>
                            <Image style={{ width: 32, height: 32 }}
                                source={require('./../assets/newcard.png')} />

                            <View style={{ marginLeft: 12 }}>
                                <Text style={Styles.titleText}>Get a new card</Text>
                                <Text style={Styles.decsText}>This deactivates your current debit card</Text>
                            </View>
                        </View>

                        <View style={Styles.rowContainer}>
                            <Image style={{ width: 32, height: 32 }}
                                source={require('./../assets/deactivatedcards.png')} />

                            <View style={{ marginLeft: 12 }}>
                                <Text style={Styles.titleText}>Deactivated cards</Text>
                                <Text style={Styles.decsText}>Your previously deactivated cards</Text>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
            {/* </View> */}
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
        paddingBottom: 24,
        paddingHorizontal: 24,
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
        backgroundColor: Colors.WHITE
    },
    headText: {
        fontSize: 24,
        lineHeight: 32,
        marginBottom: 24,
        fontWeight: 'bold',
        color: Colors.WHITE
    },
    blackText: {
        fontSize: 13,
        color: Colors.BLACK
    },
    limitText: {
        fontSize: 13,
        fontWeight: 'bold',
        color: Colors.PRIMARY
    },
    grayText: {
        fontSize: 13,
        fontWeight: 'bold',
        color: Colors.GRAY_LIGHT
    },
    rowContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 30
    },
    titleText: {
        fontSize: 14,
        color: Colors.TEXT_COLOR
    },
    decsText: {
        fontSize: 13,
        color: Colors.TEXT_COLOR_40
    },
    hideCardContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'flex-end',
        paddingHorizontal: 16,
        paddingTop: 8,
        paddingBottom: 28,
        borderRadius: 6,
        backgroundColor: Colors.WHITE
    },
    hideText: {
        fontSize: 12,
        marginLeft: 8,
        fontWeight: 'bold',
        color: Colors.PRIMARY
    }
});

export default DebitCard;
