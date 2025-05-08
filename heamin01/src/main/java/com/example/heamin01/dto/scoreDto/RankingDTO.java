package com.example.heamin01.dto.scoreDto;

import com.example.heamin01.entity.Member;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor @NoArgsConstructor
public class RankingDTO {
    private Long memberId;
    private int resultNum;
}
