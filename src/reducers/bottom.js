/**
 * Created by PPPPP_leung on 2017/2/23.
 */
import * as TYPES from '../actions/types';

const initialState = {
    status: 'close',
};

export default function bottom(state = initialState, action) {

    switch (action.type) {
        case TYPES.BOTTOM_CLOSE:
            return {
                ...state,
                status: 'close'
            };

        case TYPES.BOTTOM_OPEN:
            return {
                ...state,
                status: 'open'
            };

        default:
            return state;
    }

}