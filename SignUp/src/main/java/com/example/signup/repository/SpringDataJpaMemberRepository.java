package com.example.signup.repository;

import com.example.signup.domain.Member;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface SpringDataJpaMemberRepository extends JpaRepository<Member, String>,MemberRepository {

    @Override
    Optional<Member> findByUserId(String id);

    @Override
    Optional<Member> findByUserPassword(String password);

}
