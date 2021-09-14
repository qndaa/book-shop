package com.shop.book.appbackend.service.implementation;

import com.shop.book.appbackend.exceptions.UniqueNameException;
import com.shop.book.appbackend.model.Language;
import com.shop.book.appbackend.repository.LanguageRepository;
import com.shop.book.appbackend.service.LanguageService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Slf4j
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

    @Override
    public Language create(Language language) {
        Language lang = languageRepository.getLanguageByName(language.getName());
        System.out.println(lang);
        if (lang != null){
            log.error("Language already exists in database!");
            throw new UsernameNotFoundException("Language already exists in database!");
        }
        return languageRepository.save(language);
    }

    @Override
    public Language update(Language language) {
        Language lang = languageRepository.findById(language.getLanguageId()).get();
        lang.setName(language.getName());
        return languageRepository.save(lang);
    }
}
