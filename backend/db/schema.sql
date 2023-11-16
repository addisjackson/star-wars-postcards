DROP TABLE IF EXISTS postcards CASCADE;
DROP TABLE IF EXISTS planets;

CREATE TABLE planets (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    diameter INT,
    climate VARCHAR(255) NOT NULL,
    temperature VARCHAR(255) NOT NULL,
    terrain VARCHAR(255) NOT NULL,
    population BIGINT,
    residents JSONB,
    species JSONB,
    films JSONB,
    synopsis TEXT
);


CREATE TABLE postcards ( 
    id SERIAL PRIMARY KEY,
    image_url VARCHAR(255) NOT NULL,
    location VARCHAR(255) NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    quantity INT NOT NULL,
    synopsis TEXT,
    films JSONB,
    url VARCHAR(255) NOT NULL
);


