
import {getAuthUser} from "./authReducer";

const SET_INITIALIZED='SET_INITIALIZED';

let initialState = {
    initialized:false
};

const appReducer = (state = initialState,action)=>{
    switch (action.type){
        case SET_INITIALIZED:{
            return{
                ...state,
                initialized:true

            }
        }
        default:
            return state
    }
};

export const initializedSuccess=()=>{
    return {type:SET_INITIALIZED}
};


export  const initializeApp = ()=> (dispatch)=>{
    dispatch(getAuthUser()).then(()=>{
        dispatch(initializedSuccess());
    });

};

export default appReducer;