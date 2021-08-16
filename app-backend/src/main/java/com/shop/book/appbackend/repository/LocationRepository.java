package com.shop.book.appbackend.repository;

import com.shop.book.appbackend.model.Location;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface LocationRepository extends JpaRepository<Location, UUID> {
}
