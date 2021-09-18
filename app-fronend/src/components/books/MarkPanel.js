import React from "react";
import {useForm} from "react-hook-form";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import {createComment, createMark} from "../../actions";
import {toast} from "react-toastify";
import {useDispatch} from "react-redux";

const MarkPanel = (props) => {

    const {register, handleSubmit, formState: {errors}, reset} = useForm();
    const dispatch = useDispatch();

    const submit = (data) => {
        dispatch(createMark({
            bookId: props.book.bookId,
            value: data.mark
        })).then((response) => {
            toast.success('Mark is written!');
            props.setBook(response);
            reset();
        })
    }

    return (
        <div className={`col-12`}>
            <label className={`ml-3 h5`}>Form for mark: </label>
            <form className="user " onSubmit={handleSubmit(submit)}>
                <div className="form-group row">
                    <div className="col-sm-10 mb-3 mb-sm-0">
                        <input type="number"
                               className={`form-control form-control-user ${errors.mark ? 'is-invalid' : ''}`}
                               id="mark"
                               placeholder="Mark"
                               {...register('mark', {
                                   required: "Mark is a required!",
                                   min: {value: 1, message: "Min value is 1."},
                                   max: {value: 5, message: "Max value is 5."},
                               })}/>
                        {errors.mark &&
                        <div className="invalid-feedback ml-3">{errors.mark.message}</div>}
                    </div>
                    <div className="col-sm-2">
                        <button className={`btn btn-success btn-user`} type={`submit`}>
                            <FontAwesomeIcon icon={faPlus}/>
                        </button>
                    </div>

                </div>

            </form>
        </div>


    );
}

export default MarkPanel;
