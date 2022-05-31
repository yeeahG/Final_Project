package com.example.signup.controller;

import com.example.signup.dto.Member;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import com.example.signup.service.MemberService;

import java.util.List;

@Controller
public class MemberController {
    private final MemberService memberService;

    @Autowired
    public MemberController(MemberService memberService) {
        this.memberService = memberService;
    }

    @GetMapping("/members/new")
    public String createForm() {
        return "members/createMemberForm";
    }

    @PostMapping("/members/new") // data를 form에 넣어서 전달할때
    public String create(MemberForm form) {
        Member member = new Member();
        member.setUserPhoneNumber(form.getPhoneNumber());
        member.setUserName(form.getName());
        member.setUserId(form.getId()); // html에서 입력한 값을 getName으로 꺼내서 Member에 저장
        member.setUserPassword(form.getPassword());
        member.setCheckUserPassword(form.getCheckPassword());

        memberService.join(member); // 멤버 가입

        System.out.println("phoneNumber =" + member.getUserPhoneNumber());
        System.out.println("name =" + member.getUserName());
        System.out.println("member = " + member.getUserId());
        System.out.println("password =" + member.getUserPassword());
        System.out.println("checkPassword =" + member.getCheckUserPassword());

        return "redirect:/";
    }

    @GetMapping("/members")
    public String list(Model model) {
        List<Member> members = memberService.findMembers(); // 멤버를 다 꺼내오기
        model.addAttribute("members", members);
        return "members/memberList";
    }
}
