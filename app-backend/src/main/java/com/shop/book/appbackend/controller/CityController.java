package com.shop.book.appbackend.controller;

import com.shop.book.appbackend.model.City;
import com.shop.book.appbackend.model.Location;
import com.shop.book.appbackend.service.CityService;
import com.shop.book.appbackend.service.LocationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(value = "/api/city", produces = MediaType.APPLICATION_JSON_VALUE)
public class CityController {

    private final CityService cityService;

    @Autowired
    public CityController(CityService cityService ) {
        this.cityService = cityService;
    }

    @RequestMapping(name = "", method = RequestMethod.GET)
    public ResponseEntity<List<City>> getAllCities() {
        return new ResponseEntity<>(cityService.getAllCities(), HttpStatus.OK);
    }
}

