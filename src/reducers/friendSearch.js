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

export default function friendSearch(state = initialState, action) {

    switch (action.type) {
        case TYPES.FRIEND_SEARCHING:
            return {
                ...state,
                type: 'loading',
            };

        case TYPES.FRIEND_SEARCHED:
            // Alert.alert(action.content.list);
            let temp = new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2,
            });
            temp = temp.cloneWithRows(action.content.list);
            // Alert.alert(temp);
            return {
                ...state,
                type: 'searched',
                content: temp,
            };

        default:
            return state;
    }

}