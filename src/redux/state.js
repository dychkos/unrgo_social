

import profileReducer from "./profileReducer";
import messagesReducer from "./messagesReducer";

let store = {
    _state :{
        profilePage:{
            posts:[
                {id:1,message:'Привет, сегодня я разрабатываю на реакт.'},
                {id:2,message:'Выпустить эту соц сеть на продакшн?'},
                {id:3,message:'У меня есть канал на youtube'},
                {id:4,message:'Наверное мой самый первый пост'},
            ],
            newPostText:""
        },
        messagesPage:{
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

        }
    },
    getState(){
        return this._state;
    },
    subscriber(observer) {

        this._callSubscriber = observer;
    },
    _callSubscriber(){
        console.log('State changed');
    },

    dispatch(action){//{type:'ADD-POST'}

        this._state.profilePage=profileReducer(this._state.profilePage,action);
        this._state.messagesPage=messagesReducer(this._state.messagesPage,action);

        this._callSubscriber(this._state);

    }

};






export default store;
window.store=store;





