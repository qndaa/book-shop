package com.shop.book.appbackend.model;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIdentityReference;
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
@Table(name = "cities")
public class City {

    @Id
    @GeneratedValue(generator = "uuid2")
    @GenericGenerator(name = "uuid2", strategy = "uuid2")
    @Column(name = "city_id", nullable = false, unique = true)
    private UUID cityId;

    @Column(name = "name", unique = true, nullable = false)
    private String name;

    @Column(name = "zip_code", unique = true)
    private long zipCode;

    @JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "streetId")
    @JsonIdentityReference(alwaysAsId = true)
    @OneToMany(mappedBy = "city")
    private Set<Street> streets;
}
