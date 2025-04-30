package com.example.heamin01.controller;

import com.example.heamin01.dto.scoreDto.ScoreRequestDTO;
import com.example.heamin01.dto.scoreDto.ScoreResponseDTO;
import com.example.heamin01.entity.Score;

import com.example.heamin01.service.ScoreService;
import com.example.heamin01.util.PageRequestDTO;
import com.example.heamin01.util.PageResponse;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/score")
public class ScoreController{

    @Autowired(required = false)
    ScoreService scoreService;

    @GetMapping("/insertScore")
    public ResponseEntity<?> insertScore(@RequestBody ScoreRequestDTO dto){
        return scoreService.insertScore(dto);
    }
    @GetMapping("/scoreList")
    public ResponseEntity<PageResponse<Score>> userScoreList(HttpSession session,PageRequestDTO dto){
        return ResponseEntity.ok(scoreService.userScoreList(session,dto));
    }
    //최고 점수(실전 모의 고사 기준)
    @GetMapping("/bestScore")
    public ResponseEntity<?> userBestScore(HttpSession session){
        return scoreService.userBestScore(session);
    }
}
