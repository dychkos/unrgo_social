import {
    addPost, getUserProfile, getUserStatus, setProfileInfo,
    updateUserStatus
} from "../../redux/profileReducer";
import {connect} from "react-redux";
import * as React from "react";
import Loader from "../common/Loader";
import {withRouter} from "react-router-dom";
import Profile from "./Profile";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

class ProfileContainer extends React.Component{
    constructor(props){
        super(props)
    };
    addPost = (newPostBody)=>{
        this.props.addPost(newPostBody);
    };
    componentDidMount() {
        let userId = this.props.match.params.userId;

        if(!userId){

            userId=this.props.authorizedUserId;
            if(!userId){
                this.props.history.push("/login");

            }
        }
        this.props.getUserProfile(userId);
        this.props.getUserStatus(userId);
    }
    render (){

        if(!this.props.profile){
            return <Loader/>
        }

        return <Profile {...this.props}
                        status={this.props.status}
                        updateStatus={this.props.updateUserStatus} />

    }
}




//let AuthRedirectComponent = withAuthRedirect(ProfileContainer);

let mapStateToProps = (state) => {

    return {
        posts: state.profilePage.posts,
        profile:state.profilePage.profile,
        status:state.profilePage.status,
        authorizedUserId:state.auth.id,
        isAuth:state.auth.isAuth
    }
};


//let WithRouterProfileContainer = withRouter(AuthRedirectComponent);


export default compose(
    connect(mapStateToProps, {
        addPost,
        setProfileInfo,
        getUserProfile,
        getUserStatus,
        updateUserStatus
    }),
    withRouter,
     withAuthRedirect,
)(ProfileContainer);