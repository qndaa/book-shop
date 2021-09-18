package com.shop.book.appbackend.service.implementation;

import com.shop.book.appbackend.dto.CommentDTO;
import com.shop.book.appbackend.model.Book;
import com.shop.book.appbackend.model.Comment;
import com.shop.book.appbackend.model.Customer;
import com.shop.book.appbackend.model.enums.StatusOfComment;
import com.shop.book.appbackend.repository.BookRepository;
import com.shop.book.appbackend.repository.CommentRepository;
import com.shop.book.appbackend.repository.CustomerRepository;
import com.shop.book.appbackend.service.BookService;
import com.shop.book.appbackend.service.CommentService;
import com.shop.book.appbackend.service.CustomerService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class CommentServiceImplementation implements CommentService {

    private final CommentRepository commentRepository;
    private final BookRepository bookRepository;
    private final CustomerRepository customerRepository;


    @Override
    public List<Comment> getAllComments() {
        return commentRepository.findAll();
    }

    @Override
    public Book create(CommentDTO commentDTO, String username) {
        Customer customer = customerRepository.findByUsername(username);
        Book book = bookRepository.findById(commentDTO.getBookId()).get();
        Comment comment = new Comment();
        comment.setContent(commentDTO.getContent());
        comment.setCustomer(customer);
        comment.setStatus(StatusOfComment.NO_STATUS);
        comment.setBook(book);
        comment.setDate(new Date());
        commentRepository.save(comment);
        book.getComments().add(comment);

        return bookRepository.save(book);
    }

    @Override
    public Comment approve(UUID id) {
        Comment comment = commentRepository.findById(id).get();
        comment.setStatus(StatusOfComment.APPROVED);

        commentRepository.save(comment);
        return comment;
    }

    @Override
    public Comment decline(UUID id) {
        Comment comment = commentRepository.findById(id).get();
        comment.setStatus(StatusOfComment.DECLINED);
        commentRepository.save(comment);
        return comment;
    }


}
