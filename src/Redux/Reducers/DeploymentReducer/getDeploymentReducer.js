import {GET_DEPLOYMENT} from '../../Actions/ActionTypes/ActionTypes';

const iState = {
    getDeploymentData: {},
};

export const getDeploymentReducer = (state = iState, action) => {
  switch (action.type) {
    case GET_DEPLOYMENT:
      return {
        ...state,
        getDeploymentData: action.payload,
      };
    default:
      return state;
  }
};
