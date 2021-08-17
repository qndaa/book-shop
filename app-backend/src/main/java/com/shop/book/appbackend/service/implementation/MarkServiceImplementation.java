package com.shop.book.appbackend.service.implementation;

import com.shop.book.appbackend.model.Mark;
import com.shop.book.appbackend.repository.MarkRepository;
import com.shop.book.appbackend.service.MarkService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MarkServiceImplementation implements MarkService {

    private final MarkRepository markRepository;

    @Autowired
    public MarkServiceImplementation(MarkRepository markRepository) {
        this.markRepository = markRepository;
    }

    @Override
    public List<Mark> getAllMarks() {
        return markRepository.findAll();
    }
}
