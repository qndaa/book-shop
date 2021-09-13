package com.shop.book.appbackend.service.implementation;

import com.shop.book.appbackend.service.FileService;
import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import javax.imageio.ImageIO;
import java.awt.image.BufferedImage;
import java.io.ByteArrayInputStream;
import java.io.File;
import java.io.IOException;
import java.util.UUID;

@Service
public class FileServiceImplementation implements FileService {


    @Override
    public String storeFile(MultipartFile file) {

        String fileName = UUID.randomUUID().toString() + ".jpg";

        try {
            BufferedImage src = ImageIO.read(new ByteArrayInputStream(file.getBytes()));
            File destination = new File("src/main/resources/image/" + fileName );
            ImageIO.write(src, "jpg", destination);

        } catch (IOException e) {
            throw new RuntimeException("Issue in storing the file", e);
        }
        return fileName;
    }


}
