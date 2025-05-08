package com.example.heamin01.controller;

import com.example.heamin01.dto.scoreDto.ScoreRequestDTO;
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
@CrossOrigin(origins = "http://localhost:3000", allowCredentials = "true")
@Validated
public class ScoreController{

    private static final Logger log = LoggerFactory.getLogger(ScoreController.class);
    @Autowired(required = false)
    ScoreService scoreService;

    //점수 결과 등록
    @GetMapping("/insertScore")
    public ResponseEntity<?> insertScore(@RequestBody ScoreRequestDTO dto){
        return scoreService.insertScore(dto);
    }

    //점수 목록
    @GetMapping("/list")
    public ResponseEntity<PageResponse<Score>> userScoreList(HttpSession session,@RequestParam("page")int page, @RequestParam("size")int size){
        log.info("list 실행");
        PageRequestDTO dto = new PageRequestDTO();
        dto.setPage(page);
        dto.setSize(size);
        return ResponseEntity.ok(scoreService.userScoreList(session,dto));
    }
    //최고 점수(실전 모의 고사 기준)
    @GetMapping("/bestScore")
    public ResponseEntity<?> userBestScore(HttpSession session){

        return scoreService.userBestScore(session);
    }
    @GetMapping("/rank")
    public ResponseEntity<?> rakeList(){
        return ResponseEntity.ok(scoreService.rankList());
    }
}
