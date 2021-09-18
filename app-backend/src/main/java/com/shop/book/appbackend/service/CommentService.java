package com.shop.book.appbackend.service;

import com.shop.book.appbackend.dto.CommentDTO;
import com.shop.book.appbackend.model.Book;
import com.shop.book.appbackend.model.Comment;

import java.util.List;
import java.util.UUID;

public interface CommentService {
    List<Comment> getAllComments();

    Book create(CommentDTO commentDTO, String username);


    Comment approve(UUID id);

    Comment decline(UUID id);
}
