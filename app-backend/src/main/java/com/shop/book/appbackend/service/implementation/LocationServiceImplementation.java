package com.shop.book.appbackend.service.implementation;

import com.shop.book.appbackend.model.Location;
import com.shop.book.appbackend.repository.LocationRepository;
import com.shop.book.appbackend.service.LocationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LocationServiceImplementation implements LocationService {
    private final LocationRepository locationRepository;

    @Autowired
    public LocationServiceImplementation(LocationRepository locationRepository) {
        this.locationRepository = locationRepository;
    }

    @Override
    public List<Location> getAllLocations() {
        return locationRepository.findAll();
    }
}
