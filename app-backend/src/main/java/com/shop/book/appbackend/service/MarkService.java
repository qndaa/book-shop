package com.shop.book.appbackend.service;

import com.shop.book.appbackend.dto.MarkDTO;
import com.shop.book.appbackend.model.Book;
import com.shop.book.appbackend.model.Mark;

import java.util.List;

public interface MarkService {
    List<Mark> getAllMarks();

    Book create(MarkDTO markDTO, String username);
}
