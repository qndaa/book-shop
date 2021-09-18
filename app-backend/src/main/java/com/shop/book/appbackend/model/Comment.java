package com.shop.book.appbackend.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIdentityReference;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import com.shop.book.appbackend.model.enums.StatusOfComment;
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
@Table(name = "comments")
public class Comment {

    @Id
    @GeneratedValue(generator = "uuid2")
    @GenericGenerator(name = "uuid2", strategy = "uuid2")
    @Column(name = "comment_id", nullable = false, unique = true)
    private UUID commentId;

    @Column(name = "content", nullable = false)
    private String content;

    @Column(name = "status", nullable = false)
    private StatusOfComment status;

    @JsonFormat(pattern="yyyy-MM-dd HH:mm:ss")
    @Column(name = "date", nullable = false)
    private Date date;

    @JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "bookId")
    @JsonIdentityReference(alwaysAsId = true)
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "book_id", nullable = false)
    private Book book;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "user_id", nullable = false)
    private Customer customer;

}
