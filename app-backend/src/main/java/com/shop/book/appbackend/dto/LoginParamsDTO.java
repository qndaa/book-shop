package com.shop.book.appbackend.dto;

import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@Data
public class LoginParamsDTO {
    private String username;
    private String password;
}
