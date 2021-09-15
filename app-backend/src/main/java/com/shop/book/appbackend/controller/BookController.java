package com.shop.book.appbackend.controller;

import com.shop.book.appbackend.model.Book;
import com.shop.book.appbackend.service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping(value = "/api/book", produces = MediaType.APPLICATION_JSON_VALUE)
public class BookController {

    private final BookService bookService;

    @Autowired
    public BookController(BookService bookService) {
        this.bookService = bookService;
    }


    @RequestMapping(method = RequestMethod.GET)
    public ResponseEntity<List<Book>> getAllBooks() {
        return new ResponseEntity<>(bookService.getAllBooks(), HttpStatus.OK);
    }

    @RequestMapping(method = RequestMethod.GET, value = "{id}")
    public ResponseEntity<Book> getBookById(@PathVariable String id) {
        return new ResponseEntity<>(bookService.getBookById(UUID.fromString(id)), HttpStatus.OK);
    }

}
