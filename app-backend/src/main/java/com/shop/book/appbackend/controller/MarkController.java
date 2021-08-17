package com.shop.book.appbackend.controller;

import com.shop.book.appbackend.model.Mark;
import com.shop.book.appbackend.service.MarkService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

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
}
