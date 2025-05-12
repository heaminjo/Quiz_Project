package com.example.heamin01.repository;

import com.example.heamin01.entity.Category;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;
@Repository

public interface CategoryRepository extends JpaRepository<Category,Long> {

}
