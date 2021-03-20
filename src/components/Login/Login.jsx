import React from 'react';
import { LoginReduxForm } from './../ReduxForms/LoginReduxForm';

const Login =()=>{
    const onSubmit=(formData)=>{
        console.log(formData)
    }
    return (
        <div>
            <h1>LOGIN</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    )
}

export default Login;