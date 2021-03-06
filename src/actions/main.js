'use strict';

import {Alert} from 'react-native';

import * as TYPES from './types';
import * as URL from '../configs/urlManage';

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
            case 'add-friends':
                dispatch({'type': TYPES.ADDFRIEND, page: opt});
                break;
            case 'friend-request':
                dispatch({'type': TYPES.FRIEND_REQUEST, page: opt});
                break;
        }
        return;
    }
}

export function searchFriend(name = null) {
    return (dispatch) => {
        dispatch({'type': TYPES.FRIEND_SEARCHING});
        let url = URL.SEARCH_USER_URL;
        let formData = new FormData();
        formData.append("name", name);
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
                    dispatch({'type': TYPES.FRIEND_SEARCHED, content: responseData});
                    return;
                }
                //登录失败
                Alert.alert("加载失败");
            }).catch((e) => {
            Alert.alert(e.message);
        });
    }
}

export function acceptFsRequest(id) {
    return (dispatch) => {
        // dispatch({'type': TYPES.REQ_LOADING});
        let url = URL.ACCEPT_FRIEND_REQUEST;
        let formData = new FormData();
        formData.append("id", id);
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
                    if(responseData.list.length == 0){
                        dispatch({'type': TYPES.REQ_NULL});
                    }else{
                        dispatch({'type': TYPES.REQ_LIST, content: responseData});
                    }
                    return;
                }
                //登录失败
                Alert.alert("加载失败");
            }).catch((e) => {
            Alert.alert(e.message);
        });
    }
}

export function fetchReqData(id) {
    return (dispatch) => {
        dispatch({'type': TYPES.REQ_LOADING});
        let url = URL.FRIEND_REQUEST_LIST
        let formData = new FormData();
        formData.append("id", id);
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
                    if(responseData.list.length == 0){
                        dispatch({'type': TYPES.REQ_NULL});
                    }else{
                        dispatch({'type': TYPES.REQ_LIST, content: responseData});
                    }
                    return;
                }
                //登录失败
                Alert.alert("加载失败");
            }).catch((e) => {
            Alert.alert(e.message);
        });
    }
}

export function searchContent(opt) {
    return (dispatch) => {
        dispatch({'type': TYPES.SEARCH, content: opt});
    }
}

export function openOffical(opt) {
    return (dispatch) => {
        dispatch({'type': TYPES.OFFICAL, content: opt});
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
