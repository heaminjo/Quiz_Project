package com.example.heamin01.dto.scoreDto;

import com.example.heamin01.entity.Category;
import com.example.heamin01.entity.Member;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class ScoreResponseDTO {
    private Member member;
    private Category category;
    private int resultNum;
    private LocalDate createDate;
}
