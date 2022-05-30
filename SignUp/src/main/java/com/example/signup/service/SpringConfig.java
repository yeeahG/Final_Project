package com.example.signup.service;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import com.example.signup.repository.MemberRepository;
import com.example.signup.repository.MemoryMemberRepository;

@Configuration
public class SpringConfig {

    @Bean // Spring Bean에 등록할꺼다
    public MemberService memberService() {
        return new MemberService(memberRepository());
    }

    @Bean // 얘도 Spring Bean에 등록
    public MemberRepository memberRepository() {
        return new MemoryMemberRepository();
    }
}