import {combineReducers} from 'redux';
import userReducer from './user';
import mainReducer from './main';
import bottomReducer from './bottom';
import friendSearchReducer from './friendSearch';
// import sideBarReducer from './sideBar';

export default combineReducers({
    userStore: userReducer,
    mainStore: mainReducer,
    bottomStore: bottomReducer,
    friendSearchStore: friendSearchReducer,

    // sideBarStore: sideBarReducer,
});
