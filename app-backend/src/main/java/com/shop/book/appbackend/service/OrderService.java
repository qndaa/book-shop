package com.shop.book.appbackend.service;

import com.shop.book.appbackend.model.Order;

import java.util.List;

public interface OrderService {
    List<Order> getAllOrders();

    List<Order> getOredersByCustomer(String username);
}
