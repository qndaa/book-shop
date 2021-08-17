package com.shop.book.appbackend.controller;

import com.shop.book.appbackend.model.Location;
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
@RequestMapping(value = "/api/location", produces = MediaType.APPLICATION_JSON_VALUE)
public class LocationController {

    private final LocationService locationService;

    @Autowired
    public LocationController(LocationService locationService ) {
        this.locationService = locationService;
    }

    @RequestMapping(method = RequestMethod.GET)
    public ResponseEntity<List<Location>> getAllLocations() {
        return new ResponseEntity<>(locationService.getAllLocations(), HttpStatus.OK);
    }
}
