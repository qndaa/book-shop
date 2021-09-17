package com.shop.book.appbackend.service;

import com.shop.book.appbackend.dto.UpdateAdministratorDTO;
import com.shop.book.appbackend.model.Administrator;

import java.util.List;

public interface AdministratorService {
    List<Administrator> getAllAdministrators();

    Administrator updateAdministrator(UpdateAdministratorDTO dto);

    Administrator getAdministratorByUsername(String username);
}
