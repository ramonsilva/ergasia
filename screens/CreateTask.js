import React from 'react'
import {
  Picker,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
} from 'react-native';

export default class CreateTask extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Create Task',
      headerRight: <Button
        title="Done"
        onPress={ () => {
        const { params } = navigation.state;
        console.log(navigation);
        if (params && params.saveTask) { params.saveTask() } } }
      />,
    };
  };

  constructor() {
    super();
    this.state = {
      frequency: 'weeks',
    };
  }

  componentDidMount () {
    this.props.navigation.setParams({ saveTask: this.save })
  }

  save() {
    console.log('save');
    console.log(this);
  }

  changeFrequency(itemValue, itemIndex) {
    this.setState({ frequency: itemValue });
  }

  render() {
    const backgroundColor = '#222';
    const appbarElevation = 4;
    const borderBottomWidth = Platform.OS === 'ios' ? StyleSheet.hairlineWidth : 0;
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.taskTitle}
          autoCapitalize='sentences'
          autoFocues={true}
          underlineColorAndroid='#3F51B5'
          selectionColor='#3F51B5'
          placeholder='Task title'
        />
        <View style={styles.frequency}>
          <Text>Every</Text>
          <TextInput
            style={styles.frequencyNumber}
            underlineColorAndroid='#3F51B5'
            selectionColor='#3F51B5'
            defaultValue='1'
            keyboardType = 'numeric'
          />
          <Picker
            selectedValue={this.state.frequency}
            onValueChange={ this.changeFrequency.bind(this) }
            style={styles.picker}
          >
            <Picker.Item label="Hours" value="hours" />
            <Picker.Item label="Weeks" value="weeks" />
            <Picker.Item label="Days" value="days" />
            <Picker.Item label="Months" value="months" />
            <Picker.Item label="Years" value="years" />
          </Picker>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 10,
  },
  taskTitle: {
    height: 80,
    padding: 10,
  },
  frequency: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  frequencyNumber: {
    width: 35,
    height: 60,
    margin: 10,
  },
  picker: {
    width: 150,
  },
});
