package com.example.heamin01.controller;

import com.example.heamin01.dto.QuizDTO;
import com.example.heamin01.service.QuizService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/quiz")
@CrossOrigin(origins = "http://localhost:3000")
public class QuizController {

    @Autowired(required = false)
    QuizService quizService;

    //문제 출제
    @GetMapping("/exem")
    public ResponseEntity<?> exemQuiz(@RequestParam("category") Long category){
        return quizService.quizList(category);
    }
}
