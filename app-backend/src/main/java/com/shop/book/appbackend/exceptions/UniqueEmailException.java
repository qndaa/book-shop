package com.shop.book.appbackend.exceptions;

public class UniqueEmailException extends IllegalArgumentException {

    public UniqueEmailException() {
        super("Email has already been used!");
    }
}
