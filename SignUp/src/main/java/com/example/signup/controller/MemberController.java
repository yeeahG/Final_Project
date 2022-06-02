package com.example.signup.controller;

import com.example.signup.model.Member;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import com.example.signup.service.MemberService;
import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.List;

@Controller
@CrossOrigin(origins = "*")
public class MemberController {
    private final MemberService memberService;

    @Autowired
    public MemberController(MemberService memberService) {
        this.memberService = memberService;
    }

    @PostMapping(value = "/", consumes = {"application/xml","application/json"})
    @JsonProperty("member")
    public String createForm(@RequestBody Member member) {
        System.out.println(member.getUserId());
        return memberService.join(member);

    }

//    @PostMapping("members/new")
//    public String create() {
//        Member member = new Member();
//        member.setUserPhoneNumber(member.getUserPhoneNumber());
//        member.setUserName(member.getUserName());
//        member.setUserId(member.getUserId());
//        member.setUserPassword(member.getUserPassword());
//        member.setCheckUserPassword(member.getCheckUserPassword());
//
//        System.out.println("phoneNumber =" + member.getUserPhoneNumber());
//        System.out.println("name =" + member.getUserName());
//        System.out.println("member = " + member.getUserId());
//        System.out.println("password =" + member.getUserPassword());
//        System.out.println("checkPassword =" + member.getCheckUserPassword());
//
//        return memberService.join(member); // 멤버 가입
//
//    }

    @GetMapping("/members")
    public String list(Model model) {
        List<Member> members = memberService.findMembers(); // 멤버를 다 꺼내오기
        model.addAttribute("members", members);
        return "members/memberList";
    }
}
