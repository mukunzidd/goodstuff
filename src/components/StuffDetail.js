// imports
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

// Make a component
const StuffDetail = (props) => {
    const { textStyle, artistStyle, viewStyle } = styles;

    return (
        <View style={viewStyle}>
            <Text style={textStyle}>Song: {props.stuff.title}</Text>
            <Text style={artistStyle}>Artist: {props.stuff.artist}</Text>
            <Text>{props.stuff.url}</Text>
            <Text>{props.stuff.thumbnail_image}</Text>
            <Text>{props.stuff.image}</Text>
        </View>
    );
};

// Styles
const styles = {
    viewStyle: {
        margin: 5,
        padding: 10,
        borderWidth: 1,
        borderLeftWidth: 10,
        borderTopLeftRadius: 15,
        borderBottomLeftRadius: 15,      
        // backgroundColor: 'honeydew',
    }, 
    textStyle: {
        color: 'red',
    },
    artistStyle: {
        color: 'green',
    }
};

// Export the component
export default StuffDetail;