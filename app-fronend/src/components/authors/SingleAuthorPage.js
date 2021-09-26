import React, {useEffect, useState} from "react";
import api, {URL_BACKEND} from "../../apis/api";
import ProfileData from "../profile/ProfileData";
import UpdateProfileDataForm from "../profile/UpdateProfileDataForm";
import UpdatePasswordForm from "../profile/UpdatePasswordForm";
import Book from "../util/Book";

const SingleAuthorPage = (props) => {

    const {id} = props.match.params;
    const [author, setAuthor] = useState(null);

    useEffect(() => {
        api.get('/author/' + id).then(response => {
            setAuthor(response.data);
            console.log(response.data);
        })
    }, [])

    const renderImage = () => {
        let resource = URL_BACKEND + '/file/default-author.png';
        if (author.image !== null) {
            resource = URL_BACKEND + '/file/' + author.image;
        }
        return (
            <img className="img-profile" style={{width: 250}}
                 src={resource}/>
        );
    }

    const renderBiography = (biography) => {
        if (biography !== null || biography === '') {
            return (
                <div>
                    <label className={`mt-3 h3`} htmlFor={`dateOfBirth`}>Biography:</label>
                    <p>{biography}</p>
                </div>
            )
        } else {
            return (
                <div>
                    <label className={`mt-3 h3`} htmlFor={`dateOfBirth`}>The author has no biography!</label>
                </div>
            )
        }
    }

    const book = (books) => {
        return books.map(item => {
            return <Book book={item} />
        })
    }

    const renderBooks = (books) => {
        console.log(books);
        if (books.length > 0) {
            return (
                <div>
                    <div className={`row`}>
                        <label className={`mt-3 h3`} >Books:</label>
                        {book(books)}
                    </div>
                </div>
            )
        } else {
            return (
                <div>
                    <label className={`mt-3 h3`} >The author has no books!</label>
                </div>
            )
        }
    }

    const renderDateOfBirth = (date ) => {
        if (date !== null) {
            return(
                <div className={`col-12 d-flex justify-content-center`}>
                    <label className={`h3`} htmlFor={`dateOfBirth`}>Year of
                        birth: {date}</label>
                </div>
            );
        } else {
            return null;
        }
    }

    const renderDateOfDeath = (date) => {
        if (date !== null) {
            console.log(date);
            return (
                <div className={`col-12 d-flex justify-content-center`}>
                    <label className={` h3`} htmlFor={`dateOfBirth`}>Year of
                        death: {date}</label>
                </div>
            );
        } else {
            return null;
        }
    }

    if (author === null) {
        return <div>Loading...</div>
    } else {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xl-5 col-md-5 mb-4">
                        <div className="card border-left-primary shadow h-100 py-2">
                            <div className="card-body d-flex justify-content-center">
                                <div className="row ">
                                    <div className="col mr-2 ">
                                        <div className={`d-flex justify-content-center`}>
                                            {renderImage()}
                                        </div>
                                        <div className={`col-12 d-flex justify-content-center`}>
                                            <label className={`mt-3 h3`} htmlFor={`dateOfBirth`}>First
                                                name: {author.firstName}</label>
                                        </div>
                                        <div className={`col-12 d-flex justify-content-center`}>
                                            <label className={` h3`} htmlFor={`dateOfBirth`}>Last
                                                name: {author.lastName}</label>
                                        </div>
                                        {renderDateOfBirth(author.yearOfBirth)}
                                        {renderDateOfDeath(author.yearOfDeath)}

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-7 col-md-5 mb-4">
                        <div className="card border-left-primary shadow h-100 py-2">
                            <div className="card-body ">
                                <div className="row ">
                                    {renderBiography(author.biography)}
                                </div>
                            </div>
                        </div>
                    </div>


                </div>


                <div className={`row`}>
                    <div className="col-xl-12 col-md-5 mb-4">
                        <div className="row ">
                            {renderBooks(author.books)}
                        </div>
                    </div>


                </div>
            </div>
        )
    }

}

export default SingleAuthorPage;
