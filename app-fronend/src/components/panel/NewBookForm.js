import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useHistory} from "react-router-dom";
import {useForm} from "react-hook-form";
import api, {URL_BACKEND} from "../../apis/api";
import {createAuthor, createBook, fetchAllAuthors} from "../../actions";
import {toast} from "react-toastify";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";

const NewBookForm = () => {


    const dispatch = useDispatch();
    const history = useHistory();
    const {register, getValues, handleSubmit, setValue, formState: {errors}} = useForm();
    const [newImage, setNewImage] = useState(null);
    const languages = useSelector(state => state.languages);
    const categories = useSelector(state => state.categories);
    const authors = useSelector(state => state.authors);
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [selectedAuthors, setSelectedAuthors] = useState([]);


    useEffect(() => {
        dispatch(fetchAllAuthors());
    }, [])

    const renderImage = () => {
        if (newImage === null) {
            return null;
        } else {
            let resource = URL_BACKEND + '/file/' + newImage;
            return (
                <img style={{height: 200}} className="img-profile"
                     src={resource}/>
            );
        }
    }

    const submit = (data) => {
        console.log(data);

        if(selectedCategories.length === 0) {
            toast.info("No selected categories");
            return;
        }
        if(selectedAuthors.length === 0) {
            toast.info("No selected authors!");
            return;
        }


        dispatch(createBook(
            {
                title: data.title,
                isbn: data.isbn,
                image: newImage,
                quantity: data.quantity,
                price: data.price,
                categoriesIds: selectedCategories,
                authorsIds: selectedAuthors,
                languageId: data.language,
                description: data.description

            }
        )).then((response) => {
            toast.success("Book added!");
            console.log(response.bookId);
            history.push(`/books/${response.bookId}`);
        }).catch(() => {
            toast.error("Error");
        })

    }

    const fileSelectedHandler = async (event) => {
        const fd = new FormData;
        fd.append('file', event.target.files[0]);
        await api.post('/file/upload', fd).then(response => {
            setNewImage(response.data);
        })
    }

    const renderLanguage = () => {
        return Object.values(languages).map(item => {
            return (<option key={item.languageId} value={item.languageId}>{item.name}</option>);
        })
    }

    const renderCategories = () => {
        return Object.values(categories).map(item => {
            if(!selectedCategories.includes(item.categoryId)){
                return (<option key={item.categoryId} value={item.categoryId}>{item.name}</option>);
            } else {
                return null;
            }
        });
    }

    const renderAuthors = () => {
        return Object.values(authors).map(item => {
            if (!selectedAuthors.includes(item.authorId)) {
                return (
                    <option key={item.authorId} value={item.authorId}>{item.firstName + ' ' + item.lastName}</option>);

            } else {
                return null;
            }
        });
    }

    const addSelectedCategory = () => {
        const c = getValues().selectCategory;
        if (c !== '') {
            setSelectedCategories([...selectedCategories, c]);
            setValue('selectCategory', '');
        } else {
            toast.warning('You should choose same category!');
        }
    }

    const renderSelectedAuthors = () => {
        if (selectedAuthors.length === 0) {
            return <label className={`ml-3`} htmlFor={`selectedAuthors`}>No selected authors!</label>

        } else {
            return (
                <div>
                    <label className={`ml-3`} htmlFor={`selectedAuthors`}>Selected authors:</label>
                    {
                        Object.values(authors).map(item => {
                            if (selectedAuthors.includes(item.authorId)) {
                                return (<label key={item.authorId}
                                               className={`ml-3 row`}>{item.firstName + ' ' + item.lastName}</label>);

                            } else {
                                return null;
                            }
                        })
                    }
                </div>
            );
        }
    }

    const renderSelectedCategories = () => {
        if (selectedCategories.length === 0) {
            return <label className={`ml-3`} htmlFor={`selectedAuthors`}>No selected categories!</label>
        } else {
            return (
                <div>
                    <label className={`ml-3`} htmlFor={`selectedCategories`}>Selected categories:</label>
                    {
                        Object.values(categories).map(item => {
                            if (selectedCategories.includes(item.categoryId)) {
                                return (<label key={item.categoryId}
                                               className={`ml-3 row`}>{item.name}</label>);

                            } else {
                                return null;
                            }
                        })
                    }
                </div>
            );
        }

    }

    const addSelectedAuthor = () => {
        const a = getValues().selectAuthor;
        if (a !== '') {
            setSelectedAuthors([...selectedAuthors, a]);
            setValue('selectAuthor', '');
        } else {
            toast.warning('You should choose same author!');
        }
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
                <div className="col-sm-12 mb-3 mb-sm-0">
                    <label className={`ml-3`} htmlFor={`title`}>Title:</label>
                    <input type="text"
                           className={`form-control form-control-user ${errors.title ? 'is-invalid' : ''}`}
                           id="title"
                           placeholder="Title"
                           {...register('title', {required: 'Title is required!'})}/>
                    {errors.title && <div className="invalid-feedback ml-3">{errors.title.message}</div>}
                </div>


            </div>

            <div className="form-group row">
                <div className="col-sm-6 mb-3 mb-sm-0">
                    <label className={`ml-3`} htmlFor={`price`}>Price in &euro;:</label>
                    <input type="number"
                           className={`form-control form-control-user ${errors.price ? 'is-invalid' : ''}`}
                           id="price"
                           placeholder="Price"
                           {...register('price', {required: "Please input price!", min: 0, message: 'Min number is 0.'})}/>
                    {errors.price && <div className="invalid-feedback ml-3">{errors.price.message}</div>}
                </div>
                <div className="col-sm-6">
                    <label className={`ml-3`} htmlFor={`quantity`}>Quantity:</label>

                    <input type="number"
                           className={`form-control form-control-user ${errors.quantity ? 'is-invalid' : ''}`}
                           id="quantity"
                           placeholder="Quantity"
                           {...register('quantity', {required: "Please input quantity!",min: 0, message: 'Min number is 0.'})}/>
                    {errors.quantity && <div className="invalid-feedback ml-3">{errors.quantity.message}</div>}
                </div>


            </div>

            <div className="form-group row">
                <div className="col-sm-6 mb-3 mb-sm-0">
                    <label className={`ml-3`} htmlFor={`isbn`}>ISBN:</label>
                    <input type="text"
                           className={`form-control form-control-user ${errors.isbn ? 'is-invalid' : ''}`}
                           id="isbn"
                           placeholder="ISBN"
                           {...register('isbn')}/>
                    {errors.isbn && <div className="invalid-feedback ml-3">{errors.isbn.message}</div>}
                </div>
                <div className="col-sm-6">
                    <label className={`ml-3`} htmlFor={`language`}>Language:</label>

                    <select
                        className={`form-control form-select mt-2 ${errors.language ? 'is-invalid' : ''}`}
                        id="language"
                        {...register('language', {required: 'Language is required!'})}>
                        <option value="">Choose...</option>
                        {renderLanguage()}
                    </select>
                    {errors.language && <div className="invalid-feedback ml-3">{errors.language.message}</div>}
                </div>
            </div>


            <div className="form-group row">
                <div className="col-sm-6 mb-3 mb-sm-0">
                    {renderSelectedCategories()}

                </div>
                <div className="col-sm-6">
                    <label className={`ml-3`} htmlFor={`categories`}>Categories:</label>

                    <select
                        className={`form-control form-select mt-2`}
                        id="language"
                        {...register('selectCategory')}
                    >
                        <option value="">Choose...</option>
                        {renderCategories()}
                    </select>
                    <button onClick={() => addSelectedCategory()} type={`button`}
                            className="btn btn-primary mt-2 w-100">
                        <FontAwesomeIcon icon={faPlus}/>
                    </button>
                </div>
            </div>

            <div className="form-group row">
                <div className="col-sm-6 mb-3 mb-sm-0">
                    {renderSelectedAuthors()}
                </div>
                <div className="col-sm-6">
                    <label className={`ml-3`} htmlFor={`authors`}>Authors:</label>

                    <select
                        className={`form-control input-group form-select mt-2`}
                        id="authors"
                        {...register('selectAuthor')}
                    >

                        <option value="">Choose...</option>
                        {renderAuthors()}
                    </select>
                    <button className="btn btn-primary mt-2 w-100" type={`button`} onClick={addSelectedAuthor}>
                        <FontAwesomeIcon icon={faPlus}/>
                    </button>


                </div>
            </div>


            <div className="form-group row">
                <div className="col-sm-12 mb-3 mb-sm-0">
                    <textarea type="textarea"
                              className={`form-control form-control-user ${errors.description ? 'is-invalid' : ''}`}
                              id="description"
                              placeholder="Description..."
                              {...register('description')}/>
                    {errors.description && <div className="invalid-feedback ml-3">{errors.description.message}</div>}
                </div>


            </div>


            <button type={`submit`} className="btn btn-primary btn-user btn-block">
                Create Book
            </button>
            <hr/>
        </form>

    );

}
export default NewBookForm;
