import {useForm} from "react-hook-form";
import React from "react";
import {useDispatch} from "react-redux";
import {changeUserPassword} from "../../actions";
import {getProfile} from "../../apis/api";
import {toast} from "react-toastify";
import {useHistory} from "react-router-dom";



const UpdatePasswordForm = () => {
    const {register, handleSubmit, reset, formState: {errors}, getValues} = useForm({
        defaultValues: {
            password: '',
            resetPassword: ''
        }
    });

    const dispatch = useDispatch();
    const history = useHistory();

    const submit = (data) => {
        dispatch(changeUserPassword({
            username: getProfile().sub,
            password: data.password
        })).then(
            () => {
                toast.success("Password updated!");
                reset();
            }
        ).catch(() => {
            toast.error("Error!!!");
            history.push("/forbidden");
        })
    }

    return (
        <form className="user mt-4" autoComplete={`off`} onSubmit={handleSubmit(submit)}>
            <div className="form-group row">
                <label className={`ml-3`} htmlFor={`newPassword`}>New password:</label>
                <div className="col-sm-6 mb-3 mb-sm-0" hidden={true}>
                    <input type={`password`}/>
                </div>
                <div className="col-sm-6 mb-3 mb-sm-0">
                    <input type="password"
                           className={`form-control form-control-user ${errors.password ? 'is-invalid' : ''}`}
                           id="newPassword"
                           placeholder="New password"
                           autoComplete={`off`}
                           {...register('password', {
                               required: 'Password is required!',
                               minLength: {value: 8, message: "Too short!"},

                           })}/>
                    {errors.password && <div className="invalid-feedback ml-3">{errors.password.message}</div>}
                </div>
                <div className="col-sm-6">
                    <input type="password"
                           className={`form-control form-control-user ${errors.repeatPassword ? 'is-invalid' : ''}`}
                           id="repeatPassword"
                           placeholder="Repeat Password"
                           {...register('repeatPassword', {
                               required: 'Repeat password is required!',
                               validate: {
                                   matchesPreviousPassword: (value) => {
                                       const {password} = getValues();
                                       return password === value || "Passwords should match!";
                                   }
                               }
                           })}/>
                    {errors.repeatPassword &&
                    <div className="invalid-feedback ml-3">{errors.repeatPassword.message}</div>}
                </div>
            </div>
            <button type={`submit`} className="btn btn-primary btn-user btn-block">
                Update Password
            </button>
            <hr/>

        </form>


    )
}

export default UpdatePasswordForm;
