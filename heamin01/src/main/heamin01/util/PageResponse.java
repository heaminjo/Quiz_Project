package com.example.heamin01.util;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class PageResponse<T> {
    private List<?>  content;
    private int page; //현재 페이지
    private int size; //한 페이지 크기
    private long totalElements; //전체 데이터 개수
    private int totalPages; //전체 페이지 개수
    private boolean last; //마지막 페이지인가
    private boolean first; //첫 페이지 인가
}
