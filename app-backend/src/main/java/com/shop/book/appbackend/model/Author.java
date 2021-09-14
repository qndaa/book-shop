package com.shop.book.appbackend.model;


import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIdentityReference;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import lombok.*;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;
import java.util.UUID;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "authors")
public class Author {

    @Id
    @GeneratedValue(generator = "uuid2")
    @GenericGenerator(name = "uuid2", strategy = "uuid2")
    @Column(name = "author_id", nullable = false, unique = true)
    private UUID authorId;

    @Column(name = "first_name", nullable = false)
    private String firstName;

    @Column(name = "last_name", nullable = false)
    private String lastName;

    @Column(name = "biography", length = 2000)
    private String biography;

    @Column(name = "year_of_birth")
    private Integer yearOfBirth;

    @Column(name = "year_of_death")
    private Integer yearOfDeath;

    @Column(name = "image")
    private String image;
    
    @ManyToMany(mappedBy = "authors")
    private Set<Book> books = new HashSet<>();


}
