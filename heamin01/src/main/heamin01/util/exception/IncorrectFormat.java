package com.example.heamin01.util.exception;

//잘못된 형식
public class IncorrectFormat extends RuntimeException{
    public IncorrectFormat(String message) {
        super(message);
    }
}
