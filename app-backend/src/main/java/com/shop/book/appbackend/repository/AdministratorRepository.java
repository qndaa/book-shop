package com.shop.book.appbackend.repository;

import com.shop.book.appbackend.model.Administrator;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface AdministratorRepository extends JpaRepository<Administrator, UUID> {
}
