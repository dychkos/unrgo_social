import {AuthAPI} from "../API/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = "SET-USER-DATA";

const initialState = {

    id: null,
    login: null,
    email: null,
    isAuth:false

};


const authReducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_USER_DATA: {

            return {
                ...state,
                ...action.data

            }
        }

        default:
            return state;
    }
};


export const setAuthUserData = (email,id,login,isAuth) => ({
    type: SET_USER_DATA,
    data:{email,id,login,isAuth}

});
export const getAuthUser = () => {
    return (dispatch) => {
        return AuthAPI.me().then((response) => {
            if(response.data.resultCode===0){
                let {email,id,login}=response.data.data;
                dispatch(setAuthUserData(email,id,login,true));
            }
        })
    }
};

export const login = (email,password,remember) => {
    return (dispatch) => {
        AuthAPI.login(email,password,remember).then((response) => {
            if(response.data.resultCode===0){
                dispatch(getAuthUser());
            }else{
                let message = response.data.messages.length>0?response.data.messages:"Some error";
                dispatch(stopSubmit("login",{_error:message}));
            }
        })
    }
};

export const logout = () => {
    return (dispatch) => {
        AuthAPI.logout().then((response) => {
            if(response.data.resultCode===0){
                dispatch(setAuthUserData(null,null,null,false));
            }
        })
    }
};
export default authReducer;
