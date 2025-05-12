package com.example.heamin01.dto;

import lombok.*;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.User;

import java.time.LocalDate;
import java.util.Collection;

@Getter
@Setter
@NoArgsConstructor @AllArgsConstructor
public class LoginResponseDTO {
    private Long id;
    private String name;
    private String profileImage;

}
