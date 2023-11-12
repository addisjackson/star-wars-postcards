CREATE TABLE postcards ( 
    id SERIAL PRIMARY KEY,
<<<<<<< HEAD:backend/db/schema.sql
    name VARCHAR(255) NOT NULL,
    image_url VARCHAR(255) NOT NULL
    diameter DECIMAL,
    climate VARCHAR(255),
    terrain VARCHAR(255),
    population BIGINT,
    residents JSONB,
    films JSONB,
    url VARCHAR(255)
=======
    location VARCHAR(255) NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    quantity INT NOT NULL,
    synopsis TEXT,
    film_id INT REFERENCES films(id),
    planet_id INT REFERENCES planets(id)
>>>>>>> f075e08 (finishes backend):db/schema.sql
);

CREATE TABLE films (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    director VARCHAR(255) NOT NULL,
    producer VARCHAR(255) NOT NULL,
    release_date DATE NOT NULL,
    characters JSONB,
    planets JSONB,
<<<<<<< HEAD:backend/db/schema.sql
    starships JSONB,
    vehicles JSONB,
=======
    starships_vehicles JSONB,
>>>>>>> f075e08 (finishes backend):db/schema.sql
    species JSONB
);

CREATE TABLE planets (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
<<<<<<< HEAD:backend/db/schema.sql
    climate VARCHAR(255),
    terrain VARCHAR(255),
    population BIGINT,
    residents JSONB
);
=======
    diameter INT NOT NULL,
    climate VARCHAR(255) NOT NULL,
    temperature VARCHAR(255) NOT NULL,
    terrain VARCHAR(255) NOT NULL,
    population INT NOT NULL,
    residents JSONB,
    species JSONB,
    films JSONB,
    synopsis TEXT
);
>>>>>>> f075e08 (finishes backend):db/schema.sql
