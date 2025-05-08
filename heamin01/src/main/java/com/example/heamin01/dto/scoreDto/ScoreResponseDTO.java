package com.example.heamin01.dto.scoreDto;

import com.example.heamin01.entity.Category;
import com.example.heamin01.entity.Member;
import com.example.heamin01.entity.Score;
import groovyjarjarantlr4.runtime.BitSet;
import lombok.*;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ScoreResponseDTO {
    private Member member;
    private Category category;
    private int resultNum;
    private LocalDateTime regDate;

}
