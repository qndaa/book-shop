import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import {useDispatch} from "react-redux";
import {createCategory} from "../../actions";
import {useForm} from "react-hook-form";
import {toast} from "react-toastify";

const CategoryForm = () => {
    const {register, handleSubmit, reset, formState: {errors}} = useForm();

    const dispatch = useDispatch();

    const submit = (data) => {
       dispatch(createCategory(data)).then(response => {
           reset();
       }).catch(err => {
           console.log(err);
           toast(err.response.data.message);
       });
    }

    return (
        <form onSubmit={handleSubmit(submit)} className="input-group mb-3 pl-2 pr-2">

                <input type="text" className={`form-control ${errors.name ? 'is-invalid': ''}`} placeholder="New category name"
                         {...register('name', {
                    required: 'Name is required!'})}/>
                { errors.name && <div className="invalid-feedback ml-3">{errors.name.message}</div> }

                    <button   className="btn btn-primary" type="submit">
                        <FontAwesomeIcon icon={faPlus} />
                    </button>

        </form>


    );
}

export default CategoryForm;
