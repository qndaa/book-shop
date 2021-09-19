package com.shop.book.appbackend.repository;

import com.shop.book.appbackend.model.Customer;
import com.shop.book.appbackend.model.Order;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.UUID;

public interface OrderRepository extends JpaRepository<Order, UUID> {
    List<Order> findOrderByCustomer(Customer customer);
}
