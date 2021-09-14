package com.shop.book.appbackend.dto;

import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@Data
public class UpdateAdministratorDTO {
    String firstName;
    String lastName;
    String username;
}
