import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Main from './src/screens/Main';
import NewItem from './src/screens/NewItem';
import ChangeStatus from './src/screens/ChangeStatus';
import AuthState from './src/context/auth/AuthState';
import Entrypoint from './src/Entrypoint';
import TaskState from './src/context/tasks/TaskState';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <AuthState>
      <TaskState>
        <Entrypoint />
      </TaskState>
    </AuthState>
  );
}

export default App;
