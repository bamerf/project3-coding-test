CREATE DATABASE project3;

CREATE TABLE words(
  id SERIAL PRIMARY KEY,
  word VARCHAR(300),
  description VARCHAR(300),
  hints TEXT [],
  url VARCHAR(300)
);

CREATE TABLE tags(
  id SERIAL PRIMARY KEY,
  words_id INTEGER NOT NULL,
  tag VARCHAR(300)
);