import styles from './Messages.module.css'
import UserMessage from "./UserMessage/UserMessage";
import Dialog from "./Dialog/Dialog";
import Field from "redux-form/es/Field";
import reduxForm from "redux-form/es/reduxForm";
import {TextArea} from "../common/FormsControl/FormsControl";
import {maxLength, requiredField} from "../../utils/validators/index";


const Messages = (props) => {

    let usersMessageRender = props.state.usersMessage.map(user => <UserMessage key={user.id} name={user.user} id={user.id}/>);
    let messagesRender = props.state.messages.map(message => <Dialog key={message.id} text={message.message}/>);

    let addNewMessage=(values)=>{
        console.log(values.newMessageBody);
        props.sendMessage(values.newMessageBody);
    };

    return (
            <div className={styles.messages}>
                <div className={styles.users}>
                    {usersMessageRender}
                </div>
                <div className={styles.dialogs}>
                    <div>{messagesRender}</div>
                    <AddMessageFormRedux onSubmit={addNewMessage}/>
                </div>
            </div>
        );

};

const maxLentgh5 = maxLength(5);
const AddMessageForm = (props) =>{
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                component={TextArea}
                validate={[requiredField,maxLentgh5]}
                name={"newMessageBody"}
                placeholder="Enter youre message..."/>
            </div>
            <div><button>Send</button></div>
        </form>
    )
};

const AddMessageFormRedux = reduxForm({form:"dialogAddMessageForm"})(AddMessageForm);
export default Messages;
