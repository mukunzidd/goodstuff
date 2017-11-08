// import for making a component
import React from 'react';
import { StyleSheet, View } from 'react-native';

// make a component
const Card = (props) => {
    const {containerStyle}=styles;
    return (
        <View style={containerStyle}>
            {props.children}
        </View>
    )
};

// Styles
const styles = {
    containerStyle:{
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 4},
        shadowOpacity: 0.3,
        shadowRadius: 2,
        elevation: 1,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10,
    }
};

// make the component available to the other partsss of the app
export default Card;

