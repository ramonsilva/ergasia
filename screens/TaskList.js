import React from 'react';
import {
  Platform,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  ToolbarAndroid,
  View,
} from 'react-native';

import ActionButton from 'react-native-action-button';

export default class TaskList extends React.Component {
  static navigationOptions = {
    title: 'Ergasia X',
  };
  render() {
    const backgroundColor = '#222';
    const appbarElevation = 4;
    const borderBottomWidth = Platform.OS === 'ios' ? StyleSheet.hairlineWidth : 0;
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content"/>
        <ActionButton
          buttonColor="rgba(63, 81, 181, 1)"
          onPress={ () => {  navigate('CreateTask') } }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  toolbar: {
    flexDirection: 'row',
    alignItems: 'center',
    height: Platform.OS === 'ios' ? 44 : 56,
    backgroundColor: '#FFC107',
    borderBottomColor: 'rgba(0, 0, 0, 0.1)',
  },
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
});
