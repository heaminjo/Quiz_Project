package com.example.heamin01.dto.scoreDto;

import com.example.heamin01.entity.Score;
import lombok.*;

import java.time.LocalDate;


@Getter
@Setter
@NoArgsConstructor

public class ScoreRequestDTO {
    //멤버 id
    private Long memberId;
    private Long categoryId;
    private int resultNum;


    public Score toEntity(){
        return new Score(resultNum);
    }
}
