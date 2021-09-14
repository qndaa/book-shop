package com.shop.book.appbackend.model;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIdentityReference;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import com.shop.book.appbackend.model.enums.Gender;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.util.Date;
import java.util.Set;
import java.util.UUID;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "customers")
@PrimaryKeyJoinColumn(name = "user_id")
public class Customer extends User {

    @Column(name = "blocked", nullable = false)
    private boolean blocked;

    @Column(name = "email", nullable = false, unique = true)
    private String email;

    @Column(name = "gender")
    private Gender gender;

    @Column(name = "phone_number")
    private String phoneNumber;

    @Column(name = "date_of_birth")
    private String dateOfBirth;

    @JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "commentId")
    @JsonIdentityReference(alwaysAsId = true)
    @OneToMany(mappedBy = "customer")
    private Set<Comment> comments;

    @JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "markId")
    @JsonIdentityReference(alwaysAsId = true)
    @OneToMany(mappedBy = "customer")
    private Set<Mark> marks;

    @JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "orderId")
    @JsonIdentityReference(alwaysAsId = true)
    @OneToMany(mappedBy = "customer")
    private Set<Order> orders;

}
