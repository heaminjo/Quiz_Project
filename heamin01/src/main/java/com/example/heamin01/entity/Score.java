package com.example.heamin01.entity;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;
import java.util.Optional;

@Entity
@Getter @Setter
@AllArgsConstructor
@NoArgsConstructor
public class Score {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private Long scoreId;
    //회원Id
    @ManyToOne
    @JoinColumn(name = "member_id")
    private Member member;

    //해당하는 엔티티로 타입을 맞춘다
    //그래도 DB에는 id만 들어가게 된다.
    @ManyToOne
    @JoinColumn(name = "category_id")
    private Category category;

    @Column
    private int resultNum;
    @Column(columnDefinition = "date")
    private LocalDate createDate = LocalDate.now();

    public Score(int resultNum, LocalDate createDate) {
        this.resultNum = resultNum;
        this.createDate = createDate;
    }
}
