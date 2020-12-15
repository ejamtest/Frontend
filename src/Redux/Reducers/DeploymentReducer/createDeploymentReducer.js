import {CREATE_DEPLOYMENT} from '../../Actions/ActionTypes/ActionTypes';

const iState = {
  createDeploymentData: {},
};

export const createDeploymentReducer = (state = iState, action) => {
  console.log("I am in reducer", action)
  switch (action.type) {
    case CREATE_DEPLOYMENT:
      return {
        ...state,
        createDeploymentData: action.payload,
      };
    default:
      return state;
  }
};