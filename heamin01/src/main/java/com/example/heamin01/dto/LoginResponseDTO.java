package com.example.heamin01.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@NoArgsConstructor @AllArgsConstructor
public class LoginResponseDTO {
    private Long id;
    private String name;
    private String profileImage;


}
