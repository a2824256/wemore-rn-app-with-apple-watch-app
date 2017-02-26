/**
 * Created by PPPPP_leung on 2017/2/26.
 */
import * as TYPES from '../actions/types';

const initialState = {
    status:'normal',
    left: false,
    right: false
};

export default function sideBar(state=initialState, action){

    switch(action.type){
        case TYPES.SIDE_BAR_NORMAL:
            return {
                ...state,
                status:'normal',
                left: false,
                right: false
            };

        case TYPES.SIDE_BAR_LEFT:
            return {
                ...state,
                status:'left',
                left: true,
                right: false
            };

        case TYPES.SIDE_BAR_RIGHT:
            return {
                ...state,
                status:'right',
                left: false,
                right: true
            };

        default:
            return state;
    }

}