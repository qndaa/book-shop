package com.shop.book.appbackend.controller;

import com.shop.book.appbackend.model.Street;
import com.shop.book.appbackend.service.StreetService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(value = "/api/street", produces = MediaType.APPLICATION_JSON_VALUE)
public class StreetController {

    private final StreetService streetService;

    @Autowired
    public StreetController(StreetService streetService ) {
        this.streetService = streetService;
    }

    @RequestMapping(method = RequestMethod.GET)
    public ResponseEntity<List<Street>> getAllStreets() {
        return new ResponseEntity<>(streetService.getAllStreets(), HttpStatus.OK);
    }
}
