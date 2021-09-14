package com.shop.book.appbackend.service.implementation;

import com.shop.book.appbackend.service.FileService;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.UrlResource;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import javax.imageio.ImageIO;
import java.awt.image.BufferedImage;
import java.io.ByteArrayInputStream;
import java.io.File;
import java.io.IOException;
import java.net.MalformedURLException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.UUID;

@Service
public class FileServiceImplementation implements FileService {

    @Value("${image.storage}")
    private String storageDirectoryPath;

    @Override
    public String storeFile(MultipartFile file) throws IOException {

        System.out.println(storageDirectoryPath);

//        String fileName = UUID.randomUUID() + ".jpg";
//
//        try {
//            BufferedImage src = ImageIO.read(new ByteArrayInputStream(file.getBytes()));
//            File destination = new File("src/main/resources/static/image/" + fileName);
//            ImageIO.write(src, "jpg", destination);
//
//        } catch (IOException e) {
//            throw new RuntimeException("Issue in storing the file", e);
//        }
//        return fileName;

        String originalFileName = StringUtils.cleanPath(file.getOriginalFilename());
        String extension = getFileExtension(originalFileName);
        String fileName = UUID.randomUUID().toString() + "." + extension;

        System.out.println(fileName);

        Path storageDirectory = Paths.get(storageDirectoryPath);
        if (!Files.exists(storageDirectory)) {
            Files.createDirectories(storageDirectory);
        }
        Path destination = Paths.get(storageDirectory.toString() + File.separator + fileName);
        Files.copy(file.getInputStream(), destination, StandardCopyOption.REPLACE_EXISTING);
        return fileName;


    }


    @Override
    public UrlResource getContent(String contentName) throws MalformedURLException {
        return new UrlResource("file:" + storageDirectoryPath + File.separator + contentName);
    }


    private String getFileExtension(String fileName) throws IOException {
        String[] parts = fileName.split("\\.");
        if (parts.length > 0)
            return parts[parts.length - 1];
        else
            throw new IOException();
    }


}
