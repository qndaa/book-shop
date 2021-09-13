import { combineReducers } from "redux";
import user from "./user";
import books from "./books";
import authors from "./authors";
import categories from "./categories";

export default combineReducers({
    user,
    books : books,
    authors: authors,
    categories: categories
});
