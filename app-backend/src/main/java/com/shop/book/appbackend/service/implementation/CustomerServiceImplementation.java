package com.shop.book.appbackend.service.implementation;

import com.shop.book.appbackend.exceptions.UniqueEmailException;
import com.shop.book.appbackend.exceptions.UniqueUsernameException;
import com.shop.book.appbackend.model.Customer;
import com.shop.book.appbackend.model.enums.TypeOfUser;
import com.shop.book.appbackend.repository.CustomerRepository;
import com.shop.book.appbackend.service.CustomerService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
@Slf4j
@RequiredArgsConstructor
public class CustomerServiceImplementation implements CustomerService {

    private final CustomerRepository customerRepository;

    @Override
    public List<Customer> getAllCustomers() {
        return customerRepository.findAll();
    }

    @Override
    public Customer saveCustomer(Customer customer) {
        log.info("Saving new customer with username: {}", customer.getUsername());
        customer.setTypeOfUser(TypeOfUser.CUSTOMER);
        customer.setBlocked(false);
        if (customerRepository.findByEmail(customer.getEmail()) != null) throw new UniqueEmailException();
        if (customerRepository.findByUsername(customer.getUsername()) != null) throw new UniqueUsernameException();
        return customerRepository.save(customer);

    }
}
