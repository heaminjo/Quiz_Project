package com.example.heamin01.util;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

//커스텀 응답 객체
//성공 실패 여부를 보낼때 사용한다.
@Getter
@Setter
@AllArgsConstructor
public class ApiResponse<T> {
    private boolean success; //성공 / 실패 여부
    private T data; //응답 데이터(타입은 미정)
    private String message;

    public ApiResponse(boolean success,String message ) {
        this.message = message;
        this.success = success;
    }
}
