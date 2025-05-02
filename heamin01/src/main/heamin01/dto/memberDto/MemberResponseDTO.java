package com.example.heamin01.dto.memberDto;

import lombok.*;

import java.time.LocalDate;

@Getter
@Setter
@NoArgsConstructor @AllArgsConstructor
public class MemberResponseDTO {
    private Long id;
    private String email;
    private String name;
    private LocalDate birth;
    private String profileImage;
}
