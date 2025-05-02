package com.example.heamin01.service;

import com.example.heamin01.dto.QuizDTO;
import com.example.heamin01.entity.Quiz;
import com.example.heamin01.mapper.MemberMapper;
import com.example.heamin01.repository.QuizRepository;
import com.example.heamin01.util.ErrorResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.*;

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
        List<Quiz> list;

        if(category == 0){
            while(set.size() <20){
                set.add(rand.nextInt(90)+1);}
            list = quizRepository.findByQuiz(set);
        }else if(category >=1 && category <=9){
            list = quizRepository.findByCategory_CategoryId(category);
            Collections.shuffle(list);
        }else{
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(new ErrorResponse("error","존재하지 않는 카테고리","카테고리를 다시 선택해주세요"));}

        List<QuizDTO> response = new ArrayList<>();

        for(Quiz q:list){
            response.add(new QuizDTO(q.getQuestion(),q.getResult(),q.getCategory().getName()));
        }
        return ResponseEntity.ok(response);
    }
}
