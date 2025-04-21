package com.example.heamin01.controller;

import com.example.heamin01.dto.MemberDTO;
import com.example.heamin01.service.MemberService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping("/auth")
public class AuthController {
    @Autowired(required = false)
    private MemberService memberService;

    //회원 가입 Form
    @GetMapping("/joinForm")
    public void moveJoinForm(){}

    //회원 가입
    @PostMapping("/join")
    public ResponseEntity<Boolean> join(@Validated @RequestBody MemberDTO memberDTO){
        return ResponseEntity.ok(memberService.join(memberDTO));
    }
}
