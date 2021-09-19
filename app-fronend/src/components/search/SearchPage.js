import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link, useHistory} from "react-router-dom";
import {fetchAllAuthors, fetchAllBooks} from "../../actions";
import Book from "../util/Book";
import {URL_BACKEND} from "../../apis/api";


const SearchPage = (props) => {

    const text = useSelector(state => state.search)
    const books = useSelector(state => state.books)
    const authors = useSelector(state => state.authors);
    const history = useHistory();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAllAuthors());
        dispatch(fetchAllBooks());

    }, []);

    if (text === undefined || text === null) {
        history.push("/home");
        return <div>Loading...</div>;
    }


    const showBooks = Object.values(books).filter(book => {
        if(book.title.toLowerCase().includes(text.toLowerCase())) {
            return book;
        }
    })

    const showAuthors = Object.values(authors).filter(author => {
        if((author.firstName.toLowerCase() + ' ' + author.lastName.toLowerCase()).includes(text.toLowerCase())) {
            return author;
        }
    })

    if (text === '') {
        return (
            <div className="container-fluid">
                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                    <h1 className="h3 mb-0 text-gray-800">No result for search!</h1>
                </div>
            </div>
        )
    }

    const renderImageBook = (fileName) => {
        let resource = URL_BACKEND + '/file/';
        if (fileName !== null) {
            resource += fileName;
        } else {
            resource += 'default-book.jpeg';
        }
        return (<img className="img-fluid border border-secondary" src={resource} height="200" width="200"  alt={`Book!`}/>);
    }

    const renderBooks = () => {
        if (showBooks.length === 0) {
            return (<h2 className={`gray mb-3`}>No books in search!</h2>)
        } else {
            return showBooks.map(book => {
                return (
                    <div className="col-xl-4 col-md-5 mb-4">
                        <div className="card shadow h-100 py-2">
                            <div className="card-body">
                                <div className="row no-gutters align-items-center">
                                    <div className="col mr-2">
                                        <div style={{ height: 320}}>
                                            {renderImageBook(book.image)}
                                        </div>
                                        <div style={{height: 70}} className="d-flex justify-content-center text-xl font-weight-bold text-primary text-uppercase mb-1">
                                            {book.title}
                                        </div>
                                        <div className="h5 mb-0 font-weight-bold text-gray-800 d-flex justify-content-center">
                                            {book.price}&euro;
                                        </div>


                                        <Link to={`/books/${book.bookId}`} className="btn btn-primary  d-flex justify-content-center mt-3">
                                            <span className="text">See more</span>
                                        </Link>

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                );



            })
        }

    }
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

    const renderAuthors = () => {
        if (showAuthors.length === 0) {
            return (<h2 className={`gray mb-3`}>No authors in search!</h2>)
        } else {
            return showAuthors.map(author => {
                return (
                    <div className="col-xl-4 col-md-5 mb-4">
                        <div className="card shadow h-100 py-2">
                            <div className="card-body">
                                <div className="row no-gutters align-items-center">
                                    <div className="col mr-2">
                                        <div style={{ height: 270}}>
                                            {renderImage(author.image)}
                                        </div>
                                        <div style={{height: 50}} className="d-flex justify-content-center text-xl font-weight-bold text-primary text-uppercase mb-1">
                                            {author.firstName + ' ' + author.lastName}
                                        </div>

                                        {renderDate(author.yearOfBirth, author.yearOfDeath)}


                                        <Link to={`/authors/${author.authorId}`} className="btn btn-primary  d-flex justify-content-center mt-3">
                                            <span className="text">See more</span>
                                        </Link>

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>


                );



            })
        }

    }

    return (
        <div className="container-fluid">
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Search for input: {text}</h1>
            </div>

            <div className="row">
                <div className="col-xl-6 col-md-5 mb-4">
                    <div className="card border-left-primary shadow h-100 py-2">
                        <div className="card-body">
                            <div className={`row`}>
                                {renderBooks()}

                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-6 col-md-5 mb-4">
                    <div className="card border-left-primary shadow h-100 py-2">
                        <div className="card-body">
                            <div className={`row`}>
                                {renderAuthors()}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SearchPage;
