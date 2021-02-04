import {rerenderEntireTree} from "../render";

let state = {
    profilePage:{
        posts:[
            {id:1,message:'Привет, сегодня я разрабатываю на реакт.'},
            {id:2,message:'Выпустить эту соц сеть на продакшн?'},
            {id:3,message:'У меня есть канал на youtube'},
            {id:4,message:'Наверное мой самый первый пост'},
    ],
        newPostText:"dychkos"
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

    }
}

export let addPost =(postMessage)=>{
    let newPost ={
        id:5,message:postMessage,
    };
    state.profilePage.posts.push(newPost);
    rerenderEntireTree(state);
}

export let updateNewPostText = (newText)=>{
    state.profilePage.newPostText=newText;
    rerenderEntireTree(state);
}

export default state;





