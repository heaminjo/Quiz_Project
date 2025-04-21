package com.example.heamin01;

import com.example.heamin01.entity.Member;
import com.example.heamin01.repository.MemberRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@SpringBootTest
class Heamin01ApplicationTests {
	@Autowired(required = false)
	private MemberRepository memberRepository;

	@Test
	void TestMemberJpa(){
		Member member = new Member();
		member.setEmail("joheamin95");
		member.setPassword("geanea8086");
		member.setBirth(LocalDate.of(2002,7,2));
		member.setName("조해민");
		member.setProfileImage("aaa.jpg");

		memberRepository.save(member);
	}

	//저장 테스트
	@Test
	void memberSelect(){
		List<Member> memberList = memberRepository.findAll();
		for(Member member : memberList){
			System.out.println(member.getName());
		}
	}

	//회원 조회
	@Test
	void memberSelectOne(){
		Optional<Member> member = memberRepository.findById(3L);
		
		if(member.isPresent()){
			System.out.println(member.get().getName());
		}else {
			System.out.println("회원이 존재하지 않음");
		}
	}

	//멤버 수 조회
	@Test
	void memberCount(){
		System.out.println(memberRepository.count());
	}
}
