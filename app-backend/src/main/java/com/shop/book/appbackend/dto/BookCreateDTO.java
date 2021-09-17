package com.shop.book.appbackend.dto;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.util.UUID;

@Data
@NoArgsConstructor
@ToString
public class BookCreateDTO {

    String title;
    String isbn;
    Integer quantity;
    Double price;
    String description;
    String image;
    UUID [] categoriesIds;
    UUID [] authorsIds;
    UUID languageId;
}
