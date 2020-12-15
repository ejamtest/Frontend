import {DELETE_DEPLOYMENT} from '../../Actions/ActionTypes/ActionTypes';

const iState = {
    deleteDeploymentData: {},
};

export const deleteDeploymentReducer = (state = iState, action) => {
  switch (action.type) {
    case DELETE_DEPLOYMENT:
      return {
        ...state,
        deleteDeploymentData: action.payload,
      };
    default:
      return state;
  }
};
