package com.botolashop.medkhair.model;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;
import jakarta.persistence.Id;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.ManyToMany;
import java.util.List;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Player{

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	private String playerName;
	private String nationality;
	private int age;
	private String position;


	/*@ManyToMany(mappedBy="players")
	private List<Club> playerClubs;

	@ManyToMany(mappedBy="productPlayers")
	private List<Product> playerProducts;*/
}