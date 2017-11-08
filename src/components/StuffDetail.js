// imports
import React from 'react';
import { StyleSheet, Text, Image } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

// Make a component
const StuffDetail = (props) => {
    const { textStyle, artistStyle, viewStyle } = styles;

    return (
        <Card>
            <CardSection>
                <Image
                    style={{width: 50, height: 50}}
                    source={{uri: props.stuff.thumbnail_image}}
                />
                <Text style={textStyle}>Album Title: {props.stuff.title}</Text>
                <Text style={artistStyle}>Artist: {props.stuff.artist}</Text>
            </CardSection>

            <CardSection>
                <Image
                    style={{width: 340, height: 380}}
                    source={{uri: props.stuff.image}}
                />
            </CardSection>

            <CardSection>
                <Text style={artistStyle}>Url: {props.stuff.url}</Text>
            </CardSection>
        </Card>
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
        elevation: 2,    
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