package com.shop.book.appbackend.controller;

import com.shop.book.appbackend.service.FileService;
import lombok.RequiredArgsConstructor;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.InputStreamResource;
import org.springframework.core.io.UrlResource;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.MediaTypeFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.server.ResponseStatusException;

import java.io.IOException;

@RequiredArgsConstructor
@RestController
@RequestMapping(value = "/api/file")
public class FileController {

    private final FileService fileService;

//    @RequestMapping(value = "/{fileName}", method = RequestMethod.GET,
//            produces = MediaType.IMAGE_JPEG_VALUE)
//    public ResponseEntity<InputStreamResource> getImage(@PathVariable String fileName) throws IOException {
//
////        var imgFile = new ClassPathResource("src/main/resources/static/image/" + fileName);
////
////        return ResponseEntity
////                .ok()
////                .contentType(MediaType.IMAGE_JPEG)
////                .body(new InputStreamResource(imgFile.getInputStream()));
//
//
//
//
//    }
@GetMapping(value = "{fileName}")
    public @ResponseBody ResponseEntity<UrlResource> getContent(@PathVariable(name = "fileName") String fileName) {
        try {
            UrlResource resource = fileService.getContent(fileName);
            return ResponseEntity.status(HttpStatus.PARTIAL_CONTENT)
                    .contentType(MediaTypeFactory
                            .getMediaType(resource)
                            .orElse(MediaType.APPLICATION_OCTET_STREAM))
                    .body(fileService.getContent(fileName));
        } catch (IOException e) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, e.getMessage());
        }
    }

    @PostMapping("/upload")
    String singleFileUpload(@RequestParam("file") MultipartFile file) throws IOException {
        String fileName = fileService.storeFile(file);
        return fileName;
    }
}
