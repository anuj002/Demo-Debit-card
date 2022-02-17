import React from 'react';
import { Image, View, Text, TouchableOpacity, Platform } from 'react-native';
import { TouchableOpacity as TouchableOpacityIos } from 'react-native-gesture-handler';
import { Colors } from '../value';

const HeaderComponent = ({ values, actions, iconMap, leftIcon }) => {
    return (
        <View style={{ width: '100%', height: 54, flexDirection: 'row', paddingHorizontal: 24, alignItems: 'center', justifyContent: 'space-between', backgroundColor: Colors.SCREEN_BACKGROUND }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                {leftIcon ?
                    Platform.OS == 'android' ?
                        <TouchableOpacity
                            onPress={actions.onLeftPress}
                            style={{ width: 24, height: 24, marginRight: 16 }}>

                            <Image resizeMode='contain'
                                style={{ width: 24, height: 24, tintColor: Colors.WHITE }}
                                source={require('../assets/back.png')} />
                        </TouchableOpacity>
                        :
                        <TouchableOpacityIos
                            onPress={actions.onLeftPress}
                            style={{ width: 24, height: 24, marginRight: 16 }}>

                            <Image resizeMode='contain'
                                style={{ width: 24, height: 24, tintColor: Colors.WHITE }}
                                source={require('../assets/back.png')} />
                        </TouchableOpacityIos>
                    : null
                }

                <View style={{ alignContent: 'center', justifyContent: 'center' }}>
                    <Text style={{ lineHeight: 32, fontSize: 24, color: Colors.WHITE, fontWeight: 'bold' }}>{values.title}</Text>

                    {values.subTitle && values.subTitle != "" ?
                        <Text style={{ lineHeight: 14, fontSize: 12, color: '#000' }}>{values.subTitle}</Text>
                        : null
                    }
                </View>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', alignContent: 'center' }}>
                {iconMap.map((item, index) => {
                    return (
                        Platform.OS == 'android' ?
                            <TouchableOpacity key={index}
                                style={{ marginRight: index == iconMap.length - 1 ? 0 : (item.rightAlign ? item.rightAlign : 20), alignContent: 'center', alignItems: 'center' }}
                                onPress={item.onPress}>

                                {item.image ?
                                    <Image resizeMode={'contain'}
                                        style={{ height: 22, width: 22, tintColor: Colors.PRIMARY }}
                                        source={item.image} />
                                    :
                                    <Text style={{ fontSize: 13, color: '#000', textTransform: 'capitalize' }}>{item.rightText}</Text>}
                            </TouchableOpacity>
                            :
                            <TouchableOpacityIos key={index}
                                disabled={item.disable ? true : false}
                                style={{ marginRight: index == iconMap.length - 1 ? 0 : (item.rightAlign ? item.rightAlign : 20), alignContent: 'center', alignItems: 'center' }}
                                onPress={item.onPress}>

                                {item.image ?
                                    <Image resizeMode={'contain'}
                                        style={{ height: 24, width: 24, tintColor: Colors.PRIMARY }}
                                        source={item.image} />
                                    :
                                    <Text style={{ fontSize: 13, color: '#000', textTransform: 'capitalize' }}>{item.rightText}</Text>}
                            </TouchableOpacityIos>
                    )
                })}
            </View>
        </View>
    )
}

export default HeaderComponent;
