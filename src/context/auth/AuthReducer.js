import {LOGIN_SUCCESS} from '../types';

export default (state, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      const {accessToken, refreshToken, user} = action.payload;

      console.log('VaccessToken ', accessToken);
      console.log('refreshToken ', refreshToken);
      console.log('user ', user);

      return {
        ...state,
        accessToken,
        refreshToken,
        user,
      };

    default:
      return state;
  }
};
