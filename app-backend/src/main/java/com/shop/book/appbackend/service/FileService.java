package com.shop.book.appbackend.service;


import org.springframework.web.multipart.MultipartFile;

public interface FileService {
    String storeFile(MultipartFile file);
}
