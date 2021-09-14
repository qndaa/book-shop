package com.shop.book.appbackend.service;


import org.springframework.core.io.UrlResource;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.net.MalformedURLException;

public interface FileService {
    String storeFile(MultipartFile file) throws IOException;

    UrlResource getContent(String contentName) throws MalformedURLException;

}
