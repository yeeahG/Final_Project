package com.example.signup.repository;

import com.example.signup.model.Member;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import java.util.List;
import java.util.Optional;

public class JpaMemberRepository implements MemberRepository {

    private final EntityManager em;

    @Autowired
    public JpaMemberRepository(EntityManager em) {
        this.em = em;
    }


    @Override
    public Member save(Member member) {
        em.persist(member);
        return member;
    }

    @Override
    public Optional<Member> findByUserId(String userId) {
        Member member = em.find(Member.class, userId);
        return Optional.ofNullable(member);
    }

    @Override
    public Optional<Member> findByUserPassword(String userPassword) {
       List<Member> result = em.createQuery("select m from Member m where m.userPassword = :userPassword", Member.class)
               .setParameter("userPassword", userPassword)
               .getResultList();

       return result.stream().findAny();
    }

    @Override
    public List<Member> findAll() {
        return em.createQuery("select m from Member m", Member.class)
                .getResultList();
    }
}
