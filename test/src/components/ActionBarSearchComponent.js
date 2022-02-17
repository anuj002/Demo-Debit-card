import React, { Component } from "react";
import { Platform, View, Image, TouchableOpacity, TextInput } from "react-native";

export default class ActionBarSearchComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isShowCross: false,
            inputText: ''
        }
    }

    static defaultProps = {
        paddingLeft: 8,
        paddingRight: 8,
        paddingTop: (Platform.OS === 'ios')
            ? 23
            : 8,
        paddingBottom: 8,
        width: null,
        flex: 1,
        inputBackgroundColor: '#fff',
        backgroundColor: '#FEF1F4',
        placeholderTextColor: 'rgba(0, 0, 0, 0.54)',
        color: '#000',
        fontSize: 14,
        cancelButtonTextSize: 14,
        cancelColor: '#fff',
        tintColor: 'rgba(0, 0, 0, 0.54)',
        isShowCancel: false,
    };

    onChangeText(text) {
        if (this.props.OnSearchTextChange) {
            this.props.OnSearchTextChange(text);
        }
        if (text.length > 0) {
            this.setState({ isShowCross: true, inputText: text });
        } else {
            this.setState({ isShowCross: false, inputText: text });
        }
    }

    componentDidMount() {
        this.textInput.focus();
    }

    render() {
        return (
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    height: 54,
                    paddingHorizontal: 16,
                    backgroundColor: 'white',
                    position: 'absolute', left: 0, right: 0,
                }}>

                <View
                    style={{
                        width: this.props.width,
                        height: this.props.height,
                        flex: this.props.flex,
                        alignItems: 'center',
                        backgroundColor: this.props.inputBackgroundColor,
                        flexDirection: 'row'
                    }}>
                    <TouchableOpacity
                        activeOpacity={0.8}
                        onPress={this.props.onSearchBackPress}>

                        <Image resizeMode='contain'
                            style={{ width: 24, height: 24 }}
                            source={require('../assets/back.png')} />
                    </TouchableOpacity>

                    <TextInput
                        ref={input => {
                            this.textInput = input
                        }}
                        style={{
                            fontSize: this.props.fontSize,
                            color: this.props.color,
                            flex: 1,
                            width: null,
                            paddingLeft: 20
                        }}
                        returnKeyType='search'
                        underlineColorAndroid={'#00000000'}
                        placeholder={this.props.text}
                        placeholderTextColor={this.props.placeholderTextColor}
                        autoCorrect={false}
                        autoFocus={this.props.autoFocus}
                        onSubmitEditing={() => this.props.onSubmitEditing(this.state.inputText)}
                        onChangeText={(text) => this.onChangeText(text)} />

                    {this.state.isShowCross ?
                        this.getCrossButton()
                        : null
                    }
                </View>
            </View>

        );
    }

    getCrossButton() {
        return (
            <TouchableOpacity
                activeOpacity={0.8}
                style={{ width: 30, height: 30, borderRadius: 15, alignItems: 'center', justifyContent: 'center', backgroundColor: 'orange' }}
                onPress={() => {
                    this.textInput.clear();
                    this.textInput.focus();
                    this.onChangeText('')
                    this.props.onSearchBackPress()
                }}>

                <Image resizeMode='contain'
                    style={{ width: 12, height: 12 }}
                    source={require('../assets/close.png')} />
            </TouchableOpacity>
        );
    }
}
