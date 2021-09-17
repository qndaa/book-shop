package com.shop.book.appbackend.dto;

import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.UUID;

@Data
@NoArgsConstructor
public class UpdateBookDTO {

    UUID id;
    Double price;
    Integer quantity;

}
