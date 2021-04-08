import Messages from './Messages'
import {sendMessageActionCreator} from "../../redux/messagesReducer";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


let mapStateToProps= (state)=>{
    return{
        state:state.messagesPage,

    }
};
let mapDispatchToProps = (dispatch) =>{
    return{
        sendMessage:(newMessage)=>{
            dispatch(sendMessageActionCreator(newMessage));
        },
    }
};



export default compose(
    connect(mapStateToProps,mapDispatchToProps),
    withAuthRedirect)
(Messages);
