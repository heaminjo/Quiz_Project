package com.example.heamin01.config;

import jakarta.servlet.http.HttpSession;
import lombok.extern.log4j.Log4j2;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
@Log4j2
public class SecurityConfig {

    @Bean
    public PasswordEncoder passwordEncoder(){
        return new BCryptPasswordEncoder();
    }

    @Bean
    public InMemoryUserDetailsManager userDetailsManager(){
        UserDetails user = User.builder()
                .username("user1")
                .password(passwordEncoder().encode("1111"))
                .roles("USER")
                .build();
        return new InMemoryUserDetailsManager(user);
    }

    //all은 모든 접근자가 가능하도록 설정
    @Bean
    //SecurityFilterChain : 인증과 인가를 담당
    public SecurityFilterChain filterChain(HttpSecurity httpSecurity)throws  Exception{
        //HttpSecurity라는 api를 사용하여 특정한 경로에 대한 설정을 변경
        httpSecurity.authorizeHttpRequests((auth)->{
            //스프링부트3 이상에서는 antMatchers -> requestMatchers
            //해당 경로에 접근을 .permitAll() 하여 로그인 없이도 접근가능하게 한ㅁ다.
            auth.requestMatchers("/sample/member").permitAll()
                    //HttpSecurity 는 Builder방식으로 .을 통하여 연속적으로 구성 가능
                    .requestMatchers("/sample/member").hasRole("USER")
                    .requestMatchers("sample/admin");
        });
        return httpSecurity.build();
    }
}
