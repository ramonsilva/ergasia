import React from 'react';
import {
  Platform,
  ScrollView,
  StyleSheet,
  StatusBar,
  Text,
  FlatList,
  View,
  TouchableOpacity,
} from 'react-native';
import moment from 'moment';

import ActionButton from 'react-native-action-button';
import Swipeable from 'react-native-swipeable';


export default class TaskList extends React.Component {
  static navigationOptions = {
    title: 'Ergasia',
  };

  constructor(props) {
    super(props);

    this.state = {
      swipeable: null,
    };
  }

  dataList = () => {
    this.state.data = this.state.data || [
      {key: 'Limpar a pia do banheiro',
        previous: moment(Date.now()).calendar(),
        next: moment(Date.now()).calendar()
      },
      {key: 'Limpar o armario da cozinha'},
      {key: 'Lucas'},
      {key: 'Gabriel'},
      {key: 'Ramon'},
    ];

    console.log(this.state.data);
    return this.state.data;
  }

  deleteItem = (item) => {
    this.state.data.splice(item, 1);
    this.setState({data: this.state.data})
  }

  renderItemList = (Item, navigate) => {
    const item = Item.item;
    return (
     <Swipeable
      onLeftActionRelease={() => { this.deleteItem(Item.index)}}
      leftContent={(
        <View
          style={[styles.leftSwipeItem, {backgroundColor: '#D50000'}]}
        >
          <Text>Remove</Text>
        </View>
      )}>
      <TouchableOpacity onPress={() => navigate('EditTask')}>
        <View style={styles.item}>
          <Text style={styles.itemName}>{item.key}</Text>
          <View style={styles.datesItem}>
            <Text style={styles.previousDate}>Last time: {item.previous}</Text>
            <Text style={styles.nextDate}>Next time: {item.next}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </Swipeable>);
  }

  render() {
    const backgroundColor = '#222';
    const appbarElevation = 4;
    const borderBottomWidth = Platform.OS === 'ios' ? StyleSheet.hairlineWidth : 0;
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content"/>
        <FlatList
          data={this.dataList()}
          renderItem={(item) => this.renderItemList(item, navigate)}
        />
        <ActionButton
          buttonColor="rgba(63, 81, 181, 1)"
          onPress={ () => navigate('CreateTask') }
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
  },
  leftSwipeItem: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingRight: 20,
  },
});
