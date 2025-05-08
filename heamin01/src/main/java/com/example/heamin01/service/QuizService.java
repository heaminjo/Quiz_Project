package com.example.heamin01.service;

import com.example.heamin01.dto.QuizDTO;
import com.example.heamin01.entity.Category;
import com.example.heamin01.entity.Quiz;
import com.example.heamin01.mapper.MemberMapper;
import com.example.heamin01.repository.CategoryRepository;
import com.example.heamin01.repository.QuizRepository;
import com.example.heamin01.util.ErrorResponse;
import com.example.heamin01.util.exception.NotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.*;
import java.util.function.Function;
import java.util.function.Supplier;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@Service
@RequiredArgsConstructor
public class QuizService {
    private final CategoryRepository categoryRepository;
    private final MemberMapper mapper;
    private final QuizRepository quizRepository;
    //문제 출제(실전문제 20개 ,연습문제 10개)
    public ResponseEntity<?> quizList(Long categoryId){
//        Random rand = new Random();
        Supplier<Integer> random = ()-> new Random().nextInt(90)+1;
        List<Quiz> list= new ArrayList<>();

        if(!categoryRepository.existsById(categoryId)) throw new NotFoundException("존재하지 않는 카테고리 입니다.");

        if(categoryId == 0){
            //중복되지않게 set에 난수
            Set<Integer> set = Stream.generate(random).distinct().limit(20).collect(Collectors.toSet());
            list = quizRepository.findByQuiz(set);
        }else if(categoryId >=1 && categoryId <=9){
            list = quizRepository.findByCategory_CategoryId(categoryId);
            Collections.shuffle(list);
        }
        //퀴즈를 받아 dto로 변환하는 인터페이스
        Function<Quiz,QuizDTO> fn = mapper::toQuizDto;
        List<QuizDTO> response = list.stream().map(fn).toList();


        return ResponseEntity.ok(response);
    }
}
