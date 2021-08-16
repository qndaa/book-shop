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
@Table(name = "streets")
public class Street {

    @Id
    @GeneratedValue(generator = "uuid2")
    @GenericGenerator(name = "uuid2", strategy = "uuid2")
    @Column(name = "street_id", nullable = false, unique = true)
    private UUID streetId;

    @Column(name = "name", unique = true, nullable = false)
    private String name;


    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "city_id", nullable = false)
    private City city;

    @JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "locationId")
    @JsonIdentityReference(alwaysAsId = true)
    @OneToMany(mappedBy = "street")
    private Set<Location> locations;
}
