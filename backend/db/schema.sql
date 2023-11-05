CREATE TABLE postcards ( 
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    image_url VARCHAR(255) NOT NULL
    diameter DECIMAL,
    climate VARCHAR(255),
    terrain VARCHAR(255),
    population BIGINT,
    residents JSONB,
    films JSONB,
    url VARCHAR(255)
);

CREATE TABLE films (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    director VARCHAR(255),
    producer VARCHAR(255),
    release_date DATE,
    characters JSONB,
    planets JSONB,
    starships JSONB,
    vehicles JSONB,
    species JSONB
);

CREATE TABLE planets (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    climate VARCHAR(255),
    terrain VARCHAR(255),
    population BIGINT,
    residents JSONB
);