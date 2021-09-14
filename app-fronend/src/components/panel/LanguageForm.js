import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {createLanguage, fetchLanguage, updateLanguage} from "../../actions";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import {CREATE_AUTHOR, SELECT_LANGUAGE} from "../../actions/types";
import {useForm} from "react-hook-form";
import {toast} from "react-toastify";

const LanguageForm = () => {


    const dispatch = useDispatch();
    const selectedLanguage = useSelector(state => state.select.language);
    const languages = useSelector(state => state.languages);

    const {register, handleSubmit, reset, setValue, formState: {errors}} = useForm({
        defaultValues: {
            name: (selectedLanguage == null) ? '' : selectedLanguage.name
        }
    });


    useEffect(() => {
        dispatch(fetchLanguage());
    }, []);

    const selectLanguage = (data) => {
        dispatch({
            type: SELECT_LANGUAGE,
            payload: data
        });
        (data == null) ? setValue('name', '') : setValue('name', data.name);

    }

    const renderLanguages = () => {
        return Object.values(languages).map(item => {
            console.log(item);
            return (<button key={item.languageId} className={`nav-link  ${(selectedLanguage !== null && item.languageId === selectedLanguage.languageId) ? 'active' : null}`} id="v-pills-home-tab" data-toggle="pill"  role="tab"
                       aria-controls="v-pills-home" aria-selected="true" onClick={() => selectLanguage(item)}>{item.name}</button>);
        })
    }

    const submit = (data) => {
        if(selectedLanguage === null) {
            dispatch(createLanguage(data)).then(() => {
                toast.success("Language added!");
            }).catch(() => toast.error("Error!"));
        } else {
            dispatch(updateLanguage({
                languageId: selectedLanguage.languageId,
                name : data.name
            })).then(() => {
                toast.success("Language updated!");
            }).catch(() => {
                toast.error("Error!");
            })
        }
        reset();
        dispatch({
            type: SELECT_LANGUAGE,
            payload: null
        });

    }

    return (
        <React.Fragment>
            <div className="nav flex-column nav-pills col-4" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                {renderLanguages()}

                <button className={`nav-link d-flex justify-content-center ${(selectedLanguage === null) ? 'active' : null}`} id="v-pills-home-tab" data-toggle="pill" href={null} role="tab"
                   aria-controls="v-pills-home" aria-selected="true" onClick={() => selectLanguage(null)}>
                    <FontAwesomeIcon icon={faPlus} />
                </button>

            </div>
            <div className="tab-content col-6" id="v-pills-tabContent">
                <form className={` mt-5`} onSubmit={handleSubmit(submit)}>

                    <input type="text" className={`form-control ${errors.name ? 'is-invalid': ''}`} placeholder="New language name"
                           {...register('name', {
                               required: 'Name is required!'})}/>
                    { errors.name && <div className="invalid-feedback ml-3">{errors.name.message}</div> }


                    <button className={`btn btn-primary w-100 mt-3`}>{(selectedLanguage == null) ? 'Add' : 'Update'}</button>
                </form>


            </div>
        </React.Fragment>







    )
}

export default LanguageForm;
