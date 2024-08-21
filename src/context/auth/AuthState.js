import React, {useReducer} from 'react';

import AuthContext from './AuthContext';
import AuthReducer from './AuthReducer';
import {LOGIN_SUCCESS} from '../types';

const AuthState = props => {
  const initialState = {
    accessToken: '',
    loading: false,
  };
  const [state, dispatch] = useReducer(AuthReducer, initialState);

  //Login User
  const signin = () => {
    console.log('cccdddddds');

    fetch('https://test-back.cryptelligence.ai/api/v1/auth', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(responseJson => {
        console.log('responseJson: ', responseJson);

        dispatch({
          type: LOGIN_SUCCESS,
          payload: responseJson,
        });
      })
      .catch(error => {
        console.log('error::: ', error);

        // dispatch({type: types.LOADING_DETECTOR, payload: false});
      });
  };

  return (
    <AuthContext.Provider
      value={{
        accessToken: state.accessToken,
        signin,
      }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
