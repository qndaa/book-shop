package com.shop.book.appbackend.controller;

import com.shop.book.appbackend.dto.UpdateAdministratorDTO;
import com.shop.book.appbackend.dto.UpdateCustomerDTO;
import com.shop.book.appbackend.exceptions.UniqueEmailException;
import com.shop.book.appbackend.exceptions.UniqueUsernameException;
import com.shop.book.appbackend.model.Administrator;
import com.shop.book.appbackend.model.Customer;
import com.shop.book.appbackend.service.CustomerService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.*;


import java.util.List;

@Slf4j
@RestController
@RequestMapping(value = "/api/customer", produces = MediaType.APPLICATION_JSON_VALUE)
public class CustomerController {

    private final CustomerService customerService;

    @Autowired
    public CustomerController(CustomerService customerService) {
        this.customerService = customerService;
    }

    @RequestMapping(method = RequestMethod.GET)
    public ResponseEntity<List<Customer>> getAllCustomers() {
        return new ResponseEntity<>(customerService.getAllCustomers(), HttpStatus.OK);
    }

    @RequestMapping(method = RequestMethod.POST)
    public ResponseEntity<?> saveCustomer(@RequestBody Customer customer) {
        try {
            return new ResponseEntity<>(customerService.saveCustomer(customer), HttpStatus.CREATED);
        } catch (UniqueEmailException | UniqueUsernameException e) {
            return new ResponseEntity<>(e, HttpStatus.BAD_REQUEST);
        }
    }

    @PreAuthorize("hasRole('ROLE_CUSTOMER')")
    @RequestMapping(method = RequestMethod.POST, value = "/update")
    public ResponseEntity<?> updateCustomer(@RequestBody UpdateCustomerDTO dto) {
        try {
            Customer user = customerService.updateCustomer(dto);
            return new ResponseEntity<>(user, HttpStatus.OK);
        } catch (UsernameNotFoundException e) {
            return new ResponseEntity<>(e, HttpStatus.BAD_REQUEST);
        }
    }

}
