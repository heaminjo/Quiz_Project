package com.example.heamin01.repository;

import com.example.heamin01.entity.Quiz;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Set;

public interface QuizRepository extends JpaRepository<Quiz,Long> {

    @Query("select q from Quiz q where q.quizId in(:id)")
    List<Quiz> findByQuiz(@Param("id") Set<Integer> set);
    List<Quiz> findByCategory_CategoryId(Long categoryId);
}
