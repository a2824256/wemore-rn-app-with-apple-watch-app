/**
 * Created by PPPPP_leung on 2017/2/23.
 */
import * as TYPES from '../actions/types';

const initialState = {
    content: '',
};

export default function friendSearch(state = initialState, action) {

    switch (action.type) {
        case TYPES.BOTTOM_CLOSE:
            return {
                ...state,
                content: action.content
            };

        case TYPES.BOTTOM_OPEN:
            return {
                ...state,
            };

        default:
            return state;
    }

}