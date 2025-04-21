package com.example.heamin01.dto;

import com.example.heamin01.entity.Member;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.extern.log4j.Log4j2;

import java.time.LocalDate;

@Getter @Setter
@NoArgsConstructor @Log4j2
public class MemberDTO {
    private Long id;
    private String email;
    private String password;
    private String name;
    private LocalDate birth;
    private String profileImage;

    //dto -> entity
    public Member toEntity(){
        return new Member(id,email,password,name,birth,profileImage);
    }
}
