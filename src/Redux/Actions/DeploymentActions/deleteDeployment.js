import * as actions from '../ActionTypes/ActionTypes';

export const deleteDeploymentAction = (data) => ({
  type: actions.DELETE_DEPLOYMENT,
  payload: data,
});
