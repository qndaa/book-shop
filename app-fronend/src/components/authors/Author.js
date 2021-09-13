import React from "react";
import {URL_BACKEND} from "../../apis/api";
import {Link} from "react-router-dom";

const Author = (props) => {

    console.log(props);

    const renderImage = (fileName) => {
        let resource = URL_BACKEND + '/file/default-author.png';
        if (fileName !== null) {
            resource = URL_BACKEND + '/file/' + fileName;
        }
        return (<img className="img-fluid " src={resource} style={{ height : 260, width : 200}}  alt={`Author!`}/>);
    }

    const renderDate = (yearOfBirth, yearOfDeath) => {
        let res = '';

        if (yearOfBirth !== null && yearOfDeath !== null) {
           res = yearOfBirth + ' - ' + yearOfDeath;
        }

        if(yearOfBirth !== null && yearOfDeath === null) {
            res = yearOfBirth + ' - ';
        }



        return (
            <div className="h5 mb-0 font-weight-bold text-gray-800 d-flex justify-content-center" style={{height: 30}}>
                {res}
            </div>
            )

    }

    return (
        <div className="col-xl-2 col-md-5 mb-4">
            <div className="card border-left-primary shadow h-100 py-2">
                <div className="card-body">
                    <div className="row no-gutters align-items-center">
                        <div className="col mr-2">
                            <div style={{ height: 270}}>
                                {renderImage(props.author.image)}
                            </div>
                            <div style={{height: 50}} className="d-flex justify-content-center text-xl font-weight-bold text-primary text-uppercase mb-1">
                                {props.author.firstName + ' ' + props.author.lastName}
                            </div>

                            {renderDate(props.author.yearOfBirth, props.author.yearOfDeath)}


                            <Link to={`/authors/${props.author.authorId}`} className="btn btn-primary  d-flex justify-content-center mt-3">
                                <span className="text">See more</span>
                            </Link>

                        </div>

                    </div>
                </div>
            </div>
        </div>


    );
}

export default Author;
