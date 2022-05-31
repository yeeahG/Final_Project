package com.example.signup.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter

public class Member {
    private String userPhoneNumber;
    private String userName;
    private String userId;
    private String userPassword;

    private String checkUserPassword;
}
