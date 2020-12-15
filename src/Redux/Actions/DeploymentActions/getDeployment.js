import * as actions from '../ActionTypes/ActionTypes';

export const getDeploymentAction = (data) => ({
  type: actions.GET_DEPLOYMENT,
  payload: data,
});
