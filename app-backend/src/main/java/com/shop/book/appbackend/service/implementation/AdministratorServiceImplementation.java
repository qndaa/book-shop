package com.shop.book.appbackend.service.implementation;

import com.shop.book.appbackend.model.Administrator;
import com.shop.book.appbackend.repository.AdministratorRepository;
import com.shop.book.appbackend.service.AdministratorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AdministratorServiceImplementation implements AdministratorService {

    private final AdministratorRepository administratorRepository;

    @Autowired
    public AdministratorServiceImplementation(AdministratorRepository administratorRepository) {
        this.administratorRepository = administratorRepository;
    }

    @Override
    public List<Administrator> getAllAdministrators() {
        return administratorRepository.findAll();
    }
}
