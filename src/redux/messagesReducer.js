const SEND_MESSAGE="SEND-MESSAGE";


const initialState ={
    messages: [{id: 1, message: 'How are you?'},
        {id: 2, message: 'I am max'},
        {id: 3, message: 'Bezhik?'},
        {id: 4, message: 'Yes'},
        {id: 5, message: 'You`re cool'}],
    usersMessage: [
        {id: 1, user: 'Sergey Dychko'},
        {id: 2, user: 'Olga Buzova'},
        {id: 3, user: 'Sweet Dreams'},
        {id: 4, user: 'Will Smeath'},
        {id: 5, user: 'Steave Jobds'},
        {id: 6, user: 'Valentin Strikalo'},
    ],
    newMessageBody:""

};
const messagesReducer = (state=initialState,action)=>{

    switch (action.type){

        case SEND_MESSAGE:{
            let body = action.newMessage;
            return {...state,
            messages:[...state.messages,{id:6,message:body}]
            };

        }
        default:
            return state;


    }
};

export default  messagesReducer;

export const sendMessageActionCreator=(newMessage)=>({
    type:SEND_MESSAGE,
    newMessage
});
