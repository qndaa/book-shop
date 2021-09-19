package com.shop.book.appbackend.dto;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;


@Data
@NoArgsConstructor
@ToString
public class OrderDTO {

    String city;
    String street;
    Integer number;
}
