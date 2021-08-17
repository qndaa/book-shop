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
@Table(name = "locations")
public class Location {

    @Id
    @GeneratedValue(generator = "uuid2")
    @GenericGenerator(name = "uuid2", strategy = "uuid2")
    @Column(name = "location_id", nullable = false, unique = true)
    private UUID locationId;

    @Column(name = "number", nullable = false)
    private String number;

    @Column(name = "longitude")
    private Double longitude;

    @Column(name = "latitude")
    private Double latitude;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "street_id", nullable = false)
    private Street street;

    @JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "orderId")
    @JsonIdentityReference(alwaysAsId = true)
    @OneToMany(mappedBy = "location")
    private Set<Order> orders;

}
