package com.shop.book.appbackend.service;

import com.shop.book.appbackend.dto.BookCreateDTO;
import com.shop.book.appbackend.dto.UpdateBookDTO;
import com.shop.book.appbackend.model.Book;

import java.util.List;
import java.util.UUID;

public interface BookService {
    List<Book> getAllBooks();

    Book getBookById(UUID fromString);

    Book create(BookCreateDTO bookDTO);

    Book update(UpdateBookDTO updateBookDTO);
}
