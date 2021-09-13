package com.shop.book.appbackend.service.implementation;

import com.shop.book.appbackend.exceptions.UniqueNameException;
import com.shop.book.appbackend.model.Category;
import com.shop.book.appbackend.repository.CategoryRepository;
import com.shop.book.appbackend.service.CategoryService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Slf4j
public class CategoryServiceImplementation implements CategoryService {


    private final CategoryRepository categoryRepository;

    @Autowired
    public CategoryServiceImplementation(CategoryRepository categoryRepository) {
        this.categoryRepository = categoryRepository;
    }

    @Override
    public List<Category> getAllCategories() {
        return categoryRepository.findAll();
    }

    @Override
    public Category createCategory(Category category) {
        log.info("Saving new category!");
        Category existCategory = categoryRepository.getCategoryByName(category.getName());
        if (existCategory != null) {
            throw new UniqueNameException();
        }
        return categoryRepository.save(category);
    }
}
