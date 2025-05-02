package com.example.heamin01.repository;

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
    Page<Score> findAllByMemberId(Long MemberId, Pageable pageable);


//    Score score memberTopScore(@Param("id") Long id);
}
