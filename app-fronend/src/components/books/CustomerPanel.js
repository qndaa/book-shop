import React from "react";
import {useForm} from "react-hook-form";
import api from "../../apis/api";

const CustomerPanel = (props) => {

    const {register, handleSubmit, formState: {errors}} = useForm({
        defaultValues: {
            quantity: 1
        }
    });

    const submit = (data) => {
        api.post('/order/add', null).then(response => {
            console.log(response);
        })
    }

    return (
        <div className={`col-12 mt-5 border grayborder-dark rounded-3 p-3`}>
            <form className="user " onSubmit={handleSubmit(submit)}>
                <div className="form-group row">
                    <div className="col-sm-12 mb-3 mb-sm-0">
                        <label className={`ml-3 h5`}>Quantity: </label>

                        <input type="number"
                               className={`form-control form-control-user ${errors.quantity ? 'is-invalid' : ''}`}
                               id="quantity"
                               placeholder="Quantity"
                               {...register('quantity', {
                                   required: "Quantity is a required!",
                                   min: {value: 1, message: "Min is 1."}
                               })}/>
                        {errors.quantity &&
                        <div className="invalid-feedback ml-3">{errors.quantity.message}</div>}
                    </div>

                </div>

                <div className={`d-flex justify-content-center`}>
                    <button className={`btn btn-success btn-user`} type={`submit`}>
                        Add To Card
                    </button>

                </div>



            </form>
        </div>
    )
}

export default CustomerPanel;
