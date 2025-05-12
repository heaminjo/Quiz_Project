package com.example.heamin01.dto.memberDto;

import com.example.heamin01.entity.Member;
import lombok.*;
import lombok.extern.log4j.Log4j2;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.web.multipart.MultipartFile;

import java.time.LocalDate;
import java.util.Collection;

@Getter @Setter
@NoArgsConstructor @Log4j2
@AllArgsConstructor
@Builder
public class MemberRequestDTO   {
    private Long id;
    private String email;
    private String password;
    private String name;
    private LocalDate birth;
    private String profileImage;
    private MultipartFile profileImagef;


    public Member toEntity(){
        Member member = Member.builder()
                .email(email)
                .password(password)
                .name(name)
                .birth(birth)
                .build();
        return member;
    }
}
