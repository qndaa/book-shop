package com.shop.book.appbackend.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@NoArgsConstructor
@Entity
@Table(name = "administrators")
@PrimaryKeyJoinColumn(name = "user_id")
public class Administrator extends User {

    @JsonIgnore
    @OneToMany(mappedBy = "administrator", fetch = FetchType.LAZY)
    private Set<Customer> customers = new HashSet<>();

}
