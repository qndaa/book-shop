import React from "react";
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {updateBook} from "../../actions";
import {toast} from "react-toastify";

const AdminPanel = (props) => {
    const {register, handleSubmit, formState: {errors}, reset} = useForm();
    const dispatch = useDispatch();

    const submit = (data) => {
        dispatch(updateBook({
            id: props.book.bookId,
            quantity: data.quantity,
            price: data.price
        })).then((response) => {
            toast.success("Book info updated!");
            props.setBook(response);
            reset();
        })
    }

    return (
        <div className={`col-12 mt-5 border gray rounded-`}>
            <label className={`ml-3 h5`}>Update book: </label>
            <form className="user " onSubmit={handleSubmit(submit)}>
                <div className="form-group row">
                    <div className="col-sm-12 mb-3 mb-sm-0">
                        <input type="number"
                               className={`form-control form-control-user ${errors.price ? 'is-invalid' : ''}`}
                               id="price"
                               step="0.01"
                               placeholder="New Price"
                               {...register('price', {
                                   required: "Price is a required!"
                               })}/>
                        {errors.price &&
                        <div className="invalid-feedback ml-3">{errors.price.message}</div>}
                    </div>

                </div>

                <div className="form-group row">
                    <div className="col-sm-12 mb-3 mb-sm-0">
                        <input type="number"
                               className={`form-control form-control-user ${errors.quantity ? 'is-invalid' : ''}`}
                               id="quantity"
                               placeholder="New Quantity"
                               {...register('quantity', {
                                   required: "Quantity is a required!"
                               })}/>
                        {errors.quantity &&
                        <div className="invalid-feedback ml-3">{errors.quantity.message}</div>}
                    </div>

                </div>
                <div className={`d-flex justify-content-center`}>
                    <button className={`btn btn-success btn-user`} type={`submit`}>
                        Update
                    </button>

                </div>



            </form>
        </div>

    );
}

export default AdminPanel;
