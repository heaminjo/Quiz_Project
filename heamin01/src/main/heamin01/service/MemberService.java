package com.example.heamin01.service;

import com.example.heamin01.util.ApiResponse;
import com.example.heamin01.util.ErrorResponse;
import com.example.heamin01.dto.LoginRequestDTO;
import com.example.heamin01.dto.memberDto.MemberRequestDTO;
import com.example.heamin01.dto.memberDto.MemberResponseDTO;
import com.example.heamin01.entity.Member;
import com.example.heamin01.mapper.MemberMapper;
import com.example.heamin01.repository.MemberRepository;


import com.example.heamin01.util.exception.IncorrectFormat;
import com.example.heamin01.util.exception.PropertyException;
import jakarta.servlet.http.HttpSession;
import lombok.extern.log4j.Log4j2;
import org.hibernate.PropertyValueException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.function.Function;
import java.util.stream.Collectors;

@Log4j2
@Service
public class MemberService {

    @Autowired(required = false)
    private MemberRepository memberRepository;

    @Autowired(required = false)
    private MemberMapper mapper;

    //암호화 자동 주입
    @Autowired(required = false)
    private PasswordEncoder passwordEncoder;

    //회원가입
    //예외 처리 필요
    public ResponseEntity<?> join(MemberRequestDTO dto) throws Exception{

        Member member=null;
        //암호화 변환
        dto.setPassword(passwordEncoder.encode(dto.getPassword()));


        if(dto.getName() == null){
            throw new PropertyException("필수값이 누락되었습니다.");
        }
        if (!dto.getEmail().matches("^[\\w.-]+@[\\w.-]+\\.[a-zA-Z]{2,6}$")) {
            throw new IncorrectFormat("이메일의 형식이 잘못되었습니다.");
        }
            if (!memberRepository.existsByEmail(dto.getEmail())) {
                member = memberRepository.save(dto.toEntity());


                log.info("회원가입 성공 => " + dto.getName());
            } else {
                log.info("회원가입 실패 => " + dto);
            }
        return ResponseEntity.ok(new ApiResponse<MemberResponseDTO>(true,mapper.toMemberDto(member),"회원 가입에 성공하셨습니다."));
    }

    //로그인
    public ResponseEntity<?> login(HttpSession session,LoginRequestDTO dto){

        Optional<Member> member = memberRepository.findByEmail(dto.getEmail());
        //member가 존재할 경우 LoginResponseDTO반환
        if(member.isPresent() && passwordEncoder.matches(dto.getPassword(),member.get().getPassword())){
            //로그인 성공 시 session에 데이터 저장
            session.setAttribute("loginID",member.get().getId());
            session.setAttribute("loginName",member.get().getName());
           
            log.info("로그인 성공 => "+member.get().getId() + member.get().getName());
           
            return ResponseEntity.ok(mapper.toLoginDto(member.get()));
        }else{
            //ResponseEntity.status(HttpStatus.UNAUTHORIZED).body
            log.info("로그인 실패 => 존재하지 않는 아이디 혹은 비밀번호 ");
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(
                    new ErrorResponse(HttpStatus.BAD_REQUEST,"아이디 또는 비밀번호가 일치하지 않습니다.","..")
            );
        }
    }

    //전체 조회
    public List<MemberResponseDTO> listAll(){
        List<MemberResponseDTO> list = new ArrayList<>();
        List<Member> memberList = memberRepository.findAll();

        //DTO로 변환 하여 저장
        Function<Member,MemberResponseDTO> fn = (m) -> mapper.toMemberDto(m);
        list = memberList.stream().map(fn).toList();
        list.forEach(i->System.out.println(i.getName()));
        return list;
    }

    //회원 조회
    public ResponseEntity<?> selectMember(Long id){
        Optional<Member> member = memberRepository.findById(id);

        //조회되는 회원이 있는 경우 MemberResponseDTO 반환
        if(member.isPresent()){
            return ResponseEntity.ok(mapper.toMemberDto(member.get()));
        }else{
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(new ErrorResponse(HttpStatus.NOT_FOUND,"조회되는 회원이 없습니다.","조회 데이터 없음"));
        }
    }

    //파일업로드
    public MemberResponseDTO memberProfileUpload(HttpSession session, MultipartFile profileImagef) throws IOException {

        MemberResponseDTO dto = new MemberResponseDTO();
        //프로필사진을 업로드 하였는지 검사
        if(!profileImagef.isEmpty()&& profileImagef != null){
            //실제 저장 폴더에 이미지
            String realPath = "C:\\Dev\\tools\\java\\src\\heamin01\\src\\main\\resources\\webapp\\resources\\uploadImages\\"+profileImagef.getOriginalFilename();
            //transferTo로 실제 저장
            profileImagef.transferTo(new File(realPath));

            //로그인된 유저의 정보를 끌어와 새로운 파일을 set한 뒤 저장
            Member member = memberRepository.findById((Long)session.getAttribute("loginID")).get();
            member.setProfileImage(profileImagef.getOriginalFilename());
            memberRepository.save(member);

            //ResponseDTO 에 파일명 담아서 반환
            dto = mapper.toMemberDto(member);
            dto.setProfileImage(profileImagef.getOriginalFilename());
        }
        return dto;
    }

    //회원 수정
    public ResponseEntity<?> memberUpdate(MemberRequestDTO dto){
        //멤버가 있는지 확인
        if(memberRepository.existsById(dto.getId())){
            memberRepository.save(dto.toEntity());
            //ResponseDTO 반환
            return ResponseEntity.ok(mapper.toMemberDto(memberRepository.findById(dto.getId()).get()));
        }else{
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(new ErrorResponse(HttpStatus.NOT_FOUND,"수정에 실패하였습니다.","존재하지않는 회원이거나 유효성 검사 실패"));
        }
    }
}
