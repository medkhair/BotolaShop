package com.botolashop.medkhair.controller;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import com.botolashop.medkhair.model.Product;
import com.botolashop.medkhair.model.Club;
import com.botolashop.medkhair.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

@RestController
@CrossOrigin
public class ProductController{

	@Autowired
	ProductService service;

	@GetMapping("/hi")
	public String hello(){
		return "wa fen";
	}

	@GetMapping("/products")
	public List<Product> getProducts(){
		return service.getProducts();
	}

	@GetMapping("/products/{prodId}")
	public Product getProductById(@PathVariable int prodId){
		return service.getProductById(prodId);
	}

	@GetMapping("/clubs")
	public List<Club> getClubs(){
		return service.getClubs();
	}
}