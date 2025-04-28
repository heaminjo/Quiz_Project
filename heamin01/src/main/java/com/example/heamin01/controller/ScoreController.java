package com.example.heamin01.controller;

import com.example.heamin01.dto.scoreDto.ScoreRequestDTO;
import com.example.heamin01.entity.Score;

import com.example.heamin01.service.ScoreService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/score")
public class ScoreController{

    @Autowired(required = false)
    ScoreService scoreService;

    @GetMapping("/insertScore")
    public ResponseEntity<?> insertScore(@RequestBody ScoreRequestDTO dto){
        return scoreService.insertScore(dto);
    }
}
