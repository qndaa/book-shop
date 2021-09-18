package com.shop.book.appbackend.controller;

import com.auth0.jwt.JWT;
import com.auth0.jwt.JWTVerifier;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.interfaces.DecodedJWT;
import com.shop.book.appbackend.dto.CommentDTO;
import com.shop.book.appbackend.dto.MarkDTO;
import com.shop.book.appbackend.model.Mark;
import com.shop.book.appbackend.service.MarkService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

@RestController
@RequestMapping(value = "/api/mark", produces = MediaType.APPLICATION_JSON_VALUE)
public class MarkController {

    private final MarkService markService;

    @Autowired
    public MarkController(MarkService markService) {
        this.markService = markService;
    }

    @RequestMapping(method = RequestMethod.GET)
    public ResponseEntity<List<Mark>> getAllMarks() {
        return new ResponseEntity<>(markService.getAllMarks(), HttpStatus.OK);
    }

    @PreAuthorize("hasRole('ROLE_CUSTOMER')")
    @RequestMapping(method = RequestMethod.POST)
    public ResponseEntity<?> createMark (HttpServletRequest request, @RequestBody MarkDTO markDTO) {
        try {
            String authorizationHeader = request.getHeader(HttpHeaders.AUTHORIZATION);
            String refresh_token = authorizationHeader.substring("Bearer ".length());
            Algorithm algorithm = Algorithm.HMAC256("secret".getBytes());
            JWTVerifier verifier = JWT.require(algorithm).build();
            DecodedJWT decodedJWT = verifier.verify(refresh_token);
            String username = decodedJWT.getSubject();
            return new ResponseEntity<>(markService.create(markDTO, username), HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(e, HttpStatus.BAD_REQUEST);
        }
    }
}
