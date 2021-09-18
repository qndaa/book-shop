package com.shop.book.appbackend.controller;

import com.auth0.jwt.JWT;
import com.auth0.jwt.JWTVerifier;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.interfaces.DecodedJWT;
import com.shop.book.appbackend.dto.CommentDTO;
import com.shop.book.appbackend.model.Comment;
import com.shop.book.appbackend.service.CommentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping(value = "/api/comment", produces = MediaType.APPLICATION_JSON_VALUE)
public class CommentController {

    private final CommentService commentService;

    @Autowired
    public CommentController(CommentService commentService) {
        this.commentService = commentService;
    }

    @RequestMapping(method = RequestMethod.GET)
    public ResponseEntity<List<Comment>> getAllComments() {
        return new ResponseEntity<>(commentService.getAllComments(), HttpStatus.OK);
    }

    @RequestMapping(method = RequestMethod.POST)
    public ResponseEntity<?> createComment(HttpServletRequest request, @RequestBody CommentDTO commentDTO) {
        try {
            String authorizationHeader = request.getHeader(HttpHeaders.AUTHORIZATION);
            String refresh_token = authorizationHeader.substring("Bearer ".length());
            Algorithm algorithm = Algorithm.HMAC256("secret".getBytes());
            JWTVerifier verifier = JWT.require(algorithm).build();
            DecodedJWT decodedJWT = verifier.verify(refresh_token);
            String username = decodedJWT.getSubject();
            return new ResponseEntity<>(commentService.create(commentDTO, username), HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(e, HttpStatus.BAD_REQUEST);
        }
    }

    @PreAuthorize("hasRole('ROLE_ADMINISTRATOR')")
    @RequestMapping(method = RequestMethod.POST, value = "/decline/{id}")
    public ResponseEntity<?> declineComment(@PathVariable UUID id) {
        try {
            return new ResponseEntity<>(commentService.decline(id), HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(e, HttpStatus.BAD_REQUEST);
        }
    }
    @PreAuthorize("hasRole('ROLE_ADMINISTRATOR')")
    @RequestMapping(method = RequestMethod.POST, value = "/approve/{id}")
    public ResponseEntity<?> approveComment(@PathVariable UUID id) {
        try {
            return new ResponseEntity<>(commentService.approve(id), HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(e, HttpStatus.BAD_REQUEST);
        }
    }
}
