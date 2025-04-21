package com.example.heamin01.service;

import com.example.heamin01.dto.MemberDTO;
import com.example.heamin01.repository.MemberRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MemberService {

    @Autowired(required = false)
    private MemberRepository memberRepository;


    //회원가입
    public Boolean join(MemberDTO memberDTO){
        memberRepository.save(memberDTO.toEntity());
        return true;
    }
}
