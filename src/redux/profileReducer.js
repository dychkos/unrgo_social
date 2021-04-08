import {ProfileAPI} from "../API/api";

const ADD_POST = "ADD-POST";
const SET_PROFILE_INFO = "SET_PROFILE_INFO";
const SET_PROFILE_STATUS = "SET_PROFILE_STATUS";


const initialState = {
    posts: [
        {id: 1, message: 'Привет, сегодня я разрабатываю на реакт.'},
        {id: 2, message: 'Выпустить эту соц сеть на продакшн?'},
        {id: 3, message: 'У меня есть канал на youtube'},
        {id: 4, message: 'Наверное мой самый первый пост'},
    ],
    newPostText: "",
    profile: null,
    status: ""

};


const profileReducer = (state = initialState, action) => {
    switch (action.type) {

        case ADD_POST: {
            return {
                ...state,
                posts: [...state.posts, {id: 5, message: action.newPostBody}],
            }
        }

        case SET_PROFILE_INFO: {
            return {
                ...state,
                profile: action.profile
            }
        }
        case SET_PROFILE_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        default:
            return state;
    }
};

export default profileReducer;


export const addPost = (newPostBody) => ({
    type: ADD_POST,
    newPostBody
});
export const setProfileInfo = (profile) => ({
    type: SET_PROFILE_INFO,
    profile: profile
});
export const setStatus = (status) => ({
    type: SET_PROFILE_STATUS,
    status: status
});

export const getUserProfile = (userId) => {
    return (dispatch) => {
        ProfileAPI.getProfile(userId).then(data => dispatch(setProfileInfo(data)));
    }
};

export const getUserStatus = (userId) => {
    return (dispatch) => {
        ProfileAPI.getStatus(userId).then(data => {
            dispatch(setStatus(data))
        });

    }
};
export const updateUserStatus = (status) => {
    return (dispatch) => {
        ProfileAPI.updateStatus(status)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setStatus(status));
                }
            })
    }
};