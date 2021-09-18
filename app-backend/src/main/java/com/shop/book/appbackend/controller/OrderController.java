package com.shop.book.appbackend.controller;

import com.shop.book.appbackend.model.City;
import com.shop.book.appbackend.model.Order;
import com.shop.book.appbackend.model.OrderLine;
import com.shop.book.appbackend.service.OrderService;
import org.hibernate.Session;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.util.List;

@RestController
@RequestMapping(value = "/api/order", produces = MediaType.APPLICATION_JSON_VALUE)
public class OrderController {

    private final OrderService orderService;

    @Autowired
    public OrderController(OrderService orderService) {
        this.orderService = orderService;
    }

    @RequestMapping(method = RequestMethod.GET)
    public ResponseEntity<List<Order>> getAllOrders() {
        return new ResponseEntity<>(orderService.getAllOrders(), HttpStatus.OK);
    }

    @PreAuthorize("hasRole('ROLE_CUSTOMER')")
    @RequestMapping(method = RequestMethod.POST, value = "/add")
    public ResponseEntity<?> addItemToShoppingCard(HttpServletRequest request) {
        HttpSession session = request.getSession(true);
        Order order = (Order) session.getAttribute("cart");
        if (order == null) {
            session.setAttribute("cart", new Order());
        }

        order.getOrderLines().add(new OrderLine());

        return new ResponseEntity<>(session.getAttribute("cart"), HttpStatus.OK);

    }

}
