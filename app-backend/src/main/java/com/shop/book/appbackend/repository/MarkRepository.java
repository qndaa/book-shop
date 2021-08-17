package com.shop.book.appbackend.repository;

import com.shop.book.appbackend.model.Mark;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface MarkRepository extends JpaRepository<Mark, UUID> {
}
