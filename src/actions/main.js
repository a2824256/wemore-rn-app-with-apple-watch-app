'use strict';

// import {Alert} from 'react-native';

import * as TYPES from './types';


export function changePage(opt) {
    return (dispatch) => {
        switch (opt) {
            case 'game':
                dispatch({'type': TYPES.MAIN_GAME, page: opt});
                break;
            case 'life':
                dispatch({'type': TYPES.MAIN_LIFE, page: opt});
                break;
            case 'mine':
                dispatch({'type': TYPES.MAIN_MINE, page: opt});
                break;
            case 'world-game':
                dispatch({'type': TYPES.WORLD_GAME, page: opt});
                break;
            case 'sucker':
                dispatch({'type': TYPES.SUCKER, page: opt});
                break;
            case 'userinfo':
                dispatch({'type': TYPES.USERINFO, page: opt});
                break;
            case 'myaccount':
                dispatch({'type': TYPES.MYACCOUNT, page: opt});
                break;
            case 'props':
                dispatch({'type': TYPES.PROPS, page: opt});
                break;
            case 'building':
                dispatch({'type': TYPES.BUILDING, page: opt});
                break;
            case 'mymsg':
                dispatch({'type': TYPES.MY_MSG, page: opt});
                break;
            case 'friend':
                dispatch({'type': TYPES.FRIEND, page: opt});
                break;
            case 'setting':
                dispatch({'type': TYPES.SETTING, page: opt});
                break;
            case 'normal':
                dispatch({'type': TYPES.NORMAL, page: opt});
                break;
            case 'textpage':
                dispatch({'type': TYPES.TEXTPAGE, page: opt});
                break;
        }
        return;
    }
}

export function searchContent(opt) {
    return (dispatch) => {
        dispatch({'type': TYPES.SEARCH, content: opt});
    }
}


export function changeBottom(opt) {
    return (dispatch) => {
        switch (opt) {
            case 'close':
                dispatch({'type': TYPES.BOTTOM_CLOSE, page: opt});
                break;
            case 'open':
                dispatch({'type': TYPES.BOTTOM_OPEN, page: opt});
                break;
        }
        return;
    }
}
