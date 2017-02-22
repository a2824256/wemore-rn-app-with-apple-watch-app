'use strict';

import {Alert} from 'react-native';

import * as TYPES from './types';
import * as URL from '../configs/urlManage';


// login
export function logIn(opt) {
    return (dispatch) => {
        dispatch({'type': TYPES.LOGGED_DOING});
        let url = URL.LOGIN_URL + '/' + opt.acc + '/' + opt.pwd;
        // Alert.alert(url);
        fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        })
            .then((response) => response.json())
            .then((responseData) => {
                if (responseData.status) {
                    //TODO
                    //登录成功
                    Alert.alert(responseData.info);
                    dispatch({'type': TYPES.LOGGED_IN, user: responseData});
                    return;
                }
                //登录失败
                Alert.alert(responseData.info);
            }).catch((e) => {
                Alert.alert(e.message);
                dispatch({'type': TYPES.LOGGED_ERROR, error: e});
            });
    }
}


// logout
// export function logOut() {
//     return {
//         'type': TYPES.LOGGED_OUT
//     }
// }