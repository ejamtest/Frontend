import * as actions from '../ActionTypes/ActionTypes';

export const addDeploymentAction = (data) => ({
  type: actions.CREATE_DEPLOYMENT,
  payload: data,
});
