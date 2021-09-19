package com.shop.book.appbackend.service;

import com.shop.book.appbackend.dto.OrderDTO;
import com.shop.book.appbackend.model.Order;

import java.util.List;
import java.util.UUID;

public interface OrderService {
    List<Order> getAllOrders();

    List<Order> getOredersByCustomer(String username);

    Order create(OrderDTO orderDTO, String username);

    Order declineOrder(UUID id);

    Order approveOrder(UUID id);

    Order cancelOrder(UUID id);
}
