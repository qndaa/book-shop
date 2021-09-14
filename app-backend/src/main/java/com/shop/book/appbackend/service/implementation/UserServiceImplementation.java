package com.shop.book.appbackend.service.implementation;

import com.shop.book.appbackend.dto.UsernameAndImageDTO;
import com.shop.book.appbackend.dto.UsernameAndPasswordDTO;
import com.shop.book.appbackend.model.User;
import com.shop.book.appbackend.repository.RoleRepository;
import com.shop.book.appbackend.repository.UserRepository;
import com.shop.book.appbackend.service.UserService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.Collection;

@Service
@RequiredArgsConstructor
@Transactional
@Slf4j
public class UserServiceImplementation implements UserService, UserDetailsService {
    private final UserRepository userRepository;
    private final RoleRepository roleRepository;
    private final PasswordEncoder passwordEncoder;


    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = userRepository.findByUsername(username);
        if (user == null) {
            log.error("User not found in database!");
            throw new UsernameNotFoundException("User not found in database!");
        } else {
            log.info("User found in database: {}", username);
        }
        Collection<SimpleGrantedAuthority> authorities = new ArrayList<>();
        user.getRoles().forEach(role -> authorities.add(new SimpleGrantedAuthority(role.getName())) );

        return new org.springframework.security.core.userdetails.User(user.getUsername(), user.getPassword(), authorities);
    }

    @Override
    public User getUser(String username) {
        return userRepository.findByUsername(username);
    }

    @Override
    public User changePhoto(UsernameAndImageDTO dto) {
        User user = userRepository.findByUsername(dto.getUsername());
        if (user == null) {
            log.error("User not found in database!");
            throw new UsernameNotFoundException("User not found in database!");
        } else {
            log.info("User found in database: {}", dto.getUsername());
        }
        user.setImage(dto.getImage());
        return userRepository.save(user);
    }

    @Override
    public User changePassword(UsernameAndPasswordDTO dto) {
        User user = userRepository.findByUsername(dto.getUsername());
        if (user == null) {
            log.error("User not found in database!");
            throw new UsernameNotFoundException("User not found in database!");
        } else {
            log.info("User found in database: {}", dto.getUsername());
        }
        user.setPassword(passwordEncoder.encode(dto.getPassword()));
        return userRepository.save(user);
    }
}
