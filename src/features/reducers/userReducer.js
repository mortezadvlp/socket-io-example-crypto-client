/*{
    username: '',
    avatar: '',
    isLoggedIn: false
}*/

import axios from "axios";
import { apiLoginUser } from "../api";

const initialState = {};

export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case 'log-in':
            return {...state, isLoggedIn: true}

        case 'log-out':
            return {...state, isLoggedIn: false}
    
        default:
            return state;
    }
}
