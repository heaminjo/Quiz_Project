package com.example.heamin01.controller;

import com.example.heamin01.dto.CategoryResponseDTO;
import com.example.heamin01.service.CategoryService;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/category")
@CrossOrigin(origins = "http://localhost:3000")
@RequiredArgsConstructor
@Log4j2
public class CategoryController {
    private final CategoryService categoryService;

    @GetMapping("/select/{id}")
    public ResponseEntity<CategoryResponseDTO> selectOne(@PathVariable Long id){
        return ResponseEntity.ok(categoryService.selectCategory(id));
    }
}
