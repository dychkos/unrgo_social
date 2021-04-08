import React from "react"
import reduxForm from "redux-form/es/reduxForm";
import Field from "redux-form/es/Field";
import {Input} from "../common/FormsControl/FormsControl";
import {requiredField} from "../../utils/validators/index";
import styles from "./../common/FormsControl/FormsControl.module.css"
import {connect} from "react-redux";
import {login} from "../../redux/authReducer";
import {Redirect} from "react-router-dom";

const Login = (props)=>{
    const onSumbit=(formData)=>{
        props.login(formData.login,formData.password,formData.remember);
    };
    if(props.isAuth){
        return <Redirect to={"/profile"}/>
    }
    return(
            <div>
            LOGIN
            <LoginReduxForm onSubmit={onSumbit}/>
        </div>
    );
};

const LoginForm=(props)=> {
    let {handleSubmit}= props;

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field component={Input} validate={[requiredField]} type="text" name={"login"} placeholder={"login"}/>
            </div>
            <div>
                <Field component={Input} validate={[requiredField]} type="password" name={"password"}/>
            </div>
            <div>
                <Field component={Input} type={"checkbox"} name={"remember"}/> remember me
            </div>

            {props.error &&<div className={styles.formSummaryError}>
                {props.error}
            </div>}
            <button>Submit</button>
        </form>
    )
};

let mapStateToProps = (state)=>{
    return{
      isAuth:state.auth.isAuth
    }
};
const LoginReduxForm = reduxForm({
    form:"login"
})(LoginForm);

export default connect(mapStateToProps,{login})(Login);