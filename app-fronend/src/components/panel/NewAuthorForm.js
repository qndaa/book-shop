import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {useForm} from "react-hook-form";
import {createAuthor, updateAdministrator, updateCustomer} from "../../actions";
import {toast} from "react-toastify";
import api, {URL_BACKEND} from "../../apis/api";
import {useHistory} from "react-router-dom";


const NewAuthorForm = () => {

    const dispatch = useDispatch();
    const history = useHistory();
    const {register, handleSubmit, formState: {errors}} = useForm();
    const [newImage, setNewImage] = useState(null);

    const renderImage = () => {
        if (newImage === null) {
            return null;
        } else {
            let resource = URL_BACKEND + '/file/' + newImage;
            return (
                <img style={{height: 200, width: 200}} className="img-profile rounded-circle"
                     src={resource}/>
            );
        }
    }

    const fileSelectedHandler = async (event) => {
        const fd = new FormData;
        fd.append('file', event.target.files[0]);
        await api.post('/file/upload', fd).then(response => {
            setNewImage(response.data);
        })
    }

    const submit = (data) => {
        dispatch(createAuthor({
            firstName: data.firstName,
            lastName: data.lastName,
            yearOfBirth: data.yearOfBirth,
            yearOfDeath: data.yearOfDeath,
            biography: data.biography,
            image: newImage
        }))
            .then(() => {
                toast.success("Author added!");
                history.push('/authors');
            })
            .catch(() => toast.error("Error!"));
    }


    return (
        <form className="user mt-4" onSubmit={handleSubmit(submit)}>

            <div className={`d-flex justify-content-center`}>
                {renderImage()}
            </div>

            <div className={`d-flex justify-content-center mt-2`}>
                <input style={{display: 'none'}} type={`file`} onChange={fileSelectedHandler}
                       ref={fileInput => this.fileInput = fileInput}/>
                <button className={`btn btn-primary mb-3`} type={`button`} onClick={() => this.fileInput.click()}>Pick
                    image
                </button>
            </div>

            <div className="form-group row">
                <div className="col-sm-6 mb-3 mb-sm-0">
                    <label className={`ml-3`} htmlFor={`firstName`}>First name:</label>
                    <input type="text"
                           className={`form-control form-control-user ${errors.firstName ? 'is-invalid' : ''}`}
                           id="firstName"
                           placeholder="First Name"
                           {...register('firstName', {required: 'First name is required!'})}/>
                    {errors.firstName && <div className="invalid-feedback ml-3">{errors.firstName.message}</div>}
                </div>
                <div className="col-sm-6">
                    <label className={`ml-3`} htmlFor={`lastName`}>Last name:</label>

                    <input type="text"
                           className={`form-control form-control-user ${errors.lastName ? 'is-invalid' : ''}`}
                           id="lastName"
                           placeholder="Last Name"
                           {...register('lastName', {required: 'Last name is required!'})}/>
                    {errors.lastName && <div className="invalid-feedback ml-3">{errors.lastName.message}</div>}
                </div>


            </div>

            <div className="form-group row">
                <div className="col-sm-6 mb-3 mb-sm-0">
                    <label className={`ml-3`} htmlFor={`yearOfBirth`}>Year of birth:</label>
                    <input type="number"
                           className={`form-control form-control-user ${errors.yearOfBirth ? 'is-invalid' : ''}`}
                           id="yearOfBirth"
                           placeholder="Year Of Birth"
                           {...register('yearOfBirth' ,{ min: 1000, max: 3000, message: 'Number from range 1000-3000' })}/>
                    {errors.yearOfBirth && <div className="invalid-feedback ml-3">{errors.yearOfBirth.message}</div>}
                </div>
                <div className="col-sm-6">
                    <label className={`ml-3`} htmlFor={`yearOfDeath`}>Year of death:</label>

                    <input type="number"
                           className={`form-control form-control-user ${errors.yearOfDeath ? 'is-invalid' : ''}`}
                           id="yearOfDeath"
                           placeholder="Year of Death"
                           {...register('yearOfDeath', { min: 1000, max: 3000, message: 'Number from range 1000-3000' })}/>
                    {errors.yearOfDeath && <div className="invalid-feedback ml-3">{errors.yearOfDeath.message}</div>}
                </div>


            </div>

            <div className="form-group row">
                <div className="col-sm-12 mb-3 mb-sm-0">
                    <textarea type="textarea"
                           className={`form-control form-control-user ${errors.biography ? 'is-invalid' : ''}`}
                           id="biography"
                           placeholder="Biography..."
                           {...register('biography')}/>
                    {errors.biography && <div className="invalid-feedback ml-3">{errors.biography.message}</div>}
                </div>



            </div>


            <button type={`submit`} className="btn btn-primary btn-user btn-block">
                Create Author
            </button>
            <hr/>
        </form>


    );


}

export default NewAuthorForm;
