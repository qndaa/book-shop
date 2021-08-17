package com.shop.book.appbackend.controller;

import com.shop.book.appbackend.model.Language;
import com.shop.book.appbackend.service.LanguageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(value = "/api/language", produces = MediaType.APPLICATION_JSON_VALUE)
public class LanguageController {

    private final LanguageService languageService;

    @Autowired
    public LanguageController(LanguageService languageService) {
        this.languageService = languageService;
    }

    @RequestMapping(method = RequestMethod.GET)
    public ResponseEntity<List<Language>> getAllCategories() {
        return new ResponseEntity<>(languageService.getAllLanguages(), HttpStatus.OK);
    }
}
