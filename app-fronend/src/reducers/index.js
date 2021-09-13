import { combineReducers } from "redux";
import user from "./user";
import books from "./books";
import authors from "./authors";

export default combineReducers({
    user,
    books : books,
    authors: authors
});
