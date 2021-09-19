package com.shop.book.appbackend.filter;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.shop.book.appbackend.dto.LoginInfoDTO;
import com.shop.book.appbackend.dto.LoginParamsDTO;
import com.shop.book.appbackend.model.Customer;
import com.shop.book.appbackend.service.CustomerService;
import com.shop.book.appbackend.service.ShoppingCartService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.MediaType;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import javax.servlet.FilterChain;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.stream.Collectors;

@Slf4j
public class CustomAuthenticationFilter extends UsernamePasswordAuthenticationFilter {

    private final AuthenticationManager authenticationManager;
    private final CustomerService customerService;
    private final ShoppingCartService shoppingCartService;


    public CustomAuthenticationFilter(AuthenticationManager authenticationManager, CustomerService customerService, ShoppingCartService shoppingCartService) {
        this.authenticationManager = authenticationManager;
        this.customerService = customerService;
        this.shoppingCartService = shoppingCartService;

    }

    @Override
    public Authentication attemptAuthentication(HttpServletRequest request, HttpServletResponse response) throws AuthenticationException {

        String username = request.getParameter("username");
        String password = request.getParameter("password");
        log.info("Username is {}", username);
        log.info("Password is {}", password);
        UsernamePasswordAuthenticationToken authenticationToken = new UsernamePasswordAuthenticationToken(username, password);
        return authenticationManager.authenticate(authenticationToken);
    }

    @Override
    protected void successfulAuthentication(HttpServletRequest request, HttpServletResponse response, FilterChain chain, Authentication authentication) throws IOException {
        User user = (User) authentication.getPrincipal();
        Algorithm algorithm = Algorithm.HMAC256("secret".getBytes());
        String access_token = JWT.create()
                .withSubject(user.getUsername())
                .withExpiresAt(new Date(System.currentTimeMillis() + 10 * 60 * 3000))
                .withIssuer(request.getRequestURL().toString())
                .withClaim("roles", user.getAuthorities().stream().map(GrantedAuthority::getAuthority).collect(Collectors.toList()))
                .sign(algorithm);



        Map<String, String> tokens = new HashMap<>();
        tokens.put("token", access_token);
        Customer customer = customerService.findCustomerByUsername(user.getUsername());
        if (customer != null && customer.isBlocked()) {
            tokens.put("blocked", "true");

        } else {
            tokens.put("blocked", "flase");
            shoppingCartService.createShoppingCart(user.getUsername());
        }


        response.setContentType(MediaType.APPLICATION_JSON_VALUE);
        response.setStatus(200);
        new ObjectMapper().writeValue(response.getOutputStream(), tokens);
    }
}
