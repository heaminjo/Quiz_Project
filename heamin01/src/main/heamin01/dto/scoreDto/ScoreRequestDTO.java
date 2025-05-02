package com.example.heamin01.dto.scoreDto;

import com.example.heamin01.entity.Score;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;


@Getter
@Setter
@NoArgsConstructor
public class ScoreRequestDTO {
    //멤버 id
    private Long memberId;
    private Long categoryId;
    private int resultNum;
    private LocalDate createDate = LocalDate.now();

    public Score toEntity(){
        return new Score(resultNum,createDate);
    }
}
