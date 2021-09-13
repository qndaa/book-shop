package com.shop.book.appbackend.controller;

import com.shop.book.appbackend.dto.FileUploadResponse;
import com.shop.book.appbackend.service.FileService;
import lombok.RequiredArgsConstructor;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.InputStreamResource;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.imageio.ImageIO;
import java.awt.image.BufferedImage;
import java.io.ByteArrayInputStream;
import java.io.File;
import java.io.IOException;
import java.util.UUID;

@RequiredArgsConstructor
@RestController
@RequestMapping(value = "/api/file")
public class FileController {

    private final FileService fileService;

    @RequestMapping(value = "/{fileName}", method = RequestMethod.GET,
            produces = MediaType.IMAGE_JPEG_VALUE)
    public ResponseEntity<InputStreamResource> getImage(@PathVariable String fileName) throws IOException {

        var imgFile = new ClassPathResource("image/" + fileName);

        return ResponseEntity
                .ok()
                .contentType(MediaType.IMAGE_JPEG)
                .body(new InputStreamResource(imgFile.getInputStream()));
    }

    @PostMapping("/upload")
    String singleFileUpload(@RequestParam("file") MultipartFile file) throws IOException {

        String fileName = fileService.storeFile(file);




        return fileName;

    }
}
