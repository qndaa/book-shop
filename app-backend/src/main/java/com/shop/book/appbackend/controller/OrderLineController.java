package com.shop.book.appbackend.controller;

import com.shop.book.appbackend.model.OrderLine;
import com.shop.book.appbackend.service.OrderLineService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(value = "/api/orderLine", produces = MediaType.APPLICATION_JSON_VALUE)
public class OrderLineController {

    private final OrderLineService orderLineService;

    @Autowired
    public OrderLineController(OrderLineService orderLineService) {
        this.orderLineService = orderLineService;
    }

    @RequestMapping(method = RequestMethod.GET)
    public ResponseEntity<List<OrderLine>> getAllCities() {
        return new ResponseEntity<>(orderLineService.getAllOrderLines(), HttpStatus.OK);
    }
}
