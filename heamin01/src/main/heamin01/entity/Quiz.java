package com.example.heamin01.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Entity
@Data
@NoArgsConstructor @AllArgsConstructor
public class Quiz {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private Long quizId;

    @ManyToOne
    @JoinColumn(name = "category_id")
    private Category category;

    @Column(length = 50)
    private String question;

    @Column(length = 50)
    private String result;
}
