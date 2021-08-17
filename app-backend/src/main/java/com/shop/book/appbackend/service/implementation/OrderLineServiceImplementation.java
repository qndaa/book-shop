package com.shop.book.appbackend.service.implementation;

import com.shop.book.appbackend.model.OrderLine;
import com.shop.book.appbackend.repository.OrderLineRepository;
import com.shop.book.appbackend.repository.OrderRepository;
import com.shop.book.appbackend.service.OrderLineService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderLineServiceImplementation implements OrderLineService {

    private final OrderLineRepository orderLineRepository;

    @Autowired
    public OrderLineServiceImplementation(OrderLineRepository orderLineRepository) {
        this.orderLineRepository = orderLineRepository;
    }

    @Override
    public List<OrderLine> getAllOrderLines() {
        return orderLineRepository.findAll();
    }
}
