package com.shop.book.appbackend.repository;

import com.shop.book.appbackend.model.Street;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface StreetRepository extends JpaRepository<Street, UUID> {
}
