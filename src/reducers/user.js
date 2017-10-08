'use strict';

import * as TYPES from '../actions/types';

const initialState = {
    isLoggedIn: false,
    isRegister: false,
    user: {},
    status: null,
};

export default function user(state=initialState, action){

    switch(action.type){
        case TYPES.LOGGED_DOING:
            return {
                ...state,
                isRegister: false,
                status: 'doing',
            };

        case TYPES.LOGGED_IN:
            return {
                ...state,
                isLoggedIn: true,
                isRegister: false,
                user: action.user,
                status: 'done'
            };

        case TYPES.LOGGED_OUT:
            return {
                ...state,
                isLoggedIn: false,
                isRegister: false,
                user: {},
                status: null
            };
        case TYPES.LOGGED_ERROR:
            return {
                ...state,
                isLoggedIn: false,
                isRegister: false,
                user: {},
                status: null
            }

        case TYPES.REGISTER:
            return {
                ...state,
                isLoggedIn: false,
                isRegister: true,
                user: {},
                status: null
            }
        default:
            return state;
    }

}