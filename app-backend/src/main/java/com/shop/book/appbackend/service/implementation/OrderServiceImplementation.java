package com.shop.book.appbackend.service.implementation;

import com.shop.book.appbackend.dto.OrderDTO;
import com.shop.book.appbackend.model.*;
import com.shop.book.appbackend.model.enums.StatusOfOrder;
import com.shop.book.appbackend.repository.*;
import com.shop.book.appbackend.service.OrderService;
import com.shop.book.appbackend.service.ShoppingCartService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.UUID;
import java.util.concurrent.atomic.AtomicReference;

@Service
@RequiredArgsConstructor
public class OrderServiceImplementation implements OrderService {

    private final OrderRepository orderRepository;
    private final CustomerRepository customerRepository;
    private final ShoppingCartService shoppingCartService;
    private final CityRepository cityRepository;
    private final OrderLineRepository orderLineRepository;
    private final LocationRepository locationRepository;
    private final BookRepository bookRepository;


    @Override
    public List<Order> getAllOrders() {
        return orderRepository.findAll();
    }

    @Override
    public List<Order> getOredersByCustomer(String username) {
        Customer customer = customerRepository.findByUsername(username);
        return orderRepository.findOrderByCustomer(customer);
    }

    @Override
    public Order create(OrderDTO orderDTO, String username) {
        Customer customer = customerRepository.findByUsername(username);
        System.out.println(customer);
        System.out.println(username);


        City city = cityRepository.findByName(orderDTO.getCity());
        System.out.println(city);

        Location location = new Location();
        location.setCity(city);
        location.setNumber(orderDTO.getNumber());
        location.setStreet(orderDTO.getStreet());
        location = locationRepository.save(location);
        Order order = new Order();
        order.setCustomer(customer);

        order.setDateOfCreation(new Date());
        order.setLocation(location);
        AtomicReference<Double> sum = new AtomicReference<>(0.0);
        shoppingCartService.getShoppingCart(username).forEach(orderLine -> {
             sum.updateAndGet(v -> v + orderLine.getPrice());
        });
        order.setStatus(StatusOfOrder.PROCESSING);
        order.setTotalMoney(sum.get());
        order = orderRepository.save(order);


        Order finalOrder = order;
        shoppingCartService.getShoppingCart(username).forEach(orderLine -> {
            orderLine.getBook().setQuantity(orderLine.getBook().getQuantity() - orderLine.getQuantity());
            bookRepository.save(orderLine.getBook());
            orderLine.setOrder(finalOrder);
            orderLineRepository.save(orderLine);
        });

        shoppingCartService.refreshShoppingCart(username);

        return finalOrder;
    }

    @Override
    public Order declineOrder(UUID id) {
        Order order = orderRepository.findById(id).get();
        order.getOrderLines().forEach(orderLine -> {
            orderLine.getBook().setQuantity(orderLine.getBook().getQuantity() + orderLine.getQuantity());
            bookRepository.save(orderLine.getBook());
        });
        order.setStatus(StatusOfOrder.DECLINED);
        return orderRepository.save(order);
    }

    @Override
    public Order approveOrder(UUID id) {
        Order order = orderRepository.findById(id).get();
        order.setStatus(StatusOfOrder.APPROVED);
        return orderRepository.save(order);
    }

    @Override
    public Order cancelOrder(UUID id) {
        Order order = orderRepository.findById(id).get();
        order.getOrderLines().forEach(orderLine -> {
            orderLine.getBook().setQuantity(orderLine.getBook().getQuantity() + orderLine.getQuantity());
            bookRepository.save(orderLine.getBook());
        });
        order.setStatus(StatusOfOrder.CANCELED);
        return orderRepository.save(order);
    }
}
