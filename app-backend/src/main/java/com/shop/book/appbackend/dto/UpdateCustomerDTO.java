package com.shop.book.appbackend.dto;

import com.shop.book.appbackend.model.enums.Gender;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@Data
public class UpdateCustomerDTO {
    String firstName;
    String lastName;
    String username;
    String email;
    Gender gender;
    String dateOfBirth;
    String phoneNumber;
}
