package com.example.heamin01.controller;

import com.example.heamin01.dto.scoreDto.ScoreRequestDTO;
import com.example.heamin01.dto.scoreDto.ScoreResponseDTO;
import com.example.heamin01.entity.Score;

import com.example.heamin01.service.ScoreService;
import com.example.heamin01.dto.page.PageRequestDTO;
import com.example.heamin01.dto.page.PageResponse;
import jakarta.servlet.http.HttpSession;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/score")
@CrossOrigin(origins = "http://localhost:3000")
@Validated
public class ScoreController{

    private static final Logger log = LoggerFactory.getLogger(ScoreController.class);
    @Autowired(required = false)
    ScoreService scoreService;

    //점수 결과 등록
    @GetMapping("/insert")
    public ResponseEntity<?> insertScore(@RequestBody ScoreRequestDTO dto){
        return scoreService.insertScore(dto);
    }

    //점수 목록
    @PostMapping("/list")
    public ResponseEntity<PageResponse<ScoreResponseDTO>> userScoreList(@RequestBody PageRequestDTO dto){
        log.info("sessionID=> "+ dto.getMemberId());
        return ResponseEntity.ok(scoreService.userScoreList(dto));
    }
    //최고 점수(실전 모의 고사 기준)
    @GetMapping("/bestScore")
    public ResponseEntity<?> userBestScore(@RequestParam("id")Long id){

        return scoreService.userBestScore(id);
    }

    //랭킹 순위
    @GetMapping("/rank")
    public ResponseEntity<?> rakeList(){
        return ResponseEntity.ok(scoreService.rankList());
    }
}
