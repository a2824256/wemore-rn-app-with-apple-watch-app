/**
 * Created by PPPPP_leung on 2017/2/23.
 */
import * as TYPES from '../actions/types';
import {ListView,Alert} from 'react-native';

const initialState = {
    type: 'loading',
    content: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
    }),
};

export default function friendReqList(state = initialState, action) {

    switch (action.type) {
        case TYPES.REQ_LOADING:
            return {
                ...state,
                type: 'loading',
            };

        case TYPES.REQ_LIST:
            let temp = new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2,
            });
            temp = temp.cloneWithRows(action.content.list);
            return {
                ...state,
                type: 'loaded',
                content: temp,
            };

        case TYPES.REQ_NULL:
            return {
                ...state,
                type: 'null',
            };

        default:
            return state;
    }

}