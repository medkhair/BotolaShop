package com.botolashop.medkhair.model;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;
import jakarta.persistence.Id;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.OneToMany;
import jakarta.persistence.ManyToMany;
import java.util.List;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Club{

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	private String clubName;
	private String clubImage;
	private int division;

	/*@OneToMany(mappedBy="productClub")
	private List<Product> clubProducts;

	@ManyToMany
	private List<Player> players;*/
}