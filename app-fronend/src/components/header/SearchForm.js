import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {SEARCH} from "../../actions/types";
import {useHistory} from "react-router-dom";


const  SearchForm = () => {

    const {register, handleSubmit, formState: {errors}, reset} = useForm();
    const dispatch = useDispatch();
    const history = useHistory();

    const submit = (data) => {
        console.log(data.search);
        dispatch({type: SEARCH, payload: data.search})
        reset();
        history.push('/search')
    }

    return (
        <form className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search" onSubmit={handleSubmit(submit)}>
            <div className="input-group">
                <input type="text" className="form-control bg-light border-0 small" placeholder="Search for..."
                       aria-label="Search" aria-describedby="basic-addon2"
                    {...register("search")}
                />
                <div className="input-group-append">
                    <button className="btn btn-primary" type="submit">
                        <FontAwesomeIcon icon={faSearch} />
                    </button>
                </div>
            </div>
        </form>
    );
}

export default SearchForm;
