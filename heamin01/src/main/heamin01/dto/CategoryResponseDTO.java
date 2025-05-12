package com.example.heamin01.dto;

import jakarta.persistence.Column;
import lombok.Data;
import lombok.ToString;

@Data
@ToString
public class CategoryResponseDTO {
    private Long categoryId;
    private String name;
    private String introduction;
}
