package com.shop.book.appbackend.exceptions;

public class UniqueNameException extends IllegalArgumentException{
    public UniqueNameException() {
        super("Name has already been exists!");
    }

}
