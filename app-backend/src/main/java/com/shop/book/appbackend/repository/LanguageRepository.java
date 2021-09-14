package com.shop.book.appbackend.repository;

import com.shop.book.appbackend.model.Language;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface LanguageRepository extends JpaRepository<Language, UUID> {

    Language getLanguageByName(String name);
    Language getLanguageByLanguageId(UUID languageId);
}
