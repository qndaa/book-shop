package com.shop.book.appbackend.exceptions;

public class UserBlockedException extends RuntimeException {
    public UserBlockedException(String mess) {
        super(mess);
    }
}
