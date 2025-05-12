package com.example.heamin01.mapper;

import com.example.heamin01.dto.CategoryResponseDTO;
import com.example.heamin01.dto.LoginResponseDTO;
import com.example.heamin01.dto.QuizDTO;
import com.example.heamin01.dto.memberDto.MemberRequestDTO;
import com.example.heamin01.dto.memberDto.MemberResponseDTO;
import com.example.heamin01.dto.scoreDto.ScoreResponseDTO;
import com.example.heamin01.entity.Category;
import com.example.heamin01.entity.Member;
import com.example.heamin01.entity.Quiz;
import com.example.heamin01.entity.Score;
import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;

@Mapper(componentModel = "spring",unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface MemberMapper {
    MemberResponseDTO toMemberDto(Member member);
    LoginResponseDTO toLoginDto(Member member);
    ScoreResponseDTO toScoreDto(Score score);
    QuizDTO toQuizDto(Quiz quiz);
    CategoryResponseDTO toCategoryDTO(Category category);
};
