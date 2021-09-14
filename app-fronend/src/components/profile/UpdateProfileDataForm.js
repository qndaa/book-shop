import React from "react";
import {useForm} from "react-hook-form";
import {updateAdministrator, updateCustomer} from "../../actions";
import {useDispatch} from "react-redux";
import {toast} from "react-toastify";

const UpdateProfileDataForm = (props) => {

    const dispatch = useDispatch();

    const {register, handleSubmit, formState: {errors}} = useForm({
        defaultValues: {
            firstName: props.profile.firstName,
            lastName: props.profile.lastName,
            email: props.profile.email,
            username: props.profile.username,
            gender: props.profile.gender,
            phoneNumber: props.profile.phoneNumber,
            dateOfBirth: props.profile.dateOfBirth
        }
    });

    const submit = (data) => {
        if (props.profile.typeOfUser === 'ADMINISTRATOR') {
            dispatch(updateAdministrator(data)).then(
                () => {
                    toast.success("Data saved!");
                }
            ).catch(
                () => {
                    toast.error("ERROR!");

                }
            );
        } else if (props.profile.typeOfUser === 'CUSTOMER') {
            dispatch(updateCustomer(data)).then(
                () => {
                    toast.success("Data saved!");
                }
            ).catch(
                () => {
                    toast.error("ERROR!");

                }
            );
        }
    }

    const renderCustomerFields = () => {
        if (props.profile.typeOfUser === 'CUSTOMER') {
            return (
                <React.Fragment>
                    <div className="form-group row">
                        <div className="col-sm-6 mb-3 mb-sm-0">
                            <label className={`ml-3`} htmlFor={`dateOfBirth`}>Date of birth:</label>
                            <input type="date"
                                   className={`form-control form-control-user ${errors.dateOfBirth ? 'is-invalid' : ''}`}
                                   id="dateOfBirth"
                                   placeholder="First Name"
                                   {...register('dateOfBirth')}/>
                            {errors.dateOfBirth &&
                            <div className="invalid-feedback ml-3">{errors.dateOfBirth.message}</div>}
                        </div>

                        <div className="col-sm-6 mb-3 mb-sm-0">
                            <label className={`ml-3`} htmlFor={`phoneNumber`}>Phone number:</label>
                            <input type="text"
                                   className={`form-control form-control-user`}
                                   id="phoneNumber"
                                   placeholder="Phone Number"
                                   {...register('phoneNumber', {minLength: {value: 8, message: "Too short!"}})}/>
                            {errors.phoneNumber &&
                            <div className="invalid-feedback ml-3">{errors.phoneNumber.message}</div>}
                        </div>

                    </div>
                    <div className="form-group row">
                        <div className="col-sm-12 ">
                            <label className={`ml-3`} htmlFor={`lastName`}>Gender:</label>

                            <div className="form-check form-row align-items-center">
                                <div className={`row ml-2`}>
                                    <div className="col-6 ">
                                        <input className="form-check-input " type="radio" name="gridRadios" id="gridRadios1"
                                               value="MALE"
                                               {...register("gender")}

                                        />
                                        <label className="form-check-label" htmlFor="gridRadios1">
                                            Male
                                        </label>
                                    </div>

                                    <div className="col-6 ">
                                        <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios2"
                                               value="FEMALE"
                                               {...register("gender")}
                                        />
                                        <label className="form-check-label" htmlFor="gridRadios2">
                                            Female
                                        </label>

                                    </div>

                                </div>

                            </div>
                        </div>

                    </div>


                </React.Fragment>

            );
        } else {
            return null;
        }


    }


    const renderEmail = () => {
        if(props.profile.typeOfUser === 'CUSTOMER') {
            return (
                <div className="col-sm-6 mb-3 mb-sm-0">
                    <label className={`ml-3`} htmlFor={`email`}>Email:</label>

                    <input type="email" className={`form-control form-control-user ${errors.email ? 'is-invalid' : ''}`}
                           id="email"
                           placeholder="Email Address"
                           {...register('email', {required: 'Email is required!'})}/>
                    {errors.email && <div className="invalid-feedback ml-3">{errors.email.message}</div>}
                </div>
            )
        }
    }


    return (
        <form className="user mt-4" onSubmit={handleSubmit(submit)}>
            <div className="form-group row">
                <div className="col-sm-6 mb-3 mb-sm-0">
                    <label className={`ml-3`} htmlFor={`firstName`}>First name:</label>
                    <input type="text"
                           className={`form-control form-control-user ${errors.firstName ? 'is-invalid' : ''}`}
                           id="firstName"
                           placeholder="First Name"
                           {...register('firstName', {required: 'First name is required!'})}/>
                    {errors.firstName && <div className="invalid-feedback ml-3">{errors.firstName.message}</div>}
                </div>
                <div className="col-sm-6">
                    <label className={`ml-3`} htmlFor={`lastName`}>Last name:</label>

                    <input type="text"
                           className={`form-control form-control-user ${errors.lastName ? 'is-invalid' : ''}`}
                           id="lastName"
                           placeholder="Last Name"
                           {...register('lastName', {required: 'Last name is required!'})}/>
                    {errors.lastName && <div className="invalid-feedback ml-3">{errors.lastName.message}</div>}
                </div>
            </div>
            <div className="form-group row">
                {renderEmail()}
                <div className="col-sm-6">
                    <label className={`ml-3`} htmlFor={`firstName`}>Username:</label>
                    <input type="username"
                           className={`form-control form-control-user ${errors.username ? 'is-invalid' : ''}`}
                           id="username"
                           placeholder="Username"
                           {...register('username', {disabled: true})}/>
                </div>
            </div>
            {renderCustomerFields()}


            <button className="btn btn-primary btn-user btn-block">
                Update Profile Data
            </button>
            <hr/>
        </form>
    );
}

export default UpdateProfileDataForm;
