package com.example.heamin01.repository;

import com.example.heamin01.entity.Member;
import jakarta.annotation.Nullable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.validation.annotation.Validated;

import java.util.Optional;

public interface MemberRepository extends JpaRepository<Member,Long> {
    //null반환은 바람직하지 않으므로 .empty()
    Optional<Member> findByEmail(String email);

    @Override
    boolean existsById(Long aLong);

    boolean existsByEmail(String email);
}
