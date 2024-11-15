package com.botolashop.medkhair.repository;

import com.botolashop.medkhair.model.Product;
import com.botolashop.medkhair.model.Club;
import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.JpaRepository;


@Repository
public interface ProductRepository extends JpaRepository<Product, Integer>{

}
