import React from 'react';
import Content from './components/content/Home';
import Header from './components/Header/Header'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Sidebar from './components/sidebar/Sidebar';
import Home from './components/content/Home'
import Messages from './components/Messages/Messages'


function App(props) {

    return (
        <Router>
            <div className="wrapper">
                <Header/>
                <Sidebar/>
                <div className="content">
                    <Switch>

                        <Route path="/" exact render={( () => <Home addPost={props.addPost} updateNewPostText={props.updateNewPostText} posts={props.state.profilePage.posts} newPostText={props.state.profilePage.newPostText}/>)}/>
                        <Route path="/messages" render={( () => <Messages dialogs={props.state.messagesPage}/> )}/>
                    </Switch>


                </div>

            </div>
        </Router>
    );
}

export default App;
