package com.shop.book.appbackend.service;

import com.shop.book.appbackend.model.OrderLine;

import java.util.List;

public interface OrderLineService {
    List<OrderLine> getAllOrderLines();
}
