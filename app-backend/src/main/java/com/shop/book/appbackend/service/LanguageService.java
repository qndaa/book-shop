package com.shop.book.appbackend.service;

import com.shop.book.appbackend.model.Language;

import java.util.List;

public interface LanguageService {
    List<Language> getAllLanguages();

    Language create(Language language);

    Language update(Language language);
}
