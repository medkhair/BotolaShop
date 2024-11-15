INSERT INTO product (avialability, image, price, product_name, quantity, short_description, size, product_club_id) VALUES (true,"images/jersey/FAR.jpg",250,"FAR Home 2023/2024",20,"Men's Soccer Jerseys Official Version - Black","",2), (true,"images/jersey/RCA.jpg",200,"Raja Home 2023/2024",20,"Men's Soccer Jerseys Official Version - White","",1), (true,"images/jersey/WAC.jpg",200,"Wydad Home 2023/2024",20,"Men's Soccer Jerseys Official Version - White","",4), (true,"images/jersey/RSB.jpg",350,"Berkane Home 2021/2022",20,"Men's Soccer Jerseys Official Version - White","",3), (true,"images/jersey/MAS.jpg",350,"MAS Home 2023/2024",20,"Men's Soccer Jerseys Official Version - Yellow","",5);
INSERT INTO club (club_image, club_name, division) VALUES ("images/clubs/RCA.jpg", "Raja Casablanca", 1), ("images/clubs/FAR.jpg", "FAR", 1), ("images/clubs/RSB.jpg", "Berkane", 1), ("images/clubs/WAC.jpg", "Wydad Casblanca", 1), ("images/clubs/MAS.jpg", "MAS", 1), ("images/clubs/KACM.jpg", "Kawkab Marrakech", 2), ("images/clubs/HUSA.jpg", "Hassania Agadir", 1), ("images/clubs/IRT.jpg", "Ittihad Tanger", 1);

/* right form */
INSERT INTO product (avialability, image, price, product_name, quantity, short_description, size) VALUES 
	(true,"images/jersey/FAR.jpg",250,"FAR Home 2023/2024",20,"Men's Soccer Jerseys Official Version - Black",""), 
	(true,"images/jersey/RCA.jpg",200,"Raja Home 2023/2024",20,"Men's Soccer Jerseys Official Version - White",""), 
	(true,"images/jersey/WAC.jpg",200,"Wydad Home 2023/2024",20,"Men's Soccer Jerseys Official Version - White",""), 
	(true,"images/jersey/RSB.jpg",350,"Berkane Home 2021/2022",20,"Men's Soccer Jerseys Official Version - White",""), 
	(true,"images/jersey/MAS.jpg",350,"MAS Home 2023/2024",20,"Men's Soccer Jerseys Official Version - Yellow","");



INSERT INTO club (club_image, club_name, division) VALUES 
	("images/clubs/RCA.jpg", "Raja Casablanca", 1), 
	("images/clubs/FAR.jpg", "FAR", 1), 
	("images/clubs/RSB.jpg", "Berkane", 1), 
	("images/clubs/WAC.jpg", "Wydad Casblanca", 1), 
	("images/clubs/MAS.jpg", "MAS", 1), 
	("images/clubs/KACM.jpg", "Kawkab Marrakech", 2), 
	("images/clubs/HUSA.jpg", "Hassania Agadir", 1), 
	("images/clubs/IRT.jpg", "Ittihad Tanger", 1);


INSERT INTO player(player_name, age, nationality, position) VALUES 
	("Adam Ennafati", 28, "Morocco", "Attacker"),
	("Yousri Bouzok", 27, "Algeria", "Attacker"),
	("Anas Zniti", 35, "Morocco", "Goal-Keeper"),
	("Amin Zahzouh", 24, "Morocco", "Attacker"),
	("Rabii Hrimat", 30, "Morocco", "Midfielder"),
	("Santos", 27, "Brazil", "Attacker"),
	("Jamal Harkass", 31, "Morocco", "Defender"),
	("Niang", 33, "Senegal", "Attacker");
/*
INSERT INTO club_players(player_clubs_id, players_id) VALUES 
	( 1, 1),
	( 1, 3),
	( 2, 4),
	( 2, 5),
	( 3, 6),
	( 1, 7),
	( 4, 8);

*/
INSERT INTO product_product_players(product_players_id, product_id) VALUES 
	(1, 2),
	(2, 2),
	(3, 2),
	(4, 1),
	(5, 1),
	(6, 4),
	(7, 3),
	(8, 3);

UPDATE product SET product_club_id = 2 WHERE id = 1;
UPDATE product SET product_club_id = 1 WHERE id = 2;
UPDATE product SET product_club_id = 4 WHERE id = 3;
UPDATE product SET product_club_id = 3 WHERE id = 4;
UPDATE product SET product_club_id = 5 WHERE id = 5;