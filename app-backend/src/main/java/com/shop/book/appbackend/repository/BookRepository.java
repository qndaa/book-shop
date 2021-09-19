package com.shop.book.appbackend.repository;

import com.shop.book.appbackend.model.Book;
import com.shop.book.appbackend.model.Category;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.UUID;

public interface BookRepository extends JpaRepository<Book, UUID> {

    List<Book> getBooksByCategoriesContains(Category category);
}
