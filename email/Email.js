import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    TextInput,
    StyleSheet,
    Text,
    View
} from 'react-native';
import ViewPropTypes from '../config/ViewPropTypes';

const re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
class EmailInput extends React.Component {

    constructor() {
        super();
        this.state = {
            isValid: false
        };

        this.validateEmail = this.validateEmail.bind(this);
    }

    validateEmail(email) {
        this.setState({ email: email });
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (re.test(String(email).toLowerCase())) {
            this.setState({ isValid: true });
        } else {
            this.setState({ isValid: false });
        }
    }

    validateProvider(email) {
        if (typeof this.props.provider != 'undefined') {
            var arr = email.split('@');
            if (arr[1] != null) {
                if (this.props.provider != null && arr[1] === this.props.provider) {
                    this.setState({ isValid: true });
                } else {
                    this.setState({ isValid: false });
                }
            } else {
                this.setState({ isValid: false });
            }
        }
    }

    render() {
        const {
            inputStyle,
            errorStyle,
            errorMessage,
            containerStyle,
            provider,
            onChangeText,
            onChange,
            ...attributes
        } = this.props;
        return (
            <View
                style={[styles.container, containerStyle]}
                onChange={this.props.onChange(this.state.isValid)}>
                <TextInput
                    {...attributes}
                    keyboardType={'email-address'}
                    placeholder={attributes.placeholder}
                    underlineColorAndroid="transparent"
                    style={[styles.input, inputStyle]}
                    onChangeText={(text) => {
                        this.validateEmail(text);
                        this.validateProvider(text);
                    }} />
                {!this.state.isValid && <Text style={[styles.error, errorStyle]}>
                    {errorMessage}
                </Text>}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    input: {
        alignSelf: 'center',
        color: '#000',
        fontSize: 15,
        marginLeft: 10,
        height: 40,
        width: '90%',
        backgroundColor: '#fff',
        paddingLeft: 10
    },
    container: {
        width: '90%',
        height: 50
    },
    error: {
        color: '#FF2D00',
        marginTop: 5,
        marginLeft: 20,
        fontSize: 12,
    }
});

EmailInput.propTypes = {
    containerStyle: ViewPropTypes.style,

    inputStyle: Text.propTypes.style,

    errorStyle: Text.propTypes.style,
    errorMessage: PropTypes.string,

    provider: PropTypes.string
};

export default EmailInput;
