import React from 'react';
import {
  StackNavigator,
} from 'react-navigation';

import { Platform } from 'react-native'

import TaskList from './screens/TaskList';
import CreateTask from './screens/CreateTask';

export default App = StackNavigator(
  {
    TaskList: {
      screen: TaskList,
      headerMode: 'none',
    },
    CreateTask: { screen: CreateTask },
  },
  {
    //initialRouteName: 'CreateTask',
    navigationOptions: {
      headerStyle: {
        height: Platform.OS === 'ios' ? 64 : 79,
        backgroundColor: '#FFC107',
        borderBottomColor: 'rgba(0, 0, 0, 0.1)',
        paddingTop: Platform.OS === 'ios' ? 20 : 25,
      }
    }
  }
);
