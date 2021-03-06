package com.shop.book.appbackend.controller;

import com.shop.book.appbackend.dto.CityDTO;
import com.shop.book.appbackend.exceptions.UniqueNameException;
import com.shop.book.appbackend.model.City;
import com.shop.book.appbackend.service.CityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/api/city", produces = MediaType.APPLICATION_JSON_VALUE)
public class CityController {

    private final CityService cityService;

    @Autowired
    public CityController(CityService cityService ) {
        this.cityService = cityService;
    }

    @RequestMapping(method = RequestMethod.GET)
    public ResponseEntity<List<City>> getAllCities() {
        return new ResponseEntity<>(cityService.getAllCities(), HttpStatus.OK);
    }

    @RequestMapping(method = RequestMethod.POST)
    public ResponseEntity<?> createCity(@RequestBody CityDTO cityDTO) {
        try {
            return new ResponseEntity<>(cityService.create(cityDTO), HttpStatus.CREATED);
        } catch (UniqueNameException e) {
            return new ResponseEntity<>(e, HttpStatus.BAD_REQUEST);
        }
    }
}

