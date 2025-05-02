package com.example.heamin01.util;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
// 에러 시 반환될 DTO
public class ErrorResponse {
    private String status;
    private String message;
    private String details;
}
