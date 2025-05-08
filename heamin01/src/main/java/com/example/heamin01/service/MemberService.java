package com.example.heamin01.service;

import com.example.heamin01.dto.LoginResponseDTO;
import com.example.heamin01.util.ApiResponse;
import com.example.heamin01.util.ErrorResponse;
import com.example.heamin01.dto.LoginRequestDTO;
import com.example.heamin01.dto.memberDto.MemberRequestDTO;
import com.example.heamin01.dto.memberDto.MemberResponseDTO;
import com.example.heamin01.entity.Member;
import com.example.heamin01.mapper.MemberMapper;
import com.example.heamin01.repository.MemberRepository;


import com.example.heamin01.util.exception.IncorrectFormat;
import com.example.heamin01.util.exception.NotFoundException;
import com.example.heamin01.util.exception.PropertyException;
import jakarta.servlet.http.HttpSession;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.hibernate.PropertyValueException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.crossstore.ChangeSetPersister;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.util.*;
import java.util.function.Consumer;
import java.util.function.Function;
import java.util.function.Predicate;
import java.util.stream.Collectors;

@Log4j2
@Service
@RequiredArgsConstructor
public class MemberService {

    private final MemberRepository memberRepository;
    private final MemberMapper mapper;
    //암호화 자동 주입
    private final PasswordEncoder passwordEncoder;

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

        //아이디 검사
        //조회 아이디 없을 시 예외 발생
        Optional<Member>member = memberRepository.findByEmail(dto.getEmail());

        //비밀번호 검사
        if(member.isPresent() && passwordEncoder.matches(dto.getPassword(),member.get().getPassword())){
            //로그인 성공 시 session에 데이터 저장
            session.setAttribute("loginID",member.get().getId());
            session.setAttribute("loginName",member.get().getName());
           
            log.info("로그인 성공");
           
            return ResponseEntity.ok(new ApiResponse< LoginResponseDTO >(true,mapper.toLoginDto(member.get()),"로그인에 성공하였습니다."));
        }else{
            log.info("로그인 실패");
            return ResponseEntity.ok(new ApiResponse<ErrorResponse>(false,new ErrorResponse(HttpStatus.NOT_FOUND,"존재하지 않는 데이터입니다.","003"),"아이디 또는 비밀번호가 일치하지 않습니다."));
        }
    }

    //전체 조회
    public List<MemberResponseDTO> listAll(){
        //회원의 모든 데이터를 가져온다.
        List<Member> memberList = memberRepository.findAll();

        //DTO로 변환 하여 저장하는 메서드 구현
        Function<Member,MemberResponseDTO> fn = (m) -> mapper.toMemberDto(m);
        //Stream을 통해 map을 돌려 DB에서 가져온 memberList를 순회하며 DTO로 변환 후 List로 생성
        List<MemberResponseDTO> list = memberList.stream().map(fn).toList();
        return list;
    }

    //회원 조회
    public ResponseEntity<?> selectMember(Long id){


        Optional<Member> member = memberRepository.findById(id);
        //자바 컴파일러의 자동 추론으로 의해 Optional::isPresent -> (member) -> member.isPresent()로 변환된다.
        //Optional을 받아 isPresent() 즉 값이 들어있는지 검사를 하기 위한 함수 인터페이스를 작성
        Predicate<Optional<Member>> predicate = Optional::isPresent;

        return predicate.test(member) ?
                ResponseEntity.ok(mapper.toMemberDto(member.get())):
                ResponseEntity.status(HttpStatus.NOT_FOUND).body(
                    new ErrorResponse(HttpStatus.NOT_FOUND,"조회되는 회원이 없습니다.","404"));

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
    //엔티티 변경 시 자동으로 save()
    @Transactional
    public ResponseEntity<?> memberUpdate(MemberRequestDTO dto){

        Member member = memberRepository.findById(dto.getId()).orElseThrow(()-> new NotFoundException("존재하지 않는 회원입니다."));
        member.setName(dto.getName());
        member.setBirth(dto.getBirth());

        return ResponseEntity.ok(new ApiResponse<>(true,mapper.toMemberDto(member),"회원 수정을 성공하였습니다."));
    }
}
