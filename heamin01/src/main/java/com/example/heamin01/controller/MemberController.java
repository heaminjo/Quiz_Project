package com.example.heamin01.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class MemberController {
    @GetMapping("/memberList")
    public void mList(Model model){

        model.addAttribute("hi","hello");
    };
}
