package com.example.heamin01.dto;

import lombok.*;

import java.time.LocalDate;

@Getter
@Setter
@NoArgsConstructor @AllArgsConstructor
public class LoginResponseDTO {
    private Long id;
    private String name;
    private String profileImage;
}
