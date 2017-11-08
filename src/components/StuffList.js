// imports libraries for making a component
import React, { Component } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import axios from 'axios';
import StuffDetail from './StuffDetail';

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
        return this.state.items.map(stuff =>
            <StuffDetail key={stuff.title} stuff={stuff} />
        );
    }

    render() {
        console.log(this.state);
        return (
            <ScrollView>
                {this.renderItems()}
            </ScrollView>
        );
    }
}

// Styles
// const styles = {

// };

// exporting the component
export default StuffList;