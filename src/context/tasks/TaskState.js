import React, {useReducer} from 'react';

import TaskContext from './TaskContext';
import TaskReducer from './TaskReducer';
import {CREATE_TASK, DELETE_TASK, UPDATE_STATUS} from '../types';

const TaskState = props => {
  const initialState = {
    alltasks: [],
    loading: false,
  };
  const [state, dispatch] = useReducer(TaskReducer, initialState);

  const postTask = (FormData, token) => {
    fetch('https://test-back.cryptelligence.ai/api/v1/todo', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(FormData),
    })
      .then(response => response.json())
      .then(responseJson => {
        console.log('responseJson: ', responseJson);
        dispatch({
          type: CREATE_TASK,
          payload: responseJson,
        });
      })
      .catch(error => {
        console.log('error::: ', error);
      });
  };

  const deleteTask = (id, token) => {
    fetch(`https://test-back.cryptelligence.ai/api/v1/todo/${id}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(response => response.json())
      .then(responseJson => {
        console.log('responseJson: ', responseJson);
        dispatch({
          type: DELETE_TASK,
          payload: id,
        });
      })
      .catch(error => {
        console.log('error::: ', error);
      });
  };
  const putTask = (id, st, token) => {
    console.log('status: ', st);
    console.log('id: ', id);

    fetch(`https://test-back.cryptelligence.ai/api/v1/todo/status/${id}`, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(st),
    })
      .then(response => response.json())
      .then(responseJson => {
        console.log('responseJson: ', responseJson);
        dispatch({
          type: UPDATE_STATUS,
          payload: responseJson,
        });
      })
      .catch(error => {
        console.log('error::: ', error);
      });
  };

  return (
    <TaskContext.Provider
      value={{
        alltasks: state.alltasks,
        postTask,
        deleteTask,
        putTask,
      }}>
      {props.children}
    </TaskContext.Provider>
  );
};

export default TaskState;
