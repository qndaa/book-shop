package com.shop.book.appbackend.model;

import lombok.*;

import javax.persistence.*;

@NoArgsConstructor
@Entity
@Table(name = "administrators")
@PrimaryKeyJoinColumn(name = "user_id")
public class Administrator extends User {

}
