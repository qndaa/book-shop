package com.shop.book.appbackend.dto;

import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.UUID;

@Data
@NoArgsConstructor
public class CartItemDTO {
    UUID id;
    Integer quantity;
}
