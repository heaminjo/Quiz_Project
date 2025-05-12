package com.example.heamin01.util.exception;

import com.example.heamin01.util.CustomExceptionHandler;

public class PropertyException extends RuntimeException {
    public PropertyException(String message) {
        super(message);
    }
}
