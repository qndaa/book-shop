package com.shop.book.appbackend.service.implementation;

import com.shop.book.appbackend.dto.UpdateAdministratorDTO;
import com.shop.book.appbackend.model.Administrator;
import com.shop.book.appbackend.model.User;
import com.shop.book.appbackend.repository.AdministratorRepository;
import com.shop.book.appbackend.service.AdministratorService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Slf4j
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

    @Override
    public Administrator updateAdministrator(UpdateAdministratorDTO dto) {
        Administrator administrator = administratorRepository.findByUsername(dto.getUsername());
        if (administrator == null) {
            log.error("Administrator not found in database!");
            throw new UsernameNotFoundException("User not found in database!");
        } else {
            log.info("Administrator found in database: {}", dto.getUsername());
        }

        administrator.setFirstName(dto.getFirstName());
        administrator.setLastName(dto.getLastName());
        return administratorRepository.save(administrator);

    }
}
