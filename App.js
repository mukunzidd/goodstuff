import React from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './src/components/Header';
import StuffList from './src/components/StuffList';

export default class App extends React.Component {
  render() {
    return (

      // One Top Level Tag
      <View>
        <Header headerText={'goodSTUFF'} />
        <StuffList />
      </View>
    );
  }
}
