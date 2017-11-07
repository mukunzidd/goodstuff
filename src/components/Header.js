// import for making a component
import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

// make a component
const Header = (props) => {
    const { textStyle, viewStyle } = styles;

    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{props.headerText}</Text>
        </View>
    )
};

// Styles
const styles = {
    textStyle: {
        fontSize: 25,
        paddingTop: 25
    },
    viewStyle: {
        padding: 30,
        backgroundColor: '#f8f8f8',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 4,
        borderBottomColor: '#eee',
        // shadowColor: '#eee',
        // shadowOffset: { width: 4, height: 6 },
        // shadowOpacity: 0.3,
        elevation: 2
    }
}

// make the component available to the other partsss of the app
export default Header;

