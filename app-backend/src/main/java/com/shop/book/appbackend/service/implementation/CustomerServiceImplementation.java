package com.shop.book.appbackend.service.implementation;

import com.shop.book.appbackend.dto.UpdateCustomerDTO;
import com.shop.book.appbackend.exceptions.UniqueEmailException;
import com.shop.book.appbackend.exceptions.UniqueUsernameException;
import com.shop.book.appbackend.model.Administrator;
import com.shop.book.appbackend.model.Customer;
import com.shop.book.appbackend.model.enums.TypeOfUser;
import com.shop.book.appbackend.repository.CustomerRepository;
import com.shop.book.appbackend.repository.RoleRepository;
import com.shop.book.appbackend.service.CustomerService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;

@Service
@Transactional
@Slf4j
@RequiredArgsConstructor
public class CustomerServiceImplementation implements CustomerService {

    private final CustomerRepository customerRepository;
    private final RoleRepository roleRepository;
    private final PasswordEncoder passwordEncoder;

    @Override
    public List<Customer> getAllCustomers() {
        return customerRepository.findAll();
    }

    @Override
    public Customer saveCustomer(Customer customer) {
        log.info("Saving new customer with username: {}", customer.getUsername());
        customer.setTypeOfUser(TypeOfUser.CUSTOMER);
        customer.setBlocked(false);
        customer.setPassword(passwordEncoder.encode(customer.getPassword()));
        customer.getRoles().add(roleRepository.findByName("ROLE_CUSTOMER"));
        if (customerRepository.findByEmail(customer.getEmail()) != null) throw new UniqueEmailException();
        if (customerRepository.findByUsername(customer.getUsername()) != null) throw new UniqueUsernameException();
        return customerRepository.save(customer);
    }

    @Override
    public Customer updateCustomer(UpdateCustomerDTO dto) {
        Customer customer = customerRepository.findByUsername(dto.getUsername());
        if (customer == null) {
            log.error("Customer not found in database!");
            throw new UsernameNotFoundException("User not found in database!");
        } else {
            log.info("Customer found in database: {}", dto.getUsername());
        }

        customer.setFirstName(dto.getFirstName());
        customer.setLastName(dto.getLastName());
        customer.setEmail(dto.getEmail());
        customer.setDateOfBirth(dto.getDateOfBirth());
        customer.setPhoneNumber(dto.getPhoneNumber());
        customer.setGender(dto.getGender());

        return customerRepository.save(customer);
    }
}
