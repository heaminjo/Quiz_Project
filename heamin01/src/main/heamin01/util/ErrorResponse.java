package com.example.heamin01.util;

import lombok.*;
import org.springframework.http.HttpStatus;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
// 에러 시 반환될 DTO
public class ErrorResponse {
    private HttpStatus status;
    private String message;
    private String code;
}
