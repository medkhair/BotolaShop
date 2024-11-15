package com.botolashop.medkhair.service;

import java.util.List;
import com.botolashop.medkhair.model.Product;
import com.botolashop.medkhair.model.Club;
import com.botolashop.medkhair.repository.ProductRepository;
import com.botolashop.medkhair.repository.ClubRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class ProductService{

	@Autowired
	private ProductRepository repo;

	@Autowired
	private ClubRepository cRepo;

	public List<Product> getProducts(){
		return repo.findAll();
	}

	public Product getProductById(int id){
		return repo.findById(id).orElse(new Product());
	}

	public List<Club> getClubs(){
		return cRepo.findAll();
	}
}