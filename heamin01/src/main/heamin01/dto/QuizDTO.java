package com.example.heamin01.dto;

import com.example.heamin01.entity.Quiz;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor @NoArgsConstructor
public class QuizDTO {
    private String question;
    private String result;
    private String categoryName;
}
