import {combineReducers} from 'redux';
import userReducer from './user';
import mainReducer from './main';
import sideBarReducer from './sideBar';

export default combineReducers({
    userStore: userReducer,
    mainStore: mainReducer,
    // sideBarStore: sideBarReducer,
});
