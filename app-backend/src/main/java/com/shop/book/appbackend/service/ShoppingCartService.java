package com.shop.book.appbackend.service;

import com.shop.book.appbackend.dto.CartItemDTO;
import com.shop.book.appbackend.model.OrderLine;

import java.util.List;

public interface ShoppingCartService {

    List<OrderLine> addOrderLine(OrderLine orderLine);

    void createShoppingCart(String username);

    List<OrderLine> getShoppingCart(String username);

    OrderLine addOrderLine(String username, CartItemDTO cartItem);
    OrderLine updateOrderLine(String username, CartItemDTO cartItem);
    OrderLine deleteOrderLine(String username, CartItemDTO cartItem);

    void refreshShoppingCart(String username);
}
