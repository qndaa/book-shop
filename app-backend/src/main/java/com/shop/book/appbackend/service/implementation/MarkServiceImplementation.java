package com.shop.book.appbackend.service.implementation;

import com.shop.book.appbackend.dto.MarkDTO;
import com.shop.book.appbackend.model.Book;
import com.shop.book.appbackend.model.Comment;
import com.shop.book.appbackend.model.Customer;
import com.shop.book.appbackend.model.Mark;
import com.shop.book.appbackend.model.enums.StatusOfComment;
import com.shop.book.appbackend.repository.BookRepository;
import com.shop.book.appbackend.repository.CustomerRepository;
import com.shop.book.appbackend.repository.MarkRepository;
import com.shop.book.appbackend.service.MarkService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class MarkServiceImplementation implements MarkService {

    private final MarkRepository markRepository;
    private final CustomerRepository customerRepository;
    private final BookRepository bookRepository;

    @Override
    public List<Mark> getAllMarks() {
        return markRepository.findAll();
    }

    @Override
    public Book create(MarkDTO markDTO, String username) {
        Customer customer = customerRepository.findByUsername(username);
        Book book = bookRepository.findById(markDTO.getBookId()).get();
        Mark mark = new Mark();
        mark.setCustomer(customer);
        mark.setValue(markDTO.getValue());
        mark.setBook(book);
        markRepository.save(mark);
        book.getMarks().add(mark);

        return bookRepository.save(book);
    }
}
