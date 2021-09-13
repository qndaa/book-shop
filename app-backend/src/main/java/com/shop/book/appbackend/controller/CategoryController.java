package com.shop.book.appbackend.controller;


import com.shop.book.appbackend.exceptions.UniqueEmailException;
import com.shop.book.appbackend.exceptions.UniqueNameException;
import com.shop.book.appbackend.exceptions.UniqueUsernameException;
import com.shop.book.appbackend.model.Category;
import com.shop.book.appbackend.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/api/category", produces = MediaType.APPLICATION_JSON_VALUE)
public class CategoryController {

    private final CategoryService categoryService;

    @Autowired
    public CategoryController(CategoryService categoryService) {
        this.categoryService = categoryService;
    }


    @RequestMapping(method = RequestMethod.GET)
    public ResponseEntity<List<Category>> getAllCategories() {
        return new ResponseEntity<>(categoryService.getAllCategories(), HttpStatus.OK);
    }

    @RequestMapping(method = RequestMethod.POST)
    public ResponseEntity<?> createCategory(@RequestBody Category category) {
        try {
            return new ResponseEntity<>(categoryService.createCategory(category), HttpStatus.CREATED);
        } catch (UniqueNameException e) {
            return new ResponseEntity<>(e, HttpStatus.BAD_REQUEST);
        }
    }

}
