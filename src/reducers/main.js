/**
 * Created by PPPPP_leung on 2017/2/23.
 */
import * as TYPES from '../actions/types';

const initialState = {
    status: 'game',
    content: null
};

export default function mainPage(state=initialState, action){

    switch(action.type){
        case TYPES.MAIN_LIFE:
            return {
                ...state,
                status: 'life'
            };

        case TYPES.MAIN_GAME:
            return {
                ...state,
                status: 'game'
            };

        case TYPES.TEXTPAGE:
            return {
                ...state,
                status: 'textpage'
            };

        case TYPES.MAIN_MINE:
            return {
                ...state,
                status: 'mine'
            };
        case TYPES.WORLD_GAME:
            return {
                ...state,
                status: 'world-game'
            };
        case TYPES.SUCKER:
            return {
                ...state,
                status: 'sucker'
            };
        case TYPES.MYACCOUNT:
            return {
                ...state,
                status: 'myaccount'
            };
        case TYPES.PROPS:
            return {
                ...state,
                status: 'props'
            };
        case TYPES.MY_MSG:
            return {
                ...state,
                status: 'mymsg'
            };
        case TYPES.USERINFO:
            return {
                ...state,
                status: 'userinfo'
            };
        case TYPES.BUILDING:
            return{
                ...state,
                status: 'building'
            };
        case TYPES.FRIEND:
            return{
                ...state,
                status: 'friend'
            };
        case TYPES.NORMAL:
            return{
                ...state,
                status: 'normal'
            };
        case TYPES.SETTING:
            return{
                ...state,
                status: 'setting'
            };
        case TYPES.SEARCH:
            return{
                ...state,
                status: 'search',
                content: action.content,
            };
        case TYPES.OFFICAL:
            return{
                ...state,
                status: 'offical',
                content: action.content,
            };
        default:
            return state;
    }

}