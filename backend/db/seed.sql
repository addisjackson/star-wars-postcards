INSERT INTO planets (name, image, population, films, url)
VALUES (
		'Tatooine',
		"https://live-production.wcms.abc-cdn.net.au/d836d9cddfc48d2e90fb1aeaf9836b87?impolicy=wcms_crop_resize&cropH=567&cropW=1008&xPos=128&yPos=0&width=862&height=485",
		200000,
		"https://swapi.dev/api/films/1/, https://swapi.dev/api/films/3/, https://swapi.dev/api/films/4/, https://swapi.dev/api/films/5/,https://swapi.dev/api/films/6/",
		"https://swapi.dev/api/planets/1/"
	);
(
	'Naboo',
	"https://lumiere-a.akamaihd.net/v1/images/databank_naboo_01_169_6cd7e1e0.jpeg?region=0%2C0%2C1560%2C878",
	4500000000,
	"https://swapi.dev/api/films/1/, https://swapi.dev/api/films/3/, https://swapi.dev/api/films/4/, https://swapi.dev/api/films/5/, https://swapi.dev/api/films/6/",
	"https://swapi.dev/api/planets/8/"
);
INSERT INTO postcards (name, planet_id)
VALUES ('Tatooine', 1),
	('Naboo', 2),
	('Alderaan', 3),
	('Yavin IV', 4),
	('Hoth', 5),
	('Dagobah', 6),
	('Bespin', 7),
	('Endor', 8),
	('Coruscant', 9),
	('Kamino', 10),