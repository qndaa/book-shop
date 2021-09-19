package com.shop.book.appbackend.controller;

import com.auth0.jwt.JWT;
import com.auth0.jwt.JWTVerifier;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.interfaces.DecodedJWT;
import com.shop.book.appbackend.dto.CartItemDTO;
import com.shop.book.appbackend.service.ShoppingCartService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;

@RequiredArgsConstructor
@RestController
@RequestMapping(value = "/api/shoppingCart", produces = MediaType.APPLICATION_JSON_VALUE)
public class ShoppingCartController {

    private final ShoppingCartService shoppingCartService;


    @PreAuthorize("hasRole('ROLE_CUSTOMER')")
    @RequestMapping(method = RequestMethod.POST)
    public ResponseEntity<?> addToShoppingCart(HttpServletRequest request, @RequestBody CartItemDTO cartItem) {
        String authorizationHeader = request.getHeader(HttpHeaders.AUTHORIZATION);
        String refresh_token = authorizationHeader.substring("Bearer ".length());
        Algorithm algorithm = Algorithm.HMAC256("secret".getBytes());
        JWTVerifier verifier = JWT.require(algorithm).build();
        DecodedJWT decodedJWT = verifier.verify(refresh_token);
        String username = decodedJWT.getSubject();
        return new ResponseEntity<>(shoppingCartService.addOrderLine(username, cartItem), HttpStatus.OK);
    }

    @PreAuthorize("hasRole('ROLE_CUSTOMER')")
    @RequestMapping(method = RequestMethod.POST, value = "/update")
    public ResponseEntity<?> updateToShoppingCart(HttpServletRequest request, @RequestBody CartItemDTO cartItem) {
        String authorizationHeader = request.getHeader(HttpHeaders.AUTHORIZATION);
        String refresh_token = authorizationHeader.substring("Bearer ".length());
        Algorithm algorithm = Algorithm.HMAC256("secret".getBytes());
        JWTVerifier verifier = JWT.require(algorithm).build();
        DecodedJWT decodedJWT = verifier.verify(refresh_token);
        String username = decodedJWT.getSubject();
        return new ResponseEntity<>(shoppingCartService.updateOrderLine(username, cartItem), HttpStatus.OK);
    }

    @PreAuthorize("hasRole('ROLE_CUSTOMER')")
    @RequestMapping(method = RequestMethod.POST, value = "/delete")
    public ResponseEntity<?> deleteShopingCart(HttpServletRequest request, @RequestBody CartItemDTO cartItem) {
        String authorizationHeader = request.getHeader(HttpHeaders.AUTHORIZATION);
        String refresh_token = authorizationHeader.substring("Bearer ".length());
        Algorithm algorithm = Algorithm.HMAC256("secret".getBytes());
        JWTVerifier verifier = JWT.require(algorithm).build();
        DecodedJWT decodedJWT = verifier.verify(refresh_token);
        String username = decodedJWT.getSubject();
        return new ResponseEntity<>(shoppingCartService.deleteOrderLine(username, cartItem), HttpStatus.OK);
    }


    @PreAuthorize("hasRole('ROLE_CUSTOMER')")
    @RequestMapping(method = RequestMethod.GET)
    public ResponseEntity<?> getShoppingCart(HttpServletRequest request) {
        String authorizationHeader = request.getHeader(HttpHeaders.AUTHORIZATION);
        String refresh_token = authorizationHeader.substring("Bearer ".length());
        Algorithm algorithm = Algorithm.HMAC256("secret".getBytes());
        JWTVerifier verifier = JWT.require(algorithm).build();
        DecodedJWT decodedJWT = verifier.verify(refresh_token);
        String username = decodedJWT.getSubject();
        return new ResponseEntity<>(shoppingCartService.getShoppingCart(username), HttpStatus.OK);
    }




}
