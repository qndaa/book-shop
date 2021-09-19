import React from "react";
import {useForm} from "react-hook-form";
import {deleteFromShoppingCart, updateBook, updateShoppingCart} from "../../actions";
import {toast} from "react-toastify";
import {useDispatch} from "react-redux";


const UpdateQuantityForm = (props) => {

    const {register, handleSubmit, formState: {errors}, reset} = useForm();
    const dispatch = useDispatch();


    const updateQuantity = (data) => {
        dispatch(updateShoppingCart({
            id: props.item.orderLineId,
            quantity: data.quantity
        })).then(() => {
            toast.success("Book quantity updated!");
            reset();
        })
    }

    const deleteBook = () => {
        dispatch(deleteFromShoppingCart({id: props.item.orderLineId, quantity: 0}));
    }

    return (
        <div>
            <form className="user mt-3" onSubmit={handleSubmit(updateQuantity)}>
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

            <div className={`d-flex justify-content-center mt-3`}>
                <button className={`btn btn-danger btn-user`} onClick={deleteBook}>
                    Delete
                </button>
            </div>
        </div>


    );

}

export default UpdateQuantityForm;
