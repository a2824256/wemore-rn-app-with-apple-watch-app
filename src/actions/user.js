'use strict';

import {Alert,AsyncStorage} from 'react-native';

import * as TYPES from './types';
import * as URL from '../configs/urlManage';


// login
export function logIn(opt) {
    return (dispatch) => {
        dispatch({'type': TYPES.LOGGED_DOING});
        let url = URL.LOGIN_URL;
        let formData = new FormData();
        formData.append("acc",opt.acc);
        formData.append("pwd",opt.pwd);
        // Alert.alert(url);
        fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'multipart/form-data',
            },
            body: formData
        })
            .then((response) => response.json())
            .then((responseData) => {
                if (responseData.status) {
                    //TODO
                    //登录成功
                    Alert.alert(responseData.reason);
                    dispatch({'type': TYPES.LOGGED_IN, user: responseData.user_info});
                    return;
                }
                //登录失败
                Alert.alert(responseData.reason);
            }).catch((e) => {
                Alert.alert(e.message);
                dispatch({'type': TYPES.LOGGED_ERROR, error: e});
            });
    }
}

export function goBackToLogin(){
    return (dispatch) => {
        dispatch({'type': TYPES.LOGGED_OUT});
        return;
    }
}

export function regIn(opt) {
    return (dispatch) => {
        let url = URL.REGISTER_URL;
        let formData = new FormData();
        formData.append("acc",opt.acc);
        formData.append("pwd",opt.pwd);
        formData.append("name",opt.name);
        formData.append("team",opt.team);
        // Alert.alert(url);
        fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'multipart/form-data',
            },
            body: formData
        })
            .then((response) => response.json())
            .then((responseData) => {
                if (responseData.status) {
                    //TODO
                    //注册成功
                    Alert.alert(responseData.reason);
                    dispatch({'type': TYPES.LOGGED_OUT});
                    return;
                }
                //注册失败
                Alert.alert(responseData.reason);
            }).catch((e) => {
            Alert.alert(e.message);
        });
    }
}


export function register(){
    return (dispatch) =>{
        dispatch({'type': TYPES.REGISTER});
        return;
    }
}

export function logOut() {
    return (dispatch) => {
        dispatch({'type': TYPES.LOGGED_OUT});
    }
}
