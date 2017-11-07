// imports libraries for making a component
import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import axios from 'axios';

// making the component
class StuffList extends Component {
    // const { } = styles;
    componentWillMount() {
        // alert('componentWillMount mounted!!!');
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            .then(response => console.log(response));
        // debugger;
    }
    render() {
        return (
            <View>
                <Text>Good Shtuff Lister</Text>
            </View>
        );
    }
}

// Styles
// const styles = {

// };

// exporting the component
export default StuffList;