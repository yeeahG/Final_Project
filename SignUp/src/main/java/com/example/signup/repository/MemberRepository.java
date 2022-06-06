package com.example.signup.repository;

import com.example.signup.domain.Member;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface MemberRepository {
    Member save(Member member);
    Optional<Member> findByUserId(String userId);
    Optional<Member> findByUserPassword(String userPassword);
    List<Member> findAll();

}
