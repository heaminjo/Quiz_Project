package com.example.heamin01.util;


import com.example.heamin01.util.exception.IncorrectFormat;
import com.example.heamin01.util.exception.NotFoundException;
import com.example.heamin01.util.exception.PropertyException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.util.Map;
import java.util.function.Function;

//Rest API요청에서 들어오는 모든 예외를 현재 클래스에서 처리
@RestControllerAdvice
public class CustomExceptionHandler {
    //필수 값이 누락되었을 떄 발생
    @ExceptionHandler(PropertyException.class)
    public ResponseEntity<ErrorResponse> PropertyValue(PropertyException e){
        return ResponseEntity
                .status(HttpStatus.BAD_REQUEST)
                .body(new ErrorResponse(HttpStatus.BAD_REQUEST,e.getMessage(),"001"));
    }

    //잘못된 형식
    @ExceptionHandler(IncorrectFormat.class)
    public ResponseEntity<ErrorResponse> IncorrectFormat(IncorrectFormat e){
        return ResponseEntity
                .status(HttpStatus.BAD_REQUEST)
                .body(new ErrorResponse(HttpStatus.BAD_REQUEST,e.getMessage(),"002"));
    }

    //존재하지않는 데이터
    @ExceptionHandler(NotFoundException.class)
    public ResponseEntity<ErrorResponse> NotFoundException(NotFoundException e){
        return ResponseEntity
                .status(HttpStatus.NOT_FOUND)
                .body(new ErrorResponse(HttpStatus.NOT_FOUND,e.getMessage(),"003"));
    }
}
