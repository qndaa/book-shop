import React, {useState} from "react";
import api, {getProfile, URL_BACKEND} from "../../apis/api";
import {toast} from "react-toastify";
import {changeUserPhoto} from "../../actions";
import {useDispatch, useSelector} from "react-redux";
import {useForm} from "react-hook-form";
import UpdatePasswordForm from "./UpdatePasswordForm";
import UpdateProfileDataForm from "./UpdateProfileDataForm";


const ProfileData = (props) => {

    const [newImage, setNewImage] = useState(null);
    const dispatch = useDispatch();


    const renderImage = (fileName) => {
        let resource = URL_BACKEND + '/file/default-profile.png';
        if (newImage !== null) {
            resource = URL_BACKEND + '/file/' + newImage;
        } else if (fileName !== null) {
            resource = URL_BACKEND + '/file/' + fileName;
        }
        return (
            <img style={{height: 200, width: 200}} className="img-profile rounded-circle"
                 src={resource}/>
        );
    }

    const fileSelectedHandler = async (event) => {
        const fd = new FormData;
        fd.append('file', event.target.files[0]);
        await api.post('/file/upload', fd).then(response => {
            console.log(response);
            setNewImage(response.data);
        })
    }

    const renderSavePhotoButton = () => {
        if (newImage !== null) {
            return (<button className={`ml-2 btn btn-success`} onClick={saveUserPhoto}>Save photo</button>);
        }
    }
    const saveUserPhoto = () => {
        dispatch(changeUserPhoto({
            username: getProfile().sub,
            image: newImage
        })).then(
            () => {
                toast.success("Profile image changed!");
                setNewImage(null);
            }
        );
    }

    return (
        <div className="col-xl-4 col-md-5 mb-4">
            <div className="card border-left-primary shadow h-100 py-2">
                <div className="card-body d-flex justify-content-center">
                    <div className="row ">
                        <div className="col mr-2 ">
                            <div className={`d-flex justify-content-center`}>
                                {renderImage(props.profile.image)}
                            </div>

                            <div className={`d-flex justify-content-center mt-4`}>
                                <input style={{display: 'none'}} type={`file`} onChange={fileSelectedHandler}
                                       ref={fileInput => this.fileInput = fileInput}/>
                                <button className={`btn btn-primary`} onClick={() => this.fileInput.click()}>Pick file
                                </button>
                                {renderSavePhotoButton()}
                            </div>

                            <UpdateProfileDataForm profile={props.profile}/>
                            <UpdatePasswordForm/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfileData;
