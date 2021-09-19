import { combineReducers } from "redux";
import user from "./user";
import books from "./books";
import authors from "./authors";
import categories from "./categories";
import languages from "./languages";
import select from "./select";
import customers from "./customers";
import shoppingCart from "./shoppingCart";
import cities from "./cities";
import orders from "./orders";

export default combineReducers({
    user,
    books : books,
    authors: authors,
    categories: categories,
    languages: languages,
    select: select,
    customers: customers,
    shoppingCart: shoppingCart,
    cities: cities,
    orders: orders

});
