package com.example.heamin01.controller;

import com.example.heamin01.dto.memberDto.MemberRequestDTO;
import com.example.heamin01.dto.memberDto.MemberResponseDTO;
import com.example.heamin01.entity.Member;
import com.example.heamin01.service.MemberService;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

@RequestMapping("/member")
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@Validated

public class MemberController {

    @Autowired(required = false)
    private MemberService memberService;

    //전체 조회
    @GetMapping("/listAll")
    public ResponseEntity<List<MemberResponseDTO>> listAll(){
        return ResponseEntity.ok(memberService.listAll());
    }

    //상세 조회
    @GetMapping("/detail/{id}")
    public ResponseEntity<?> memberInfo(@PathVariable Long id){
        return memberService.selectMember(id);
    }

    //파일 업로드
    @PostMapping("/upload")
    public ResponseEntity<MemberResponseDTO> memberProfileUpload(HttpSession session, @PathVariable MultipartFile profileImagef) throws IOException {
        return ResponseEntity.ok(memberService.memberProfileUpload(session,profileImagef));
    }
    //정보수정
    @PostMapping("/update")
    public ResponseEntity<?> memberUpdate(@RequestBody MemberRequestDTO dto){
        return memberService.memberUpdate(dto);
    }
}
