package com.example.signup.service;

import com.example.signup.model.Member;
import com.example.signup.repository.MemberRepository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Transactional
public class MemberService {
    private final MemberRepository memberRepository;

    public MemberService(MemberRepository memberRepository) {
        this.memberRepository = memberRepository;
    }

    // 회원 가입
    public String join(Member member) {
        validateDuplicateMember(member);
        checkSamePassword(member);
        memberRepository.save(member);
        return member.getUserId();
    }

    // 회원가입시 제한 사항 1
    private void validateDuplicateMember (Member member){
        memberRepository.findByUserId(member.getUserId())
                .ifPresent(m -> {
                    throw new IllegalStateException("이미 존재하는 ID 입니다.");
                });
    }

    // 회원가입시 제한 사항 2
    private void checkSamePassword (Member member) {
       if (!member.getUserPassword().equals(member.getCheckUserPassword())) {
            throw new IllegalStateException("비밀번호가 동일하지 않습니다.");
       }
    }

    public List<Member> findMembers() {
        return memberRepository.findAll();
    }

    // 회원찾기
    public Optional<Member> findOne(String memberId) {
        return memberRepository.findByUserId(memberId);
    }
}
