package com.example.signup.repository;

import com.example.signup.dto.Member;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface MemberRepository {
    Member save(Member member);
    Member checkSamePassword(Member member);
    Optional<Member> findById(String id);
    Optional<Member> findByPassword(String password);
    List<Member> findAll();

}
