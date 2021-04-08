import React from "react"
import {connect} from "react-redux";
import {
    follow, setCurrentPage,unfollow,
    toggleIsFollowing, getUserThunkCreator,
    unfollowThunkCreator, followThunkCreator
} from "../../redux/usersReducer";
import Users from "./Users";
import Loader from "../common/Loader";
import {
    getCurrentPage, getFollowingInProgress, getIsFetching, getPageSize, getTotalCount,
    getUser, getUserSuper
} from "../../redux/userSelectors";


class UserAPI extends React.Component {
    constructor(props) {
        super(props);


    }

    componentDidMount() {
         this.props.getUserThunkCreator(this.props.currentPage,this.props.pageSize);
        // this.props.toggleIsFetching(true);
        // UserAPI.getUser(this.props.currentPage,this.props.pageSize).then((response) => {
        //     this.props.toggleIsFetching(false);
        //     this.props.setUsers(response.items);
        //     this.props.setTotalCount(response.totalCount - 10260);
        // })

    }

    onPageChanged = (page) => {
        this.props.getUserThunkCreator(page,this.props.pageSize);

        // this.props.toggleIsFetching(true);
        // this.props.setCurrentPage(page);
        // UserAPI.getUser(page,this.props.pageSize)
        //     .then((response) => {
        //     this.props.toggleIsFetching(false);
        //     this.props.setUsers(response.items);
        // })


    };

    render() {
        return <>
        {this.props.isFetching ? <Loader/>: null}
        <Users totalCount={this.props.totalCount}
               pageSize={this.props.pageSize}
               onPageChanged={this.onPageChanged}
               currentPage={this.props.currentPage}
               users={this.props.users}
               follow={this.props.follow}
               unfollow={this.props.unfollow}
               followingInProgress={this.props.followingInProgress}
               unfollowThunkCreator={this.props.unfollowThunkCreator}
               followThunkCreator={this.props.followThunkCreator}


        />
        </>
    }

}

// let mapStateToProps = (state) => {
//     return {
//         users: state.usersPage.users,
//         totalCount: state.usersPage.totalCount,
//         currentPage: state.usersPage.currentPage,
//         pageSize: state.usersPage.pageSize,
//         isFetching: state.usersPage.isFetching,
//         followingInProgress: state.usersPage.followingInProgress
//     }
// };


let mapStateToProps = (state) => {
    return {
        users: getUserSuper(state),
        totalCount: getTotalCount(state),
        currentPage: getCurrentPage(state),
        pageSize: getPageSize(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
};

// let mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (userID) => {
//             dispatch(followAC(userID));
//         },
//         unfollow: (userID) => {
//             dispatch(unFollowAC(userID));
//         },
//         setUsers: (users) => {
//             dispatch(setUsersAC(users));
//         },
//         setTotalCount: (count) => {
//             dispatch(setTotalCountAC(count));
//         },
//         setCurrentPage: (page) => {
//             dispatch(setCurrentPageAC(page));
//         },
//         toggleIsFetching: (isFetching) => {
//             dispatch(setIsFetchingAC(isFetching))
//         }
//
//
//     }
//
// };

export default connect(mapStateToProps, {
        follow,
        unfollow,
        setCurrentPage,
        toggleIsFollowing,
        getUserThunkCreator,
        unfollowThunkCreator,
        followThunkCreator
    },
)(UserAPI);
