package com.shop.book.appbackend.service.implementation;

import com.shop.book.appbackend.dto.BookCreateDTO;
import com.shop.book.appbackend.dto.UpdateBookDTO;
import com.shop.book.appbackend.model.Book;
import com.shop.book.appbackend.model.Language;
import com.shop.book.appbackend.repository.AuthorRepository;
import com.shop.book.appbackend.repository.BookRepository;
import com.shop.book.appbackend.repository.CategoryRepository;
import com.shop.book.appbackend.repository.LanguageRepository;
import com.shop.book.appbackend.service.BookService;
import com.shop.book.appbackend.service.LanguageService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.List;
import java.util.Objects;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class BookServiceImplementation implements BookService {

    private final BookRepository bookRepository;
    private final LanguageRepository languageRepository;
    private final AuthorRepository authorRepository;
    private final CategoryRepository categoryRepository;


    @Override
    public List<Book> getAllBooks() {
        return bookRepository.findAll();
    }

    @Override
    public Book getBookById(UUID id) {
        return bookRepository.findById(id).get();
    }

    @Override
    public Book create(BookCreateDTO bookDTO) {
        Book book = new Book();
        book.setTitle(bookDTO.getTitle());
        book.setImage(bookDTO.getImage());
        book.setPrice(bookDTO.getPrice());
        book.setDescription((Objects.equals(bookDTO.getDescription().trim(), "")) ? null : bookDTO.getDescription());
        book.setQuantity(bookDTO.getQuantity());
        book.setIsbn((Objects.equals(bookDTO.getIsbn().trim(), "")) ? null : bookDTO.getIsbn());
        Arrays.stream(bookDTO.getAuthorsIds()).forEach(uuid -> book.getAuthors().add(authorRepository.findById(uuid).get()));
        Arrays.stream(bookDTO.getCategoriesIds()).forEach(uuid -> book.getCategories().add(categoryRepository.findById(uuid).get()));
        book.setLanguage(languageRepository.findById(bookDTO.getLanguageId()).get());
        return bookRepository.save(book);
    }

    @Override
    public Book update(UpdateBookDTO updateBookDTO) {
        Book book = bookRepository.findById(updateBookDTO.getId()).get();
        book.setQuantity(updateBookDTO.getQuantity());
        book.setPrice(updateBookDTO.getPrice());
        return bookRepository.save(book);
    }

    @Override
    public List<Book> getBooksByCategory(UUID id) {
        return bookRepository.getBooksByCategoriesContains(categoryRepository.findById(id).get());
    }
}
