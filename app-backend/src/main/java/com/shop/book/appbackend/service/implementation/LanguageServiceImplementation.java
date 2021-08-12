package com.shop.book.appbackend.service.implementation;

import com.shop.book.appbackend.model.Language;
import com.shop.book.appbackend.repository.LanguageRepository;
import com.shop.book.appbackend.service.LanguageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LanguageServiceImplementation implements LanguageService {

    private final LanguageRepository languageRepository;

    @Autowired
    public LanguageServiceImplementation(LanguageRepository languageRepository) {
        this.languageRepository = languageRepository;
    }

    @Override
    public List<Language> getAllLanguages() {
        return languageRepository.findAll();
    }
}
