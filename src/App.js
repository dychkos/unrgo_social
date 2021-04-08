import React from 'react';
import Login from './components/Login/Login'
import {BrowserRouter as Router, Route, Switch, withRouter} from 'react-router-dom'
import Sidebar from './components/sidebar/Sidebar';
import MessagesContainer from "./components/Messages/MessagesContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/content/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import {connect} from "react-redux";
import {getAuthUser} from "./redux/authReducer";
import {compose} from "redux";
import {initializeApp} from "./redux/appReducer";
import Loader from "./components/common/Loader";


class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp();

    }

    render() {
        if(!this.props.initialized){
            return <Loader/>
        }
        return (
            <Router>
                <div className="wrapper">
                    <HeaderContainer/>
                    <Sidebar/>
                    <div className="content">
                        <Switch>
                            <Route path="/profile/:userId?"
                                   render={( () => <ProfileContainer store={this.props.store}/>)}/>
                            <Route path="/messages"
                                   render={( () => <MessagesContainer store={this.props.store}/> )}/>
                            <Route path="/users"
                                   render={( () => <UsersContainer/> )}/>
                            <Route path="/login"
                                   render={( () => <Login/> )}/>
                        </Switch>
                    </div>
                </div>
            </Router>
        );
    }
}

const mapStateToProps = (state)=>({initialized:state.app.initialized})
export default compose(

    connect(mapStateToProps,{initializeApp}))(App);

