package com.shop.book.appbackend.dto;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class CityDTO {
    String name;
    Long zipCode;
}
