package com.example.heamin01.controller;

import com.example.heamin01.entity.Member;
import com.example.heamin01.service.MemberService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/member")
public class MemberController {

    @Autowired(required = false)
    private MemberService memberService;

    @GetMapping("/info")
    public ResponseEntity<?> memberInfo(@PathVariable Long id){
        return memberService.selectMember(id);
    }
}
