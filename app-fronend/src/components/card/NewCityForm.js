import React from "react";
import {useForm} from "react-hook-form";
import {createCity} from "../../actions";
import {toast} from "react-toastify";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import {useDispatch} from "react-redux";

const NewCityForm = () => {

    const {register, handleSubmit, reset, formState: {errors}} = useForm();
    const dispatch = useDispatch();

    const submit = (data) => {
        dispatch(createCity({name: data.name, zipCode: data.zipCode})).then(() => {
            toast.success("New city added!");
            reset();
        }).catch(error => {
            toast.error("Name or post code already exists!");
        });
    }

    return(
        <form onSubmit={handleSubmit(submit)}>
            <div className="form-group row">

                <div className="col-sm-6">

                    <label className={`ml-3`} htmlFor={`categories`}>New city:</label>
                    <input type="name"
                           className={`form-control form-control-user ${errors.name ? 'is-invalid' : ''}`}
                           id="name"
                           placeholder="Name"
                           {...register('name', {required: 'Last name is required!'})}>


                    </input>
                    {errors.name && <div className="invalid-feedback ml-3">{errors.name.message}</div>}


                </div>

                <div className="col-sm-6">
                    <label className={`ml-3`} htmlFor={`categories`}>Post code:</label>
                    <input type="name"
                           className={`form-control form-control-user ${errors.zipCode ? 'is-invalid' : ''}`}
                           id="zipCode"
                           placeholder="Code"
                           {...register('zipCode', {required: 'Post code is required!'})}>

                    </input>
                    {errors.zipCode && <div className="invalid-feedback ml-3">{errors.zipCode.message}</div>}

                </div>
                <div className={`d-flex justify-content-center`}>
                    <button  type={`submit`}
                            className="btn btn-primary mt-1 w-100">
                        <FontAwesomeIcon icon={faPlus}/>
                    </button>
                </div>

            </div>

            <hr />
        </form>


    );
}

export default NewCityForm;
