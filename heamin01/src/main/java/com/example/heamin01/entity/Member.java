package com.example.heamin01.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;
import java.util.Date;

@Entity
@Getter @Setter
@AllArgsConstructor
public class Member {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private Long id;
    @Column(length = 50 ,columnDefinition="text")
    private String email;
    @Column(length = 100,columnDefinition = "password")
    private String password;
    @Column(length = 10, columnDefinition = "text")
    private String name;
    @Column(columnDefinition = "date")
    private LocalDate birth;
    @Column(length = 100,columnDefinition = "text")
    private String profileImage;
}
