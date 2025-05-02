package com.example.heamin01.service;

import com.example.heamin01.util.ApiResponse;
import com.example.heamin01.util.ErrorResponse;
import com.example.heamin01.dto.scoreDto.ScoreRequestDTO;
import com.example.heamin01.dto.scoreDto.ScoreResponseDTO;
import com.example.heamin01.entity.Category;
import com.example.heamin01.entity.Member;
import com.example.heamin01.entity.Score;
import com.example.heamin01.mapper.MemberMapper;
import com.example.heamin01.repository.CategoryRepository;
import com.example.heamin01.repository.MemberRepository;
import com.example.heamin01.repository.ScoreRepository;
import com.example.heamin01.util.PageRequestDTO;
import com.example.heamin01.util.PageResponse;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ScoreService {
    @Autowired(required = false)
    MemberRepository memberRepository;

    @Autowired(required = false)
    CategoryRepository categoryRepository;

    @Autowired(required = false)
    ScoreRepository scoreRepository;

    @Autowired(required = false)
    MemberMapper mapper;
    public ResponseEntity<?> insertScore(ScoreRequestDTO dto) {

        Optional<Member> member = memberRepository.findById(dto.getMemberId());
        Optional<Category> category = categoryRepository.findById(dto.getCategoryId());

        //member나 category가 존재하지 않을 경우 에러 객체 반환
        if (member.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                    .body(new ErrorResponse("error", "결과 등록에 실패하였습니다.", "회원이 존재하지 않습니다."));}
            if (category.isEmpty()) {
                return ResponseEntity.status(HttpStatus.NOT_FOUND)
                        .body(new ErrorResponse("error", "결과 등록에 실패하였습니다.", "존재하지 않는 카테고리 입니다."));}

                //둘다 존재할 경우 dto -> entity 변환
                Score score = dto.toEntity();
                score.setMember(member.get());
                score.setCategory(category.get());
                //DB 저장
                scoreRepository.save(score);
                //성공 응답 객체 반환
                return ResponseEntity.ok(new ApiResponse<ScoreResponseDTO>(true, mapper.toScoreDto(score), "결과 등록에 성공하였습니다."));
            }
            public PageResponse<Score> userScoreList(HttpSession session,PageRequestDTO dto){
                    //멤버의 게시물에서만 페이지를 조회해야함
                    Pageable pageable = PageRequest.of(dto.getPage(), dto.getSize());
                    Page<Score> scores = scoreRepository.findAllByMemberId((Long)session.getAttribute("loginID"),pageable);

                    PageResponse<Score> response = new PageResponse<>(scores.getContent(),dto.getPage(),dto.getSize(),scores.getTotalElements(),scores.getTotalPages(),scores.hasPrevious()
                    ,scores.hasNext());
                    return response;
            }

            public ResponseEntity<?> userBestScore(HttpSession session){
                List<Score> list = scoreRepository.findTopScore((Long)session.getAttribute("loginID"));
                if(list.isEmpty()) return ResponseEntity.status(HttpStatus.NOT_FOUND).body(new ErrorResponse("error","최고 점수 조회 실패","실전 문제를 푼 기록이 아직 없습니다."));
                else return ResponseEntity.ok(mapper.toScoreDto(list.get(0)));
            }
        }