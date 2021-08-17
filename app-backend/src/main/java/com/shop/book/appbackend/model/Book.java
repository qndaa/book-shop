package com.shop.book.appbackend.model;


import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIdentityReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.util.Set;
import java.util.UUID;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "books")
public class Book {

    @Id
    @GeneratedValue(generator = "uuid2")
    @GenericGenerator(name = "uuid2", strategy = "uuid2")
    @Column(name = "book_id", nullable = false, unique = true)
    private UUID bookId;

    @Column(name = "title", unique = true, nullable = false)
    private String title;

    @Column(name = "isbn", unique = true)
    private String isbn;

    @Column(name = "quantity")
    private int quantity;

    @Column(name = "price", nullable = false)
    private double price;

    @ManyToMany
    @JoinTable(
            name = "books_categories",
            joinColumns = @JoinColumn(name = "book_id"),
            inverseJoinColumns = @JoinColumn(name = "category_id"))
    private Set<Category> categories;


    @JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "authorId")
    @JsonIdentityReference(alwaysAsId = true)
    @ManyToMany
    @JoinTable(
            name = "books_by_authors",
            joinColumns = @JoinColumn(name = "book_id"),
            inverseJoinColumns = @JoinColumn(name = "author_id"))
    private Set<Author> authors;


    @JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "languageId")
    @JsonIdentityReference(alwaysAsId = true)
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "language_id", nullable = false)
    private Language language;


    @JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "commentId")
    @JsonIdentityReference(alwaysAsId = true)
    @OneToMany(mappedBy = "book")
    private Set<Comment> comments;

    @JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "markId")
    @JsonIdentityReference(alwaysAsId = true)
    @OneToMany(mappedBy = "book")
    private Set<Mark> marks;

    @JsonIgnore
    @OneToMany(mappedBy = "book")
    private Set<OrderLine> orderLines;

}
