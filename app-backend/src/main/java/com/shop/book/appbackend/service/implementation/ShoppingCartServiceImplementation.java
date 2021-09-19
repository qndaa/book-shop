package com.shop.book.appbackend.service.implementation;

import com.shop.book.appbackend.dto.CartItemDTO;
import com.shop.book.appbackend.model.Book;
import com.shop.book.appbackend.model.OrderLine;
import com.shop.book.appbackend.repository.BookRepository;
import com.shop.book.appbackend.service.BookService;
import com.shop.book.appbackend.service.ShoppingCartService;
import lombok.RequiredArgsConstructor;
import org.aspectj.weaver.ast.Or;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Scope;
import org.springframework.context.annotation.ScopedProxyMode;
import org.springframework.stereotype.Service;
import org.springframework.web.context.WebApplicationContext;

import java.util.*;

@Service
@RequiredArgsConstructor
@Scope(value = WebApplicationContext.SCOPE_APPLICATION, proxyMode = ScopedProxyMode.TARGET_CLASS)
public class ShoppingCartServiceImplementation implements ShoppingCartService {

    private Map<String, List<OrderLine>> shoppingCarts = new HashMap<>();

    private final BookRepository bookRepository;

    @Override
    public List<OrderLine> addOrderLine(OrderLine orderLine) {
//        orderLines.add(new OrderLine());
//        System.out.println(this);
//        System.out.println(orderLines.size());

        return null;
    }

    @Override
    public void createShoppingCart(String username) {
        shoppingCarts.put(username, new ArrayList<>());
        System.out.println(shoppingCarts.size());
    }

    @Override
    public List<OrderLine> getShoppingCart(String username) {
        return shoppingCarts.get(username);
    }

    @Override
    public OrderLine addOrderLine(String username, CartItemDTO cartItem) {
        OrderLine orderLine = new OrderLine();
        orderLine.setQuantity(cartItem.getQuantity());
        Book book = bookRepository.findById(cartItem.getId()).get();
        orderLine.setBook(book);
        orderLine.setOrderLineId(UUID.randomUUID());
        orderLine.setPrice(book.getPrice() * cartItem.getQuantity());
        shoppingCarts.get(username).add(orderLine);
        return orderLine;
    }

    @Override
    public OrderLine updateOrderLine(String username, CartItemDTO cartItem) {
        System.out.println(username);
        List<OrderLine> orderLines = shoppingCarts.get(username);
        for(OrderLine o : orderLines) {
            if(o.getOrderLineId().equals(cartItem.getId())) {
                o.setQuantity(cartItem.getQuantity());
                o.setPrice(o.getBook().getPrice() * cartItem.getQuantity());
                return o;
            }
        }
        return null;
    }

    @Override
    public OrderLine deleteOrderLine(String username, CartItemDTO cartItem) {
        List<OrderLine> orderLines = shoppingCarts.get(username);
        for(OrderLine o : orderLines) {
            if(o.getOrderLineId().equals(cartItem.getId())) {
                orderLines.remove(o);
                return o;
            }
        }
        return null;
    }

    @Override
    public void refreshShoppingCart(String username) {
        shoppingCarts.remove(username);
        shoppingCarts.put(username, new ArrayList<>());
    }
}
