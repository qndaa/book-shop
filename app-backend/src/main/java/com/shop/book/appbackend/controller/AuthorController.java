package com.shop.book.appbackend.controller;

import com.shop.book.appbackend.model.Author;
import com.shop.book.appbackend.model.Category;
import com.shop.book.appbackend.service.AuthorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(value = "/api/author", produces = MediaType.APPLICATION_JSON_VALUE)
public class AuthorController {

    private final AuthorService authorService;

    @Autowired
    public AuthorController(AuthorService authorService) {
        this.authorService = authorService;
    }

    @RequestMapping(name = "", method = RequestMethod.GET)
    public ResponseEntity<List<Author>> getAllCategories() {
        return new ResponseEntity<>(authorService.getAllAuthors(), HttpStatus.OK);
    }

}
