import React from "react"
import styles from '../Profile.module.css'
import reduxForm from "redux-form/es/reduxForm";
import Field from "redux-form/es/Field";
import {maxLength, requiredField} from "../../../utils/validators/index";
import {TextArea} from "../../common/FormsControl/FormsControl";


const NewPost = (props) =>{
    let addNewPost = (values)=>{
        props.addPost(values.newPost);
    };
    return(
        <div className={styles.addpost}>
            <h4>Send your new post</h4>
            <AddNewPostFormRedux onSubmit={addNewPost}/>
        </div>);
};

let maxLength200 = maxLength(200);


const AddNewPostForm = (props)=>{
    return <form onSubmit={props.handleSubmit}>
        <Field
            component={TextArea}
            name="newPost"
            validate={[requiredField,maxLength200]}
            placeholder={"Type here.."}
            id="newpost"
            cols="80" rows="5"/>
        <button>ADD</button>
    </form>
};

const AddNewPostFormRedux = reduxForm({form:"newPost"})(AddNewPostForm);

export default NewPost;