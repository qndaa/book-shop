package com.shop.book.appbackend.service.implementation;

import com.shop.book.appbackend.model.Book;
import com.shop.book.appbackend.repository.BookRepository;
import com.shop.book.appbackend.service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class BookServiceImplementation implements BookService {

    private final BookRepository bookRepository;

    @Autowired
    public BookServiceImplementation(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    @Override
    public List<Book> getAllBooks() {
        return bookRepository.findAll();
    }

    @Override
    public Book getBookById(UUID id) {
        return bookRepository.findById(id).get();
    }
}
