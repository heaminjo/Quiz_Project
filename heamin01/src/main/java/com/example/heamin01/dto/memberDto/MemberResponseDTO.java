package com.example.heamin01.dto.memberDto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@NoArgsConstructor @AllArgsConstructor
public class MemberResponseDTO {
    private Long id;
    private String email;
    private String name;
    private LocalDate birth;
    private String profileImage;
}
