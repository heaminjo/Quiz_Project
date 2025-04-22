package com.example.heamin01.dto.memberDto;

import com.example.heamin01.entity.Member;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.extern.log4j.Log4j2;
import org.springframework.web.multipart.MultipartFile;

import java.time.LocalDate;

@Getter @Setter
@NoArgsConstructor @Log4j2
public class MemberRequestDTO {
    private Long id;
    private String email;
    private String password;
    private String name;
    private LocalDate birth;
    private String profileImage;
    private MultipartFile profileImagef;
    //dto -> entity
    public Member toEntity(){
        return new Member(id,email,password,name,birth,profileImage);
    }
}
