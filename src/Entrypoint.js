import React, {useContext, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Main from './screens/Main';
import NewItem from './screens/NewItem';
import ChangeStatus from './screens/ChangeStatus';
import AuthContext from './context/auth/AuthContext';

const Stack = createNativeStackNavigator();

const Entrypoint = () => {
  const authContext = useContext(AuthContext);
  const {signin} = authContext;

  useEffect(() => {
    signin();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="MainScreen"
          component={Main}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="NewItemScreen" component={NewItem} />
        <Stack.Screen name="ChangeStatusScreen" component={ChangeStatus} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Entrypoint;
