package com.shop.book.appbackend.service;

import com.shop.book.appbackend.model.Author;

import java.util.List;
import java.util.UUID;

public interface AuthorService {
    List<Author> getAllAuthors();

    Author create(Author author);

    Author getAuthorById(UUID fromString);
}
