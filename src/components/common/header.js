import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View
} from 'react-native'

export default class Header extends Component {
  render() {
    return (
      <View style={styles.header}>
        <Text>backer</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  header: {
    color: '#000'
  }
})
