package com.shop.book.appbackend.model;

import com.shop.book.appbackend.model.enums.Gender;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.util.Date;
import java.util.UUID;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "customers")
public class Customer extends User {

    @Id
    @GeneratedValue(generator = "uuid2")
    @GenericGenerator(name = "uuid2", strategy = "uuid2")
    @Column(name = "customer_id", nullable = false, unique = true)
    private UUID customerId;

    @Column(name = "blocked", nullable = false)
    private boolean blocked;

    @Column(name = "email", nullable = false, unique = true)
    private String email;

    @Column(name = "gender")
    private Gender gender;

    @Column(name = "phone_number", nullable = false)
    private String phoneNumber;

    @Column(name = "date_of_birth")
    private Date dateOfBirth;


}
