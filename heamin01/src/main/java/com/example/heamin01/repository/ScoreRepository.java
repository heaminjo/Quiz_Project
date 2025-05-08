package com.example.heamin01.repository;

import com.example.heamin01.dto.scoreDto.RankingDTO;
import com.example.heamin01.entity.Score;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ScoreRepository extends JpaRepository<Score,Long> {
    //실전 문제 최고 점수
    @Query("select s from Score s where s.member.id = :memberId and category.categoryId = 1 order by resultNum desc")
    List<Score> findTopScore(@Param("memberId") Long memberId);
    //페이지 목록
    Page<Score> findAllByMemberId(Long MemberId, Pageable pageable);
    //랭킹 순위
    @Query("select new com.example.heamin01.dto.scoreDto.RankingDTO(s.member.id,max(s.resultNum)) from Score s where s.category.categoryId = 0 group by s.member order by max(s.resultNum) desc")
    List<RankingDTO> rankingList();
}
