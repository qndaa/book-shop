import React from "react";
import {useForm} from "react-hook-form";
import api from "../../apis/api";
import {useHistory} from "react-router-dom";


const LoginForm = () => {
    const {register, handleSubmit, formState: {errors}} = useForm();
    const history = useHistory();

    const submit = (data) => {
        console.log(data);
        const params = new URLSearchParams()
        params.append("username", data.username);
        params.append("password", data.password)

        api.post('/login', params, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
        }).then((response) => {
            console.log(response);
            localStorage.setItem('access_token', response.data.access_token);
            localStorage.setItem('refresh_token', response.data.refresh_token);
            history.push('/');

        }).catch(err => {
            console.log(err.response);
        })
    }

    return (
        <form className="user " onSubmit={handleSubmit(submit)}>
            <div className="form-group">
                <input type="text" className={`form-control form-control-user ${errors.username ? 'is-invalid': ''}`}
                       id="username"
                       placeholder="Enter Username..." {...register('username', {
                    required: 'Username is required!',
                    minLength: {value: 4, message: 'Too short username!'}
                })} autoComplete={`false`}/>
                {errors.username && <div className="invalid-feedback ml-3">{errors.username.message}</div>}
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
