package com.shop.book.appbackend.service;

import com.shop.book.appbackend.dto.UsernameAndImageDTO;
import com.shop.book.appbackend.dto.UsernameAndPasswordDTO;
import com.shop.book.appbackend.model.User;

public interface UserService  {
    User getUser(String username);

    User changePhoto(UsernameAndImageDTO dto);

    User changePassword(UsernameAndPasswordDTO dto);
}
