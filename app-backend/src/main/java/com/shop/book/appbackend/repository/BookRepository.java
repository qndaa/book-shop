package com.shop.book.appbackend.repository;

import com.shop.book.appbackend.model.Book;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface BookRepository extends JpaRepository<Book, UUID> {
}
