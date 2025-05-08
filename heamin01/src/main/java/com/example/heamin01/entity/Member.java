package com.example.heamin01.entity;

import groovyjarjarantlr4.v4.runtime.misc.NotNull;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import java.time.LocalDate;
import java.util.Date;

@Entity
@Getter @Setter
@NoArgsConstructor
@AllArgsConstructor
@EntityListeners(value={AuditingEntityListener.class})
public class Member extends BaseEntity{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private Long id;
    @Column(length = 50 ,columnDefinition="text")
    private String email;
    @Column(length = 100,columnDefinition = "password",updatable = false)
    private String password;
    @Column(length = 10, columnDefinition = "text")
    private String name;
    @Column(columnDefinition = "date")
    private LocalDate birth;
    @Column(length = 100,columnDefinition = "text")
    private String profileImage;

}
