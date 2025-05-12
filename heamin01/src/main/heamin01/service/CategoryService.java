package com.example.heamin01.service;

import com.example.heamin01.dto.CategoryResponseDTO;
import com.example.heamin01.entity.Category;
import com.example.heamin01.mapper.MemberMapper;
import com.example.heamin01.repository.CategoryRepository;
import com.example.heamin01.util.ErrorResponse;
import com.example.heamin01.util.exception.NotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class CategoryService {
    private final CategoryRepository categoryRepository;
    private final MemberMapper mapper;
    public CategoryResponseDTO selectCategory(Long id){
        Category  category = categoryRepository.findById(id).orElseThrow(()-> new NotFoundException("존재하지 않는 카테고리 입니다."));

        return mapper.toCategoryDTO(category);
    }
}
