CREATE TABLE planets (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    image TEXT NOT NULL
    climate TEXT,
    terrain TEXT,
    population BIGINT,
    films TEXT,
    residents TEXT,
    url TEXT
);

CREATE TABLE postcards ( 
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    message TEXT,
    planet_id REFERENCES planets(id) 
);