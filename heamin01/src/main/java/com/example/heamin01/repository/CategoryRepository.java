package com.example.heamin01.repository;

import com.example.heamin01.entity.Category;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface CategoryRepository extends JpaRepository<Category,Long> {
    boolean existsById(Long aLong);
}
