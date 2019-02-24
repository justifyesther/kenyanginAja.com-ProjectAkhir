import axios from 'axios';
import { API_URL_KA } from '../API/apiURL';
import { LOG_ADD } from '../API/apiLINK';
import { 
    ACTIVITY_LOG_SUCCESS,
    ACTIVITY_LOG_ERROR
} from './types';
import moment from 'moment';

export const onActivityLog = ({ username, role, desc }) => {

    return (dispatch) => {
        axios.post(API_URL_KA + LOG_ADD, {
            username, role, desc, datetime: moment(new Date()).format('dddd,DD/MMM/YYYY HH:MM:SS')
        }).then((res) => {
            console.log(res);
            if(res.data.length > 0) {
                dispatch({ type: ACTIVITY_LOG_SUCCESS });
            } else {
                dispatch({ type: ACTIVITY_LOG_ERROR });
            }
        }).catch((err) => {
            console.log(err);
        })
    }

};