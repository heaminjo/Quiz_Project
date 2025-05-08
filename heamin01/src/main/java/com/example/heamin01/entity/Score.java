package com.example.heamin01.entity;

import com.example.heamin01.dto.scoreDto.ScoreResponseDTO;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;
import java.util.Optional;

@Entity
@Getter @Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Score extends BaseEntity{
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

    public Score(int resultNum) {
        this.resultNum = resultNum;}

    public Score(Member member, Category category, int resultNum) {
    }

    public ScoreResponseDTO entityToDto(Score s) {
        ScoreResponseDTO dto = ScoreResponseDTO.builder()
                .member(s.getMember())
                .category(s.getCategory())
                .resultNum(s.getResultNum())
                .regDate(s.getRegDate())
                .build();
        return dto;
    }
}
