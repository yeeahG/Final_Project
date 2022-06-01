package com.example.signup.repository;

import com.example.signup.dto.Member;

import java.util.*;

public class MemoryMemberRepository implements MemberRepository {

    private static Map<String, Member> store = new HashMap<>();
    @Override
    public Member save(Member member) {
        store.put(member.getUserId(), member);
        return member;
    }

    public String checkSamePassword(Member member)
    {
        if(!store.get(member.getUserPassword()).equals(store.get(member.getCheckUserPassword()))){
            return "비밀번호가 일치하지 않습니다.";
        }
        else{
            return member.getUserPassword();
        }
    }

    @Override
    public Optional<Member> findById(String id) {
        // 만약에 null일 가능성이 있을땐 Optional.ofNullable로 감싸준다
        return Optional.ofNullable(store.get(id));
    }

    @Override
    public Optional<Member> findByPassword(String password) {
        return Optional.ofNullable(store.get(password));
    }

    @Override
    public List<Member> findAll() {
        // Map -> List
        return new ArrayList<>(store.values()); // member들 반환
    }

    //    store를 싹 비우는 메소드
    public void clearStore() {
        store.clear();
    }
}
