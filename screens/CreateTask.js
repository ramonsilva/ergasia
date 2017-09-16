import React from 'react'
import {
  Platform,
  StyleSheet,
  View,
} from 'react-native';

export default class CreateTask extends React.Component {
  static navigationOptions = {
    title: 'Create Task',
  };

  render() {
    const backgroundColor = '#222';
    const appbarElevation = 4;
    const borderBottomWidth = Platform.OS === 'ios' ? StyleSheet.hairlineWidth : 0;
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
});
