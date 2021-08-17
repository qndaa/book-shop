package com.shop.book.appbackend.controller;

import com.shop.book.appbackend.model.Administrator;
import com.shop.book.appbackend.service.AdministratorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(value = "/api/administrator", produces = MediaType.APPLICATION_JSON_VALUE)
public class AdministratorController {

    private final AdministratorService administratorService;

    @Autowired
    public AdministratorController(AdministratorService administratorService) {
        this.administratorService = administratorService;
    }

    @RequestMapping(method = RequestMethod.GET)
    public ResponseEntity<List<Administrator>> getAllAdministrators() {
        return new ResponseEntity<>(administratorService.getAllAdministrators(), HttpStatus.OK);
    }
}
