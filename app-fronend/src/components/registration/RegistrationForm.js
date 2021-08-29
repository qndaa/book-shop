import {useForm} from "react-hook-form";
import api from "../../apis/api";
import { toast } from "react-toastify";
import {useHistory} from "react-router-dom";


const RegistrationForm = () => {

    const {register, handleSubmit, formState: {errors}, getValues, reset} = useForm();
    const history = useHistory();

    const submit = (data) => {
        api.post('/customer', data).then((response) => {
            if (response.status) {
                toast('Registration success!');
                history.push('/login');
            }
        }).catch(err => {
            toast(err.response.data.message);
        });
    }

    return (
        <form className="user" onSubmit={handleSubmit(submit)}>
            <div className="form-group row">
                <div className="col-sm-6 mb-3 mb-sm-0">
                    <input type="text" className={`form-control form-control-user ${errors.firstName ? 'is-invalid': ''}`}
                           id="firstName"
                           placeholder="First Name"
                           {...register('firstName', {required: 'First name is required!'})}/>
                    { errors.firstName && <div className="invalid-feedback ml-3">{errors.firstName.message}</div> }
                </div>
                <div className="col-sm-6">
                    <input type="text" className={`form-control form-control-user ${errors.lastName ? 'is-invalid': ''}`}
                           id="lastName"
                           placeholder="Last Name"
                           {...register('lastName', {required: 'Last name is required!'})}/>
                    { errors.lastName && <div className="invalid-feedback ml-3">{errors.lastName.message}</div> }
                </div>
            </div>
            <div className="form-group row">
                <div className="col-sm-6 mb-3 mb-sm-0">
                    <input type="email" className={`form-control form-control-user ${errors.email ? 'is-invalid': ''}`}
                           id="email"
                           placeholder="Email Address"
                           {...register('email', {required: 'Email is required!'})}/>
                    { errors.email && <div className="invalid-feedback ml-3">{errors.email.message}</div> }
                </div>
                <div className="col-sm-6">
                    <input type="username" className={`form-control form-control-user ${errors.username ? 'is-invalid': ''}`}
                           id="username"
                           placeholder="Username"
                           {...register('username', {required: 'Username is required!'})}/>
                    { errors.username && <div className="invalid-feedback ml-3">{errors.username.message}</div> }

                </div>
            </div>
            <div className="form-group row">
                <div className="col-sm-6 mb-3 mb-sm-0">
                    <input type="password" className={`form-control form-control-user ${errors.password ? 'is-invalid': ''}`}
                           id="password"
                           placeholder="Password"
                           {...register('password', {required: 'Password is required!', minLength: {value: 8, message: "Too short!"}})}/>
                    { errors.password && <div className="invalid-feedback ml-3">{errors.password.message}</div> }
                </div>
                <div className="col-sm-6">
                    <input type="password" className={`form-control form-control-user ${errors.repeatPassword ? 'is-invalid': ''}`}
                           id="repeatPassword"
                           placeholder="Repeat Password"
                           {...register('repeatPassword', {
                               required: 'Repeat password is required!',
                               validate: {
                                   matchesPreviousPassword: (value) => {
                                       const { password } = getValues();
                                       return password === value || "Passwords should match!";
                                   }
                               }})}/>
                    { errors.repeatPassword && <div className="invalid-feedback ml-3">{errors.repeatPassword.message}</div> }
                </div>
            </div>
            <button className="btn btn-primary btn-user btn-block">
                Register Account
            </button>
            <hr/>
        </form>
    );
}

export default RegistrationForm;
