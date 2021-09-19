package com.shop.book.appbackend.controller;

import com.shop.book.appbackend.dto.BookCreateDTO;
import com.shop.book.appbackend.dto.UpdateBookDTO;
import com.shop.book.appbackend.model.Book;
import com.shop.book.appbackend.service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

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
    public ResponseEntity<Book> getBookById(@PathVariable UUID id) {
        return new ResponseEntity<>(bookService.getBookById(id), HttpStatus.OK);
    }

    @PreAuthorize("hasRole('ROLE_ADMINISTRATOR')")
    @RequestMapping(method = RequestMethod.POST)
    public ResponseEntity<?> createBook(@RequestBody BookCreateDTO bookDTO) {
        try {
            System.out.println(bookDTO);
            return new ResponseEntity<>(bookService.create(bookDTO), HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(e, HttpStatus.BAD_REQUEST);
        }
    }

    @PreAuthorize("hasRole('ROLE_ADMINISTRATOR')")
    @RequestMapping(method = RequestMethod.POST, value = "/update")
    public ResponseEntity<?> updateBook(@RequestBody UpdateBookDTO updateBookDTO){
        try {
            return new ResponseEntity<>(bookService.update(updateBookDTO), HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(e, HttpStatus.BAD_REQUEST);
        }
    }

    @RequestMapping(method = RequestMethod.GET, value = "/category/{id}")
    public ResponseEntity<List<Book>> getBooksByCategory(@PathVariable UUID id) {
        return new ResponseEntity<>(bookService.getBooksByCategory(id), HttpStatus.OK);
    }

}
