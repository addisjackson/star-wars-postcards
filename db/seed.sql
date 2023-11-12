INSERT INTO postcards (location, price, quantity, synopsis, film_id, planet_id)
VALUES
    ('Tatooine', 10, 100, 'Visit the desert planet where Luke Skywalker grew up.', 1, 1),

    ('Alderaan', 15, 50, 'Experience the beauty of Alderaan before its tragic destruction.', 1, 2),

    ('Hoth', 12, 75, 'Explore the icy landscapes of the remote planet of Hoth.', 2, 3),

    ('Naboo', 16, 45, 'Capture the elegance of Naboo, the home planet of Padmé Amidala.', 1, 4),

    ('Endor', 14, 60, 'Ewok village postcard from the lush forests of Endor.', 3, 5),

    ('Kamino', 11, 85, 'Visit the cloning facilities on the oceanic world of Kamino.', 5, 6),
    
    ('Geonosis', 13, 65, 'Join the First Battle of Geonosis on this arid planet.', 5, 7),
    
    ('Coruscant', 18, 40, 'Get a glimpse of the bustling cityscape of Coruscant, the galactic capital.', 4, 8),

    ('Mustafar', 12, 70, 'Experience the fiery volcanic landscapes of Mustafar.', 6, 9),
    
    ('Kashyyyk', 13, 70, 'Celebrate Wookiee culture on the homeworld of Chewbacca.', 6, 10),
    
    ('Corellia', 14, 65, 'Home to Han Solo, a key location in smuggling history.', 2, 11),

    ('Rodia', 11, 80, 'Homeworld of the Rodians, known for their bounty hunters.', 4, 12),

    ('Dantooine', 10, 90, 'A quiet, peaceful planet used by the Rebel Alliance.', 1, 13),
 
    ('Dagobah', 9, 85, 'Known for rocky hills and mesas.', 1, 14),
   
    ('Mon Cala', 15, 60, 'Home of the Mon Calamari and Quarren species.', 3, 15),

    ('Iridonia', 13, 75, 'A planet with a rocky terrain.', 1 16),

    ('Bespin',15. 90, 'Bespin is a gas giant that is home to the floating Cloud City.',5,17);



INSERT INTO films (film_id, title, director, producer, release_date, characters, planets, starships_vehicles, species)
VALUES (
    1,
    'Star Wars: Episode I - The Phantom Menace',
    'George Lucas',
    'Rick McCallum',
    '1999-05-19',
    '[{"name": "Obi-Wan Kenobi", "gender": "male"}, {"name": "Qui-Gon Jinn", "gender": "male"}]',
    '[{"name": "Tatooine", "climate": "arid"}, {"name": "Naboo", "climate": "temperate"}]',
    '[{"name": "N-1 Starfighter", "model": "N-1 starfighter"}, {"name": "Anakin\s Podracer", "model": "DIY podracer"}]',
    '[{"name": "Gungan", "classification": "amphibian"}, {"name": "Dug", "classification": "mammal"}]'
),
(   
    2,
    'Star Wars: Episode II - Attack of the Clones',
    'George Lucas',
    'Rick McCallum',
    '2002-05-16',
    '[{"name": "Anakin Skywalker", "gender": "male"}, {"name": "Padmé Amidala", "gender": "female"}]',
    '[{"name": "Kamino", "climate": "temperate"}, {"name": "Geonosis", "climate": "arid"}]',
    '[{"name": "Jedi Interceptor", "model": "Eta-2 Actis-class light interceptor"}, {"name": "Jango Fett\s Slave I", "model": "Firespray-31-class patrol and attack craft"}]',
    '[{"name": "Kaminoan", "classification": "amphibian"}, {"name": "Toydarian", "classification": "mammal"}]'
),
(   
    3,
    'Star Wars: Episode III - Revenge of the Sith',
    'George Lucas',
    'Rick McCallum',
    '2005-05-19',
    '[{"name": "Darth Vader", "gender": "male"}, {"name": "Obi-Wan Kenobi", "gender": "male"}]',
    '[{"name": "Mustafar", "climate": "hot"}, {"name": "Kashyyyk", "climate": "tropical"}]',
    '[{"name": "Jedi Interceptor", "model": "Eta-2 Actis-class light interceptor"}, {"name": "Venator-class Star Destroyer", "model": "Venator-class Star Destroyer"}]',
    '[{"name": "Wookiee", "classification": "mammal"}, {"name": "Mustafarian", "classification": "humanoid"}]'
),
(   
    4,
    'Star Wars: Episode IV - A New Hope',
    'George Lucas',
    'Gary Kurtz, Rick McCallum',
    '1977-05-25',
    '[{"name": "Luke Skywalker", "gender": "male"}, {"name": "Darth Vader", "gender": "male"}]',
    '[{"name": "Endor", "climate": "temperate"}, {"name": "Tatooine", "climate": "arid"}]',
    '[{"name": "X-wing", "model": "T-65 X-wing"}, {"name": "Slave 1", "model": "Firespray-31-class passive and attack craft"}]',
    '[{"name": "Ewok", "classification": "mammal"}, {"name": "Gamorrean", "classification": "mammal"}]'
),
(   
    5,
    'Star Wars: Episode V - The Empire Strikes Back',
    'Irvin Kershner',
    'Gary Kurtz',
    '1980-05-21',
    '[{"name": "Luke Skywalker", "gender": "male"}, {"name": "Han Solo", "gender": "male"}]',
    '[{"name": "Hoth", "climate": "frozen"}, {"name": "Dagobah", "climate": "murky"}]',
    '[{"name": "Imperial Star Destroyer", "model": "Imperial I-class Star Destroyer"}, {"name": "Slave 1", "model": "Firespray-31-class patrol and attack craft"}]',
    '[{"name": "Snowspeeder", "model": "t-47 airspeeder"}, {"name": "Imperial Speeder Bike", "model": "74-Z speeder bike"}]',
    '[{"name": "Wampa", "classification": "reptile"}, {"name": "Tauntaun", "classification": "mammal"}]'
),
(   
    6,
    'Star Wars: Episode VI - Return of the Jedi',
    'Richard Marquand',
    'Howard Kazanjian',
    '1983-05-25',
    '[{"name": "Luke Skywalker", "gender": "male"}, {"name": "Darth Vader", "gender": "male"}]',
    '[{"name": "Endor", "climate": "temperate"}, {"name": "Tatooine", "climate": "arid"}]',
    '[{"name": "X-wing", "model": "T-65 X-wing"}, {"name": "Slave 1", "model": "Firespray-31-class patrol and attack craft"}]',
    '[{"name": "Ewok", "classification": "mammal"}, {"name": "Gamorrean", "classification": "mammal"}]'
),
(   
    7,
    'Star Wars: Episode VII - The Force Awakens',
    'J.J. Abrams',
    'Kathleen Kennedy',
    '2015-12-18',
    '[{"name": "Rey", "gender": "female"}, {"name": "Finn", "gender": "male"}]',
    '[{"name": "Jakku", "climate": "desert"}, {"name": "Starkiller Base", "climate": "icy"}]',
    '[{"name": "X-wing", "model": "T-70 X-wing"}, {"name": "Millennium Falcon", "model": "YT-1300 light freighter"}]',
    '[{"name": "Droid", "classification": "artificial"}, {"name": "Wookiee", "classification": "mammal"}]'
);



  INSERT INTO planets (planet_id, name, diameter, climate, temperature, terrain, population, residents, species, films, synopsis)
VALUES
(1, 'Tatooine', 10465, 'Arid', 'Hot', 'Desert', 200000, 
'[{"name": "Luke Skywalker", "url": "https://swapi.dev/api/people/1/"}]', 
'[{"name": "Human", "url": "https://swapi.dev/api/species/1/"}]', 
'[{"title": "A New Hope", "url": "https://swapi.dev/api/films/1/"}]', 
'Tatooine was a planet located in the Outer Rim, a region of the galaxy far removed from its core. It had three moons, Ghomrassen, Guermessa, and Chenini.Long ago, Tatooine was covered in oceans and rainforests, but for unknown reasons, it became a hot desert world. Tatooine orbited twin suns, Tatoo I and Tatoo II. The whole planet was covered in harsh deserts, and only a small part of its northern hemisphere could sustain intelligent life. The landscape was covered with sand dunes, mountains, and canyons, which made traversing the planet very difficult. Due to the absence of surface water, those who lived on Tatooine had to draw moisture through the dry air.Rain was incredibly rare on Tatooine, coming once a year, decade, or century. When the rain came, some plants were able to grow in a brief yet glorious period. Inhabiting the planet were many native species, the largest of which were the carnivorous krayt dragons. The common krayt dragon, while more plentiful, was shadowed by the greater krayt dragon, which submerged itself under the shifting sands and used its powerful limbs to traverse through the dunes. In addition, the common bantha and eopie species also found a home on the world, along with dewbacks, rontos, womp rats, massiffs, and scurriers.'),

(2, 'Alderaan', 12500, 'Temperate', 'Moderate', 'Mountains', 2000000000, 
'[{"name": "Leia Organa", "url": "https://swapi.dev/api/people/5/"}]', 
'[{"name": "Human", "url": "https://swapi.dev/api/species/1/"}]', 
'[{"title": "A New Hope", "url": "https://swapi.dev/api/films/1/"}]', 
'Alderaan is a planet located in the Outer Rim, a region of the galaxy. It was a peaceful planet destroyed by the Death Star'),

(3, 'Hoth', 7200, 'Frozen', 'Frigid', 'Ice plains', 0, 
'[]', '[]', 
'[{"title": "The Empire Strikes Back", "url": "https://swapi.dev/api/films/2/"}]', 
'"Anyone who looks at Hoth from above would be forgiven for thinking it a mostly dead ball of ice". Imperial AT-ATs traverse the frozen landscape on Hoth. From space, the planet of Hoth looked like a pale blue orb due to its dense snow and ice covering. Five planets existed between Hoth and its sun, while an asteroid belt surrounded the planet with meteors occasionally striking the surface.Most of its surface was covered with glaciers and frozen ice plains. Another third of the planet was covered by oceans.The temperature, although always frigid, was known to drop to -60°C come nightfall.Although devoid of intelligent life, Hoth was home to fifteen subspecies of tauntauns, which were commonly used by Rebels as a means of transport, and which Han Solo cut open to use as shelter to keep Luke Skywalker and himself warm during a snowstorm. It was also home to a species of towering predators known as wampas. During his stay on Hoth, Skywalker was captured by a wampa and was hung upside down in the wampa"s cave, waiting to be eaten. Using the power of the Force, Skywalker managed to get his hands on his lightsaber and cut himself down from the roof and sever the wampa"s right arm. The planet also had a number of "crystalline geysers.'),

(4, 'Naboo', 12120, 'Temperate', 'Moderate', 'Grass plains', 4500000000, 
'[{"name": "Padmé Amidala", "url": "https://swapi.dev/api/people/5/"}]', 
'[{"name": "Human", "url": "https://swapi.dev/api/species/1/"}]', 
'[{"title": "The Phantom Menace", "url": "https/swapi.dev/api/films/4/"}]', 
'Naboo was a small pastoral world in the Mid Rim, located near the border of the Outer Rim Territories. Unlike most other worlds, the ancient planet lacked a molten core, and instead comprised a conglomerate of large, rocky bodies that made up a network of tunnels and flooded caves. The native Gungans, who built their homes in the waters of Naboo, rarely ventured into the core, fearing the ravenous sea beasts which resided in areas such as the Caves of Eleuabad. Despite this, certain Gungan navigators utilized time-honored trade routes through the planet\s structure, which served as the most expedient avenues to reach other areas of the planet. Naboo\s interior was rich with plasma, a naturally-occurring energy unique to the planet, and this coupled with its lack of molten core gave Naboo a reputation as an enigma to astrophysicists, who regarded the world\s structure as an extremely rare phenomenon in the galaxy.'),

(5, 'Endor', 4900, 'Temperate', 'Mild', 'Forests', 3000000, 
'[]', 
'[{"name": "Ewok", "url": "https://swapi.dev/api/species/9/"}]', 
'[{"title": "Return of the Jedi", "url": "https://swapi.dev/api/films/3/"}]', 
'Home to the Ewoks and the location of the Battle of Endor'),

(6, 'Kamino', 19720, 'Arid', 'Cold', 'Ocean', 1000000000,
'[]',
'[{"name": "Kaminoan", "url": "https://swapi.dev/api/species/27/"}]',
'[{"title": "Attack of the Clones", "url": "https://swapi.dev/api/films/5/"}]',
'Located seventy thousand light-years from the Core Worlds, in the Abrion sector, Kamino was a remote and inhospitable extragalactic planet which was covered in oceans that held an abundance of life. The native Kaminoans lived on stilt-cities scattered across Kamino/s watery surface. The majority of these cities were devoted to cloning projects, as the highly intelligent Kaminoans specialized in cloning for clients needing workers or private security forces, along with other one-off requests. Due to the remoteness of the planet and its extensive rainy season, only occasional representatives of clone purchasing authorities were undeterred from visiting the world. Kamino often experienced heavy rain, and during some parts of the year was covered with heavy electrical storms. During this season, Kaminoans rode on aiwhas underwater and resurfaced once they were near their destination. In the late clone wars, the cloning facilities were protected by the Kamino security clone troopers.'),

(7, 'Geonosis', 11370, 'Arid', 'Hot', 'Rock', 100000000,
'[]',
'[]',
'[{"title": "Attack of the Clones", "url": "https://swapi.dev/api/films/5/"}]',
'Geonosis, referred to as Geonosia by some natives, was the desert home planet of the Geonosians. It was the Confederacy of Independent Systems/ first capital and hosted its major battle droid foundries. It was the site of the First Battle of Geonosis, the opening conflict of the Clone Wars, as well as the subsequent invasion by the Galactic Republic. During and after the war, the Death Star was constructed above the planet. Five years after the conflict/s conclusion and transformation of the Galactic Republic, the Galactic Empire would garrison the planet heavily and attempt to mine the planet/s asteroids for minerals. At least five years after the Clone Wars, the Empire moved the Death Star to another construction site and the planet was sterilized by the Empire as a security measure, an act which resulted in the virtual elimination of the planet/s native population. '),

(8, 'Coruscant', 12240, 'Temperate', 'Moderate', 'Cityscape', 1000000000000,
'[{"name": "Chancellor Palpatine", "url": "https://swapi.dev/api/people/13/"}]',
'[]',
'[{"title": "The Phantom Menace", "url": "https://swapi.dev/api/films/6/"}]', 
'Known as Jewel of the Core Worlds, or Imperial Center during the rule of the Galactic Empire, was an ecumenopolis—a city-covered planet, collectively known as Imperial City— in the Coruscant system of the Core Worlds. Though debated by historians, it was generally believed that Coruscant was the original homeworld of humanity. Coruscant was at one point also historically the home of the ancient Taung and Zhell. Noted for its cosmopolitan culture and towering skyscrapers, Coruscant/s population consisted of trillions of citizens hailing from a vast array of both humanoid and alien species. In addition, Coruscant/s strategic location at the end of several major trade routes enabled it to grow in power and influence, causing the city-planet to surpass its early rivals and become the hub of galactic culture, education, finance, fine arts, politics and technology. It was the location of several major landmarks, including the Jedi Temple, Monument Plaza, and the Senate Building. '),

(9, 'Mustafar', 4200, 'Hot', 'Hellish', 'Volcanoes', 20000,
'[]',
'[]',
'[{"title": "Revenge of the Sith", "url": "https://swapi.dev/api/films/6/"}]',
'Mustafar was a small planet located in the Mustafar system, within the Atravis sector of the galaxy/s Outer Rim Territories. Once a garden world nourished by the Bright Star artifact, its orbit was shifted when Lady Corvax unleashed the energies of the Bright Star in an attempt to return her husband to life. The resulting gravimetric duel between the gas giants Jestefad and Lefrani over Mustafar heated the planet/s core, transforming the lush world into an imbalanced volcanic hellscape. Adapting to life on their devastated homeworld, the arthropodal Mustafarians evolved into two distinct subspecies that cooperated to ensure their continued survival. Legends of Corvax/s search for immortality brought the ancient Sith to Mustafar, seeking the same secrets of eternal life. There, they built a temple over a locus in the dark side of the Force, above the buried ruins of Corvax Fortress. '),

(10, 'Kashyyyk', 12765, 'Tropical', 'Hot', 'Forests', 45000000,
'[]',
'[{"name": "Wookiee", "url": "https://swapi.dev/api/species/3/"}]',
'[{"title": "Revenge of the Sith", "url": "https://swapi.dev/api/films/6/"}]',
'Also known as Planet Wookiee C to some humans in the Core Worlds, was a wroshyr tree-covered forest planet located in the southwestern quadrant of the galaxy and the homeworld of the Wookiee species. Four millennia before the Battle of Yavin, Kashyyyk was discovered by the Czerka Corporation, who enslaved the Wookiee population and renamed the planet G5-623, later to Edean. During the Clone Wars, Kashyyyk was a member of the Galactic Republic, and endured enslavement under the Galactic Empire, the Republic/s successor. Later, during the rise of the New Republic, Kashyyyk was liberated with the help of Republic forces led by Han Solo. '),
   
(11, 'Corellia', 11068, 'Temperate', 'Mild', 'Plains', 3000000000,
'[]',
'[]',
'[{"title": "Solo: A Star Wars Story", "url": "https://swapi.dev/api/films/2/"}]',
'Corellia was a planet located in the galaxy/s Core Worlds known for its ace pilots and large starships. The planet/s vast shipyards produced many vessels over hundreds of years, including starfighters and Star Destroyers for the Galactic Empire as well as other famous models, such as the YT-1300 light freighter.It was the homeworld of Han Solo, Qi/ra, Wedge Antilles, Crix Madine, BoShek, the Besalisk Gadren, the Executive Records Officer Winshur Bratt, the bounty hunters Dengar and Mercurial Swift, and the Jedi younglings Kalifa and Petro. '),

(12, 'Rodia', 7549, 'Hot', 'Hot', 'Jungles', 1300000000,
'[]',
'[]',
'[{"title": "The Phantom Menace", "url": "https://swapi.dev/api/films/4/"}]',
'Homeworld of the Rodians, known for their bounty hunters'),

(13, 'Dantooine', 9830, 'Temperate', 'Mild', 'Plains', 1000,
'[]',
'[]',
'[{"title": "A New Hope", "url": "https://swapi.dev/api/films/1/"}]',
'A quiet, peaceful planet used by the Rebel Alliance'),

(14, 'Dagobah', 'unknown', 'Murky', 'Unknown', 'Swampy', 'Unknown', 
    'Yoda',
    'Unknown',
    'The Empire Strikes Back, Return of the Jedi',
    'Remote, swampy planet and refuge of Yoda, featured in The Empire Strikes Back and Return of the Jedi.'),

(15, 'Mon Cala', 11030, 'Temperate', 'Mild', 'Coral reefs', 2700000000,
    'Mon Calamari',
    '[{"name": "Mon Calamari", "url": "https://swapi.dev/api/species/27/"}]',
    '[{"title": "Return of the Jedi", "url": "https://swapi.dev/api/films/3/"}]',
    'Mon Cala, also known as Mon Calamari or Dac, was an oceanic planet located in the Mon Calamari system, a binary star system positioned in the Calamari sector of the galaxy/s Outer Rim Territories and The Slice. Home to two sentient aquatic species, the industrious Mon Calamari and the prideful Quarren, Mon Cala was known for its shipbuilding industry, which produced beautiful and unique starships for various purposes such as pleasure cruises and deep-space exploration. The Mon Calamari ran the Mon Calamari Shipyards company, and the Quarren ran the Free Dac Volunteers Engineering Corps. '),

(16, 'Iridonia', 12900, 'Temperate', 'Unknown', 'Rocky', 650000000,
    'Zabrak',
    'Zabrak',
    'The Phantom Menace',
    'Iridonia is a planet located in the Outer Rim Territories of the Galaxy. It is a temperate planet with a rocky surface and an atmosphere of sulfuric acid. It is the only planet in the Outer Rim Territories that is also home to the Galactic Republic. '),

(17, 'Bespin', 'unknown', 'Temperate', 'Gas giant', '6 million',
    '[{"name": "Lobot", "url": "https://swapi.dev/api/people/28/"}]',
    '[]',
    '[{"title": "The Empire Strikes Back", "url": "https://swapi.dev/api/films/2/"}]',
    'Bespin is a gas giant that is home to the floating Cloud City.');
