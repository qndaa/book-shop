package com.shop.book.appbackend.service;

import com.shop.book.appbackend.dto.CityDTO;
import com.shop.book.appbackend.model.City;

import java.util.List;

public interface CityService {
    List<City> getAllCities();

    City create(CityDTO cityDTO);
}
