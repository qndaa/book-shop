import React from "react";
import {useForm} from "react-hook-form";
import api from "../../apis/api";

const LoginForm = () => {
    const {register, handleSubmit, formState: {errors}} = useForm();

    const submit = (data) => {
        api.post('/auth/login', data).then((response) => {
            console.log(response);
        })
    }

    return (
        <form className="user " onSubmit={handleSubmit(submit)}>
            <div className="form-group">
                <input type="text" className={`form-control form-control-user ${errors.email ? 'is-invalid': ''}`}
                       id="email" aria-describedby="emailHelp"
                       placeholder="Enter Email Address..." {...register('email', {
                    required: 'Email is required!',
                    minLength: {value: 8, message: 'Too short email!'}
                })} autoComplete={`false`}/>
                {errors.email && <div className="invalid-feedback ml-3">{errors.email.message}</div>}
            </div>
            <div className="form-group">
                <input type="password" className={`form-control form-control-user ${errors.password ? 'is-invalid': ''}`}
                       id="password" placeholder="Password" {...register('password', {
                    required: 'Password is required!',
                    minLength: {value: 8, message: 'Too short password'}
                })} />
                { errors.password && <div className="invalid-feedback ml-3">{errors.password.message}</div> }
            </div>

            <button className="btn btn-primary btn-user btn-block">
                Login
            </button>
        </form>
    );

}

export default LoginForm;
