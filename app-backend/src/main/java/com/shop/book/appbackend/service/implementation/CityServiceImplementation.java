package com.shop.book.appbackend.service.implementation;

import com.shop.book.appbackend.dto.CityDTO;
import com.shop.book.appbackend.exceptions.UniqueNameException;
import com.shop.book.appbackend.model.City;
import com.shop.book.appbackend.repository.CityRepository;
import com.shop.book.appbackend.service.CityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CityServiceImplementation implements CityService {
    private final CityRepository cityRepository;

    @Autowired
    public CityServiceImplementation(CityRepository cityRepository) {
        this.cityRepository = cityRepository;
    }

    @Override
    public List<City> getAllCities() {
        return cityRepository.findAll();
    }

    @Override
    public City create(CityDTO cityDTO) {
        City c = cityRepository.findByName(cityDTO.getName());
        if (c != null) {
            throw new UniqueNameException();
        }
        City city = new City();
        city.setName(cityDTO.getName());
        city.setZipCode(cityDTO.getZipCode());
        return cityRepository.save(city);
    }
}
