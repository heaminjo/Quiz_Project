package com.example.heamin01;

import lombok.extern.log4j.Log4j2;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;
// security의 SecurityAutoConfiguration 클래스로 인해 로그인 view 자동 출력을 막는다.
@SpringBootApplication(exclude = {SecurityAutoConfiguration.class})
@Log4j2
public class Heamin01Application {

	public static void main(String[] args) {
		SpringApplication.run(Heamin01Application.class, args);

	}

}
