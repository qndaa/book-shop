package com.shop.book.appbackend.controller;

import com.shop.book.appbackend.dto.UpdateAdministratorDTO;
import com.shop.book.appbackend.dto.UsernameAndPasswordDTO;
import com.shop.book.appbackend.model.Administrator;
import com.shop.book.appbackend.model.User;
import com.shop.book.appbackend.service.AdministratorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/api/administrator", produces = MediaType.APPLICATION_JSON_VALUE)
public class AdministratorController {

    private final AdministratorService administratorService;

    @Autowired
    public AdministratorController(AdministratorService administratorService) {
        this.administratorService = administratorService;
    }

    @RequestMapping(method = RequestMethod.GET)
    public ResponseEntity<List<Administrator>> getAllAdministrators() {
        return new ResponseEntity<>(administratorService.getAllAdministrators(), HttpStatus.OK);
    }

    @PreAuthorize("hasRole('ROLE_ADMINISTRATOR')")
    @PostMapping(value = "")
    public ResponseEntity<?> updateAdministrator(@RequestBody UpdateAdministratorDTO dto) {
        try {
            Administrator user = administratorService.updateAdministrator(dto);
            return new ResponseEntity<>(user, HttpStatus.OK);
        } catch (UsernameNotFoundException e) {
            return new ResponseEntity<>(e, HttpStatus.BAD_REQUEST);
        }
    }

}
