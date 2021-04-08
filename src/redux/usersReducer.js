import {UsersAPI} from "../API/api";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_TOTAL_COUNT = "SET_TOTAL_COUNT";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const FOLLOWING_IN_PROGRESS = "FOLLOWING_IN_PROGRESS";

const initialState = {
    users:[],
    totalCount:0,
    pageSize:8,
    currentPage:1,
    isFetching:false,
    followingInProgress:[]
};



const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:

            return{...state,
                users: state.users.map(user=>{
                    if(user.id===action.userID){
                        return {...user,followed:true}
                    }
                    return user;
                }),
            };
         case UNFOLLOW:

            return{...state,
                users: state.users.map(user=>{
                    if(user.id===action.userID){
                        return {...user,followed:false}
                    }
                    return user;
                }),
            };

        case SET_USERS:
            return {...state,users:[...action.users]};

        case SET_CURRENT_PAGE:
            return {...state,currentPage:action.currentPage};

        case SET_TOTAL_COUNT:
            return {...state,totalCount:action.totalCount};
        case TOGGLE_IS_FETCHING:
            return {...state,isFetching:action.isFetching};
        case FOLLOWING_IN_PROGRESS:
            return {...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress,action.userID]
                    :[...state.followingInProgress.filter(id=>id!==action.userID)]}

        default:
            return state;
    }
};

export default usersReducer;

export const follow=(id)=>({
    type:FOLLOW,
    userID:id});
export const unfollow=(id)=>({
    type:UNFOLLOW,
    userID:id
});
export const setUsers=(users)=>({
    type:SET_USERS,
    users
});
export const setTotalCount=(count)=>({
    type:SET_TOTAL_COUNT,
    totalCount:count
});
export const setCurrentPage=(page)=>({
    type:SET_CURRENT_PAGE,
    currentPage:page
});
export const toggleIsFetching=(isFetching)=>({
    type:TOGGLE_IS_FETCHING,
    isFetching,
});
export const toggleIsFollowing=(isFetching,userID)=>({
    type:TOGGLE_IS_FETCHING,
    isFetching,
    userID
});

export const getUserThunkCreator=(currentPage,pageSize)=>{
    return (dispatch)=>{
        dispatch(toggleIsFetching(true));
        UsersAPI.getUser(currentPage,pageSize).then((response) => {
            dispatch(toggleIsFetching(false));
            dispatch(setCurrentPage(currentPage));
            dispatch(setUsers(response.items));
            dispatch(setTotalCount(response.totalCount-10820));
        })
    };
};

export const unfollowThunkCreator=(userId)=>{
    return (dispatch)=>{
        dispatch(toggleIsFollowing(true,userId));
        UsersAPI.unfollow(userId)
            .then((response) => {
                if(response.resultCode===0){
                    dispatch(unfollow(userId));
                }
                dispatch(toggleIsFollowing(false,userId))

            });
    }
};

export const followThunkCreator=(userId)=>{
  return (dispatch)=>{
      dispatch(toggleIsFollowing(true,userId));
      UsersAPI.follow(userId)
          .then((response) => {
              if(response.resultCode===0){
                  dispatch(follow(userId));
              }
              dispatch(toggleIsFollowing(false,userId));


          });
  }
};