package com.shop.book.appbackend.service;

import com.shop.book.appbackend.model.Category;

import java.util.List;


public interface CategoryService {
    List<Category> getAllCategories();

    Category createCategory(Category category);
}
