package com.example.heamin01.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
// 에러 시 반환될 DTO
public class ErrorResponseDTO {
    private String status;
    private String message;
    private String details;
}
