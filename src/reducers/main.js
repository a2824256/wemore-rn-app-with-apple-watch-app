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

        default:
            return state;
    }

}