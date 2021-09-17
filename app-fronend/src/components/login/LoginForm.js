import React from "react";
import {useForm} from "react-hook-form";
import { useHistory } from "react-router-dom";
import {useDispatch} from "react-redux";
import {login, logout} from "../../actions";
import {toast} from "react-toastify";


const LoginForm = () => {
    const {register, handleSubmit, formState: {errors}} = useForm();
    const history = useHistory();
    const dispatch = useDispatch()

    const submit = (data) => {

        dispatch(login(data.username, data.password))
            .then((response) => {
                console.log(response);
                if(response.blocked === "true") {
                    toast.warning("Customer is blocked!")
                    dispatch(logout());
                } else {
                    toast.success("Success login!")
                    history.push('/home');

                }
            }).catch(err => {
                toast.error("Invalid username or password!");
            });

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
