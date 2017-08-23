/**
 * Created by PPPPP_leung on 2017/2/23.
 */
import * as TYPES from '../actions/types';

const initialState = {
    status: 'game',
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
        case TYPES.BUILDING:
            return{
                ...state,
                status: 'building'
            };
        case TYPES.NORMAL:
            return{
                ...state,
                status: 'normal'
            };
        default:
            return state;
    }

}