package com.shop.book.appbackend.controller;

import com.auth0.jwt.JWT;
import com.auth0.jwt.JWTVerifier;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.interfaces.DecodedJWT;
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
            System.out.println("Kreira novi order");
            order = new Order();
            session.setAttribute("cart", order);
        }

        order.getOrderLines().add(new OrderLine());

        System.out.println(order.getOrderLines().size());


        return new ResponseEntity<>(session.getAttribute("cart"), HttpStatus.OK);

    }

    public ResponseEntity<List<Order>> getOrdersByCustomer(HttpServletRequest request) {
        String authorizationHeader = request.getHeader(HttpHeaders.AUTHORIZATION);
        String refresh_token = authorizationHeader.substring("Bearer ".length());
        Algorithm algorithm = Algorithm.HMAC256("secret".getBytes());
        JWTVerifier verifier = JWT.require(algorithm).build();
        DecodedJWT decodedJWT = verifier.verify(refresh_token);
        String username = decodedJWT.getSubject();
        return new ResponseEntity<>(orderService.getOredersByCustomer(username), HttpStatus.OK);

    }

}
