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
            case 'building':
                dispatch({'type': TYPES.BUILDING, page: opt});
                break;
            case 'normal':
                dispatch({'type': TYPES.NORMAL, page: opt});
                break;
        }
        return;
    }
}

// export function changeSideBar(type) {
//     return (dispatch) => {
//         switch (type) {
//             case 'normal':
//                 dispatch({'type': TYPES.SIDE_BAR_NORMAL});
//                 break;
//             case 'left':
//                 dispatch({'type': TYPES.SIDE_BAR_LEFT});
//                 break;
//             case 'right':
//                 dispatch({'type': TYPES.SIDE_BAR_RIGHT});
//                 break;
//         }
//         return;
//     }
// }