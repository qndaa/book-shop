package com.shop.book.appbackend.service.implementation;

import com.shop.book.appbackend.model.Street;
import com.shop.book.appbackend.repository.CityRepository;
import com.shop.book.appbackend.repository.StreetRepository;
import com.shop.book.appbackend.service.StreetService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StreetServiceImplementation implements StreetService {
    private final StreetRepository streetRepository;

    @Autowired
    public StreetServiceImplementation(StreetRepository streetRepository) {
        this.streetRepository = streetRepository;
    }

    @Override
    public List<Street> getAllStreets() {
        return streetRepository.findAll();
    }
}
