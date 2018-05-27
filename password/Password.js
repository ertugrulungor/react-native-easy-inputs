import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    TextInput,
    StyleSheet,
    Text,
    View
} from 'react-native';
import ViewPropTypes from '../config/ViewPropTypes';
import ProgressBarAnimated from 'react-native-progress-bar-animated';


const m_strUpperCase = "ABCÇDEFGĞHIİJKLMNOÖPQRSŞTUÜVWXYZ";
const m_strLowerCase = "abcçdefgğhıijklmnoöpqrsştuüvwxyz";
const m_strNumber = "0123456789";
const m_strCharacters = "!@#$%^&*?_~"
class PasswordInput extends React.Component {

    constructor() {
        super();
        this.state = {
            score: 0,
            inputWidth: 0
        };

        this.validatePassword = this.validatePassword.bind(this);
    }

    validatePassword(password) {
        // Reset combination count
        var nScore = 0;

        // Password length
        // -- Less than 4 characters
        if (password.length < 5) {
            nScore += 5;
        }
        // -- 5 to 7 characters
        else if (password.length > 4 && password.length < 8) {
            nScore += 10;
        }
        // -- 8 or more
        else if (password.length > 7) {
            nScore += 25;
        }

        // Letters
        var nUpperCount = this.countContain(password, m_strUpperCase);
        var nLowerCount = this.countContain(password, m_strLowerCase);
        var nLowerUpperCount = nUpperCount + nLowerCount;
        // -- Letters are all lower case
        if (nUpperCount == 0 && nLowerCount != 0) {
            nScore += 10;
        }
        // -- Letters are upper case and lower case
        else if (nUpperCount != 0 && nLowerCount != 0) {
            nScore += 20;
        }

        // Numbers
        var nNumberCount = this.countContain(password, m_strNumber);
        // -- 1 number
        if (nNumberCount == 1) {
            nScore += 10;
        }
        // -- 3 or more numbers
        if (nNumberCount >= 3) {
            nScore += 20;
        }

        // Characters
        var nCharacterCount = this.countContain(password, m_strCharacters);
        // -- 1 character
        if (nCharacterCount == 1) {
            nScore += 10;
        }
        // -- More than 1 character
        if (nCharacterCount > 1) {
            nScore += 25;
        }

        // Bonus
        // -- Letters and numbers
        if (nNumberCount != 0 && nLowerUpperCount != 0) {
            nScore += 2;
        }
        // -- Letters, numbers, and characters
        if (nNumberCount != 0 && nLowerUpperCount != 0 && nCharacterCount != 0) {
            nScore += 3;
        }
        // -- Mixed case letters, numbers, and characters
        if (nNumberCount != 0 && nUpperCount != 0 && nLowerCount != 0 && nCharacterCount != 0) {
            nScore += 5;
        }

        
        this.setState({ score: nScore });
        
    }

    // Checks a string for a list of characters
    countContain(password, strCheck) {
        // Declare variables
        var nCount = 0;

        for (i = 0; i < password.length; i++) {
            if (strCheck.indexOf(password.charAt(i)) > -1) {
                nCount++;
            }
        }

        return nCount;
    }

    measureView(event) {
        this.setState({ inputWidth: event.nativeEvent.layout.width });
    }

    render() {
        const {
            inputStyle,
            containerStyle,
            onChangeText,
            onChange,
            ...attributes
        } = this.props;

        return (
            <View
                style={[styles.container, containerStyle]}
                onChange={this.props.onChange(this.state.score)}>
                <TextInput
                    {...attributes}
                    secureTextEntry={true}
                    placeholder={attributes.placeholder}
                    underlineColorAndroid="transparent"
                    onLayout={(event) => this.measureView(event)}
                    style={[styles.input, inputStyle]}
                    onChangeText={(text) => {
                        this.validatePassword(text);
                    }} />
                <View style={styles.progress}>
                    <ProgressBarAnimated
                        width={this.state.inputWidth}
                        value={this.state.score}
                        backgroundColorOnComplete="#6CC644"
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    input: {
        alignSelf: 'center',
        color: '#000',
        fontSize: 15,
        height: 40,
        width: '90%',
        backgroundColor: '#fff',
        paddingLeft: 10,
        marginLeft: 10
    },
    container: {
        width: '90%',
        height: 50
    },
    progress: {
        marginLeft:20,
        marginTop: 5
    },
});

PasswordInput.propTypes = {
    containerStyle: ViewPropTypes.style,

    inputStyle: Text.propTypes.style
};

export default PasswordInput;
