import { combineReducers } from 'redux';
import {
  createDeploymentReducer,
  deleteDeploymentReducer,
  getDeploymentReducer,
} from '../DeploymentReducer';

/* ------------- Assemble The Reducers ------------- */
const rootReducer = combineReducers({
    createDeploymentReducer,
    deleteDeploymentReducer,
    getDeploymentReducer
});
export default rootReducer;