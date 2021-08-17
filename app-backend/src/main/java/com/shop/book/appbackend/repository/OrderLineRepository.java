package com.shop.book.appbackend.repository;

import com.shop.book.appbackend.model.OrderLine;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface OrderLineRepository extends JpaRepository<OrderLine, UUID> {
}
