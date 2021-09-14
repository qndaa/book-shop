package com.shop.book.appbackend.service;

import com.shop.book.appbackend.dto.UpdateCustomerDTO;
import com.shop.book.appbackend.model.Customer;

import java.util.List;

public interface CustomerService {
    List<Customer> getAllCustomers();
    Customer saveCustomer(Customer customer);

    Customer updateCustomer(UpdateCustomerDTO dto);
}
