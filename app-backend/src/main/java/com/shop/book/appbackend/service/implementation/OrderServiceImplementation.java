package com.shop.book.appbackend.service.implementation;

import com.shop.book.appbackend.model.Customer;
import com.shop.book.appbackend.model.Order;
import com.shop.book.appbackend.repository.CustomerRepository;
import com.shop.book.appbackend.repository.OrderRepository;
import com.shop.book.appbackend.service.CustomerService;
import com.shop.book.appbackend.service.OrderService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class OrderServiceImplementation implements OrderService {

    private final OrderRepository orderRepository;
    private final CustomerRepository customerRepository;


    @Override
    public List<Order> getAllOrders() {
        return orderRepository.findAll();
    }

    @Override
    public List<Order> getOredersByCustomer(String username) {
        Customer customer = customerRepository.findByUsername(username);
        return orderRepository.findOrderByCustomer(customer);
    }
}
