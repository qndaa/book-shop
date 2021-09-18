import React from "react";
import {useForm} from "react-hook-form";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import {useDispatch} from "react-redux";
import {createComment} from "../../actions";
import {toast} from "react-toastify";

const CommentPanel = (props) => {

    const {register, handleSubmit, formState: {errors}, reset} = useForm();
    const dispatch = useDispatch();

    const submit = (data) => {
        dispatch(createComment({
            bookId: props.book.bookId,
            content: data.comment
        })).then((response) => {
            toast.success('Comment is written!');
            props.setBook(response);
            reset();
        })
    }

    return (
        <div className={`col-12 `}>
            <label className={`ml-3 h5`}>Form for comment: </label>
            <form className="user " onSubmit={handleSubmit(submit)}>
                <div className="form-group row">
                    <div className="col-sm-10 mb-3 mb-sm-0">
                        <input type="text"
                               className={`form-control form-control-user ${errors.comment ? 'is-invalid' : ''}`}
                               id="comment"
                               placeholder="Comment"
                               {...register('comment', {
                                   required: "Comment is a required!"
                               })}/>
                        {errors.comment &&
                        <div className="invalid-feedback ml-3">{errors.comment.message}</div>}
                    </div>
                    <div className="col-sm-2">
                        <button className={`btn btn-success btn-user`} type={`submit`}>
                            <FontAwesomeIcon icon={faPlus} />
                        </button>
                    </div>

                </div>

            </form>
        </div> );
}

export default CommentPanel;
