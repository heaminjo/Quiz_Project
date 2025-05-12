package com.example.heamin01.service;

import com.example.heamin01.dto.scoreDto.RankingDTO;
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
import com.example.heamin01.dto.page.PageRequestDTO;
import com.example.heamin01.dto.page.PageResponse;
import com.example.heamin01.util.exception.NotFoundException;
import groovy.util.logging.Log4j2;
import jakarta.servlet.http.HttpSession;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.function.Function;
import java.util.function.Predicate;
import java.util.stream.Collectors;

@Slf4j
@Service
@Log4j2
@RequiredArgsConstructor
public class ScoreService {
    private final MemberRepository memberRepository;
    private final CategoryRepository categoryRepository;
    private final ScoreRepository scoreRepository;
    private final MemberMapper mapper;

    public ResponseEntity<?> insertScore(ScoreRequestDTO dto) {

        Member member = memberRepository.findById(dto.getMemberId()).orElseThrow(()-> new NotFoundException("존재하지 않는 회원입니다."));
        Category category = categoryRepository.findById(dto.getCategoryId()).orElseThrow(()->new NotFoundException("존재하지 않는 카테고리 입니다."));

                //둘다 존재할 경우 Entity 생성 후 DB 저장
                Score score = new Score(dto.getResultNum());
                score.setCategory(category);
                score.setMember(member);
                scoreRepository.save(score);
                //성공 응답 객체 반환
                return ResponseEntity.ok(new ApiResponse<ScoreResponseDTO>(true,score.entityToDto(score),"결과 등록에 성공하였습니다."));
        }

            //점수 목록
            public PageResponse<ScoreResponseDTO> userScoreList(PageRequestDTO dto){
                    //멤버의 게시물에서만 페이지를 조회해야함
                    //PageRequest.of를 통해 페이징된 결과값을 Pageable에 저장
                    Pageable pageable = PageRequest.of(dto.getPage(), dto.getSize(), Sort.by("scoreId").descending());
                    //특정 회원의 점수만 가지는데 주어진 페이징을 기준으로 나뉘어 Page에 담긴다.

                    Page<Score> scores = scoreRepository.findAllByMemberId(dto.getMemberId(),pageable);

                    Function<Score,ScoreResponseDTO> fn = mapper::toScoreDto;
                    List<ScoreResponseDTO> list = scores.getContent().stream().map(fn).toList();

                    list.forEach(System.out::println);
                    PageResponse<ScoreResponseDTO> response = new PageResponse<>(list,dto.getPage(),dto.getSize(),scores.getTotalElements(),scores.getTotalPages(),scores.hasPrevious()
                    ,scores.hasNext());
                    log.info(list.toString());
                    return response;
            }

            //최고점수
            public ResponseEntity<?> userBestScore(Long id){

                //회원 존재 검사
               if(!memberRepository.existsById(id))throw new NotFoundException("존재하지 않는 회원입니다.");

               //로그인한 회원의 기록들중 실전문제로만 리스트를 뽑아온다.
                List<Score> list = scoreRepository.findTopScore(id);

                //비어있다면 아직 데이터가 없으므로
                if(list.isEmpty()) return ResponseEntity.status(HttpStatus.NOT_FOUND).body(new ErrorResponse(HttpStatus.NOT_FOUND,"최고 점수 조회 실패","실전 문제를 푼 기록이 아직 없습니다."));
                else return ResponseEntity.ok(mapper.toScoreDto(list.get(0)));
            }

            //랭크 순위
            public List<RankingDTO> rankList(){
                return scoreRepository.rankingList();
            }
        }