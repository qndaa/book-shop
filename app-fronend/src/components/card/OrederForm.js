import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useHistory} from "react-router-dom";
import {useForm} from "react-hook-form";
import {createCity, createOrder, fetchCities, fetchShoppingCart} from "../../actions";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import {toast} from "react-toastify";
import NewCityForm from "./NewCityForm";

const OrderForm = () => {

    const dispatch = useDispatch();
    const history = useHistory();
    const {register, handleSubmit, getValues, setValue, formState: {errors}} = useForm();
    const cities = useSelector(state => state.cities);

    const submit = (data) => {
        console.log(data);
        dispatch(createOrder({
            city: data.city,
            street: data.street,
            number: data.number
        })).then(() => {
            toast.success("Order created!");
            history.push('/orders');
            dispatch(fetchShoppingCart());
        })
    }

    useEffect(() => {
        dispatch(fetchCities())
    }, []);

    if (cities === undefined) {
        return (<div>Loading...</div>);
    }

    const renderCities = () => {
        return Object.values(cities).map(item => {
            return (<option key={item.cityId} value={item.name}>{item.name + ' ' + item.zipCode}</option>);
        })

    }


    return (
        <form className="user mt-4" onSubmit={handleSubmit(submit)}>


            <div className="form-group row">
                <div className="col-sm-8 mb-3 mb-sm-0">
                    <label className={`ml-3`} htmlFor={`firstName`}>Street:</label>
                    <input type="text"
                           className={`form-control form-control-user ${errors.street ? 'is-invalid' : ''}`}
                           id="street"
                           placeholder="Street"
                           {...register('street', {required: 'Street is required!'})}/>
                    {errors.street && <div className="invalid-feedback ml-3">{errors.street.message}</div>}
                </div>
                <div className="col-sm-3">
                    <label className={`ml-3`} htmlFor={`lastName`}>Number:</label>

                    <input type="number"
                           className={`form-control form-control-user ${errors.number ? 'is-invalid' : ''}`}
                           id="number"
                           placeholder="Number"
                           {...register('number', {required: 'Last name is required!'})}/>
                    {errors.number && <div className="invalid-feedback ml-3">{errors.number.message}</div>}
                </div>


            </div>

            <div className="form-group row">
                <div className="col-sm-12">
                    <label className={`ml-3`} htmlFor={`city`}>City:</label>

                    <select
                        className={`form-control form-select mt-2 ${errors.city ? 'is-invalid' : ''}`}
                        id="city"
                        {...register('city', {required: 'City is required!'})}>
                        <option value="">Choose...</option>
                        {renderCities()}
                    </select>
                    {errors.language && <div className="invalid-feedback ml-3">{errors.language.message}</div>}
                </div>
            </div>



            <button type={`submit`} className="btn btn-primary btn-user btn-block">
                Create Order
            </button>
            <hr/>
        </form>


    );
}

export default OrderForm;
