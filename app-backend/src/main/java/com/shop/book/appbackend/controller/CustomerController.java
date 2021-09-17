package com.shop.book.appbackend.controller;

import com.auth0.jwt.JWT;
import com.auth0.jwt.JWTVerifier;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.interfaces.DecodedJWT;
import com.shop.book.appbackend.dto.UpdateAdministratorDTO;
import com.shop.book.appbackend.dto.UpdateCustomerDTO;
import com.shop.book.appbackend.exceptions.UniqueEmailException;
import com.shop.book.appbackend.exceptions.UniqueUsernameException;
import com.shop.book.appbackend.model.Customer;
import com.shop.book.appbackend.service.CustomerService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.*;


import javax.servlet.http.HttpServletRequest;
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

    @PreAuthorize("hasRole('ROLE_ADMINISTRATOR')")
    @RequestMapping(method = RequestMethod.POST, value = "/block/{username}")
    public ResponseEntity<?> blockCustomer(HttpServletRequest request, @PathVariable String username) {
        try {
            String authorizationHeader = request.getHeader(HttpHeaders.AUTHORIZATION);
            String refresh_token = authorizationHeader.substring("Bearer ".length());
            Algorithm algorithm = Algorithm.HMAC256("secret".getBytes());
            JWTVerifier verifier = JWT.require(algorithm).build();
            DecodedJWT decodedJWT = verifier.verify(refresh_token);
            String usernameAdministrator = decodedJWT.getSubject();
            Customer customer = customerService.block(username, usernameAdministrator);
            return new ResponseEntity<>(customer, HttpStatus.OK);
        } catch (UsernameNotFoundException e) {
            return new ResponseEntity<>(e, HttpStatus.BAD_REQUEST);
        }
    }

    @PreAuthorize("hasRole('ROLE_ADMINISTRATOR')")
    @RequestMapping(method = RequestMethod.POST, value = "/unblock/{username}")
    public ResponseEntity<?> unblockCustomer(HttpServletRequest request, @PathVariable String username) {
        try {
            String authorizationHeader = request.getHeader(HttpHeaders.AUTHORIZATION);
            String refresh_token = authorizationHeader.substring("Bearer ".length());
            Algorithm algorithm = Algorithm.HMAC256("secret".getBytes());
            JWTVerifier verifier = JWT.require(algorithm).build();
            DecodedJWT decodedJWT = verifier.verify(refresh_token);
            String usernameAdministrator = decodedJWT.getSubject();
            Customer customer = customerService.unblock(username, usernameAdministrator);
            return new ResponseEntity<>(customer, HttpStatus.OK);
        } catch (UsernameNotFoundException e) {
            return new ResponseEntity<>(e, HttpStatus.BAD_REQUEST);
        }
    }

}
