// imports libraries for making a component
import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import axios from 'axios';

// making the component
class StuffList extends Component {
    // const { } = styles;
    state = { items: [] };


    componentWillMount() {
        // alert('componentWillMount mounted!!!');
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            .then(response => this.setState({ items: response.data }));
    }


    // Helper method to render the list of items
    renderItems() {
        return this.state.items.map(item => <Text>{item.title}</Text>);
    }

    render() {
        console.log(this.state);
        return (
            <View>
                {this.renderItems()}
            </View>
        );
    }
}

// Styles
// const styles = {

// };

// exporting the component
export default StuffList;