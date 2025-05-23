package com.example.heamin01.controller;

import com.example.heamin01.dto.LoginRequestDTO;
import com.example.heamin01.dto.memberDto.MemberRequestDTO;
import com.example.heamin01.service.MemberService;
import com.example.heamin01.util.ApiResponse;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@RequestMapping("/auth")
@CrossOrigin(origins = "http://localhost:3000", allowCredentials = "true")
@RestController
public class AuthController {
    @Autowired(required = false)
    private MemberService memberService;

    //회원 가입 Form
    @GetMapping("/joinForm")
    public void moveJoinForm(){}

    //회원 가입
    @PostMapping("/join")
    public ResponseEntity<?> join(@Validated @RequestBody MemberRequestDTO memberRequestDTO) throws Exception {
        return memberService.join(memberRequestDTO);
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(HttpSession session, @RequestBody LoginRequestDTO loginRequestDTO){
        return memberService.login(session,loginRequestDTO);
    }
}
