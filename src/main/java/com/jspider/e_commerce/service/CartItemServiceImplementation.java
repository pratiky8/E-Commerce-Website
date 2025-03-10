package com.jspider.e_commerce.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.jspider.e_commerce.exception.CartItemException;
import com.jspider.e_commerce.exception.UserException;
import com.jspider.e_commerce.model.Cart;
import com.jspider.e_commerce.model.CartItem;
import com.jspider.e_commerce.model.Product;
import com.jspider.e_commerce.model.User;
import com.jspider.e_commerce.repository.CardItemRepository;
import com.jspider.e_commerce.repository.CartRepository;


@Service
public class CartItemServiceImplementation implements CartItemService {
	
	@Autowired
	public CardItemRepository cartItemRepository;
	@Autowired
	public UserService userService;
	@Autowired
	public CartRepository cartRepository;
	

	@Override
	public CartItem createCartItem(CartItem cartItem) {
		cartItem.setQuantity(1);
		cartItem.setPrice(cartItem.getProduct().getPrice()*cartItem.getQuantity());
		cartItem.setDiscountedPrice(cartItem.getProduct().getDiscountedPrice()*cartItem.getQuantity());
		
		CartItem createdCartItem=cartItemRepository.save(cartItem);
		
		return createdCartItem;
	}

	@Override
	public CartItem updateCartItem(Long userId, Long id, CartItem cartItem) throws CartItemException, UserException {
		CartItem item=findCartItemById(id);
		User user=userService.findUserById(item.getUserId());
		
		
		if(user.getUserId().equals(userId)) {
			
			item.setQuantity(cartItem.getQuantity());
			item.setPrice(item.getQuantity()*item.getProduct().getPrice());
			item.setDiscountedPrice(item.getQuantity()*item.getProduct().getDiscountedPrice());
			
			return cartItemRepository.save(item);
				
			
		}
		else {
			throw new CartItemException("You can't update  another users cart_item");
		}
	}

	@Override
	public CartItem isCartItemExist(Cart cart, Product product, String size, Long userId) {
	CartItem cartItem=cartItemRepository.isCartItemExist(cart, product, size, userId);
		
		return cartItem;
	}

	@Override
	public void removeCartItem(Long userId, Long cartItemId) throws CartItemException, UserException {
	System.out.println("userId- "+userId+" cartItemId "+cartItemId);
		
		CartItem cartItem=findCartItemById(cartItemId);
		
		User user=userService.findUserById(cartItem.getUserId());
		User reqUser=userService.findUserById(userId);
		
		if(user.getUserId().equals(reqUser.getUserId())) {
			cartItemRepository.deleteById(cartItem.getId());
		}
		else {
			throw new UserException("you can't remove anothor users item");
		}
		
		
	}

	@Override
	public CartItem findCartItemById(Long cartItemId) throws CartItemException {
	Optional<CartItem> opt=cartItemRepository.findById(cartItemId);
		
		if(opt.isPresent()) {
			return opt.get();
		}
		throw new CartItemException("cartItem not found with id : "+cartItemId);
	}

}
