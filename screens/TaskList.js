import React from 'react';
import {
  Platform,
  ScrollView,
  StyleSheet,
  StatusBar,
  Text,
  FlatList,
  View,
} from 'react-native';
import moment from 'moment';

import ActionButton from 'react-native-action-button';

const dataList = () =>
  [
    {key: 'Preto', 
      previous: moment(Date.now()).calendar(),
      next: moment(Date.now()).calendar()
    },
    {key: 'Caio'},
    {key: 'Lucas'},
    {key: 'Gabriel'},
    {key: 'Ramon'},
  ];
const renderItemList = ({item}) => (
  <View style={styles.item}>
    <Text style={styles.itemName}>{item.key}</Text>
    <View style={styles.datesItem}>
      <Text style={styles.previousDate}>{item.previous}</Text>
      <Text style={styles.nextDate}>{item.next}</Text>
    </View>
  </View>)

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
        <FlatList
          data={dataList()}
          renderItem={renderItemList}
        />
        <ActionButton
          buttonColor="rgba(63, 81, 181, 1)"
          onPress={ () => {  navigate('CreateTask') } }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  item: {
    borderBottomColor: '#d6d7da',
    borderBottomWidth: 0.5,
    paddingBottom: 7,
  },
  itemName: {
    padding: 10,
    paddingLeft: 15,
    fontSize: 18,
    height: 44,
  },
  previousDate: {
    fontSize: 12,
    alignSelf: 'flex-start',
    marginLeft: 10,
  },
  nextDate: {
    fontSize: 12,
    alignSelf: 'flex-end',
    marginRight: 10,
  },
  datesItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  }
});
