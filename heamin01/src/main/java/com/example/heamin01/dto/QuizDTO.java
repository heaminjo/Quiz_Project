package com.example.heamin01.dto;

import com.example.heamin01.entity.Category;
import com.example.heamin01.entity.Quiz;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor @NoArgsConstructor
//문제 출제할때 쓰일 DTO이다.
public class QuizDTO {
    private String question;
    private String result;
    private Category category;
}
