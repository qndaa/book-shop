package com.shop.book.appbackend.controller;

import com.shop.book.appbackend.model.Author;
import com.shop.book.appbackend.model.User;
import com.shop.book.appbackend.service.AuthorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping(value = "/api/author", produces = MediaType.APPLICATION_JSON_VALUE)
public class AuthorController {

    private final AuthorService authorService;

    @Autowired
    public AuthorController(AuthorService authorService) {
        this.authorService = authorService;
    }

    @RequestMapping(method = RequestMethod.GET)
    public ResponseEntity<List<Author>> getAllAuthors() {
        return new ResponseEntity<>(authorService.getAllAuthors(), HttpStatus.OK);
    }

    @PreAuthorize("hasRole('ROLE_ADMINISTRATOR')")
    @RequestMapping(method = RequestMethod.POST)
    public ResponseEntity<Author> createAuthor(@RequestBody Author author) {

        return new ResponseEntity<>(authorService.create(author), HttpStatus.OK);
    }

    @RequestMapping(method = RequestMethod.GET, value = "/{id}")
    public ResponseEntity<Author> getAuthorById(@PathVariable String id){
        return new ResponseEntity<>(authorService.getAuthorById(UUID.fromString(id)), HttpStatus.OK);
    }


}
