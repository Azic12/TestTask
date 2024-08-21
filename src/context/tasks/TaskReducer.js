import {
  LOGIN_SUCCESS,
  LOADING,
  CREATE_TASK,
  DELETE_TASK,
  UPDATE_STATUS,
} from '../types';

const INITIAL_STATE = {
  alltasks: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CREATE_TASK:
      const newTask = [];
      newTask.push(action.payload);
      return {
        ...state,
        alltasks: [...state.alltasks, ...newTask],
      };
    case DELETE_TASK:
      const newArray = state.alltasks.filter(data => data.id != action.payload);

      return {
        ...state,
        alltasks: newArray,
      };
    case UPDATE_STATUS:
      console.log('action.payload: ', action.payload);
      console.log('state.alltasks: ', state.alltasks);
      const newStatus = state.alltasks.filter(
        data => data.id != action.payload?.id,
      );
      console.log('newStatus: ', newStatus);
      newStatus.push(action.payload);
      return {
        ...state,
        alltasks: newStatus,
      };

    default:
      return state;
  }
};
