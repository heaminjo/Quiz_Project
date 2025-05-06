package com.example.heamin01.service;

import com.example.heamin01.dto.QuizDTO;
import com.example.heamin01.entity.Category;
import com.example.heamin01.entity.Quiz;
import com.example.heamin01.mapper.MemberMapper;
import com.example.heamin01.repository.QuizRepository;
import com.example.heamin01.util.ErrorResponse;
import com.example.heamin01.util.exception.NotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.*;
import java.util.function.Function;

@Service
public class QuizService {
    @Autowired(required = false)
    QuizRepository quizRepository;

    @Autowired(required = false)
    MemberMapper mapper;

    //문제 출제(실전문제 20개 ,연습문제 10개)
    public ResponseEntity<?> quizList(Long category){
        Random rand = new Random();
        Set<Integer> set = new HashSet<>();
        List<Quiz> list= new ArrayList<>();

        if(quizRepository.existsById(category)) throw new NotFoundException("존재하지 않는 카테고리 입니다.");

        if(category == 0){
            //중복되지않게 set에 난수
            while(set.size() <20){
                set.add(rand.nextInt(90)+1);}
            list = quizRepository.findByQuiz(set);
        }else if(category >=1 && category <=9){
            list = quizRepository.findByCategory_CategoryId(category);
            Collections.shuffle(list);
        }
        //퀴즈를 받아 dto로 변환하는 인터페이스
        Function<Quiz,QuizDTO> fn = (quiz) -> mapper.toQuizDto(quiz);
        List<QuizDTO> response = list.stream().map(fn).toList();

        return ResponseEntity.ok(response);
    }
}
