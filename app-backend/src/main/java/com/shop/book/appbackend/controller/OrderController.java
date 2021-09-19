package com.shop.book.appbackend.controller;

import com.auth0.jwt.JWT;
import com.auth0.jwt.JWTVerifier;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.interfaces.DecodedJWT;
import com.shop.book.appbackend.dto.OrderDTO;
import com.shop.book.appbackend.model.City;
import com.shop.book.appbackend.model.Order;
import com.shop.book.appbackend.model.OrderLine;
import com.shop.book.appbackend.service.OrderService;
import org.aspectj.weaver.ast.Or;
import org.hibernate.Session;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.util.List;
import java.util.UUID;

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
    @RequestMapping(method = RequestMethod.POST)
    public ResponseEntity<?> addItemToShoppingCard(@RequestBody OrderDTO orderDTO, HttpServletRequest request) {
        String authorizationHeader = request.getHeader(HttpHeaders.AUTHORIZATION);
        String refresh_token = authorizationHeader.substring("Bearer ".length());
        Algorithm algorithm = Algorithm.HMAC256("secret".getBytes());
        JWTVerifier verifier = JWT.require(algorithm).build();
        DecodedJWT decodedJWT = verifier.verify(refresh_token);
        String username = decodedJWT.getSubject();
        System.out.println(orderDTO);
        return new ResponseEntity<>(orderService.create(orderDTO, username),HttpStatus.OK);

    }

    @PreAuthorize("hasRole('ROLE_CUSTOMER')")
    @RequestMapping(method = RequestMethod.GET, value = "/{username}")
    public ResponseEntity<List<Order>> getOrdersByCustomer(@PathVariable String username) {
        return new ResponseEntity<>(orderService.getOredersByCustomer(username), HttpStatus.OK);
    }

    @PreAuthorize("hasRole('ROLE_CUSTOMER')")
    @RequestMapping(method = RequestMethod.POST, value = "/cancel/{id}")
    public ResponseEntity<Order> cancelOrder(@PathVariable UUID id) {
        return new ResponseEntity<>(orderService.cancelOrder(id), HttpStatus.OK);
    }

    @PreAuthorize("hasRole('ROLE_ADMINISTRATOR')")
    @RequestMapping(method = RequestMethod.POST, value = "/approve/{id}")
    public ResponseEntity<Order> approveOrder(@PathVariable UUID id) {
        return new ResponseEntity<>(orderService.approveOrder(id), HttpStatus.OK);
    }

    @PreAuthorize("hasRole('ROLE_ADMINISTRATOR')")
    @RequestMapping(method = RequestMethod.POST, value = "/decline/{id}")
    public ResponseEntity<Order> declineOrder(@PathVariable UUID id) {
        return new ResponseEntity<>(orderService.declineOrder(id), HttpStatus.OK);
    }



}
