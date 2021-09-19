package com.shop.book.appbackend.repository;

import com.shop.book.appbackend.model.City;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface CityRepository extends JpaRepository<City, UUID> {
    City findByName(String name);
}
