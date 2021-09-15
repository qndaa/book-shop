package com.shop.book.appbackend.service.implementation;

import com.shop.book.appbackend.model.Author;
import com.shop.book.appbackend.repository.AuthorRepository;
import com.shop.book.appbackend.service.AuthorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class AuthorServiceImplementation implements AuthorService {

    private final AuthorRepository authorRepository;

    @Autowired
    public AuthorServiceImplementation(AuthorRepository authorRepository) {
        this.authorRepository = authorRepository;
    }

    @Override
    public List<Author> getAllAuthors() {
        return authorRepository.findAll();
    }

    @Override
    public Author create(Author author) {
        return authorRepository.save(author);
    }

    @Override
    public Author getAuthorById(UUID fromString) {
        return authorRepository.findById(fromString).get();
    }
}
