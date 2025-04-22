package com.example.heamin01.service;

import com.example.heamin01.dto.ErrorResponseDTO;
import com.example.heamin01.dto.LoginRequestDTO;
import com.example.heamin01.dto.memberDto.MemberRequestDTO;
import com.example.heamin01.entity.Member;
import com.example.heamin01.mapper.MemberMapper;
import com.example.heamin01.mapper.MemberMapperImpl;
import com.example.heamin01.repository.MemberRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class MemberService {

    @Autowired(required = false)
    private MemberRepository memberRepository;


    //회원가입
    public Boolean join(MemberRequestDTO memberRequestDTO){
        memberRepository.save(memberRequestDTO.toEntity());
        return true;
    }

    //로그인
    public ResponseEntity<?> login(LoginRequestDTO dto){
        Optional<Member> member = memberRepository.findByEmailAndPassword(dto.getEmail(),dto.getPassword());
        //member가 존재할 경우 LoginResponseDTO반환
        if(member.isPresent()){
            MemberMapper mapper = new MemberMapperImpl();
            return ResponseEntity.ok(mapper.loginDTO(member.get()));
        }else{
            //ResponseEntity.status(HttpStatus.UNAUTHORIZED).body
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(
                    new ErrorResponseDTO("error","로그인에 실패하였습니다.","아이디 또는 비밀번호가 일치하지 않습니다.")
            );
        }
    }
    //회원 조회
    public ResponseEntity<?> selectMember(Long id){
        Optional<Member> member = memberRepository.findById(id);

        //조회되는 회원이 있는 경우 MemberResponseDTO 반환
        if(member.isPresent()){
            return ResponseEntity.ok(new MemberMapperImpl().memberSelectDTO(member.get()));
        }else{
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(new ErrorResponseDTO("not found","조회되는 회원이 없습니다.","조회 데이터 없음"));
        }
    }
}
