package com.example.signup.domain;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@Data
@Entity
public class Member {
    private String userPhoneNumber;
    @Column(nullable = false)
    private String userName;
    @Id
    private String userId;
    @Column(nullable = false)
    private String userPassword;
    @Column(nullable = false, name = "user_password_check")
    private String checkUserPassword;
}
