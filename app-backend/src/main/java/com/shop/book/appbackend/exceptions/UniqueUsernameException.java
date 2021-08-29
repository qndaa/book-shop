package com.shop.book.appbackend.exceptions;


public class UniqueUsernameException extends IllegalArgumentException {

    public UniqueUsernameException() {
        super("Username has already been used!");
    }
}
