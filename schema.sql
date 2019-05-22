CREATE DATABASE project3;

CREATE TABLE words(
  id SERIAL PRIMARY KEY,
  word VARCHAR(300),
  description VARCHAR(300),
  hint1 VARCHAR(300),
  hint2 VARCHAR(300),
  hint3 VARCHAR(300),
  url VARCHAR(300)
);

CREATE TABLE tags(
  id SERIAL PRIMARY KEY,
  words_id INTEGER NOT NULL,
  tag VARCHAR(300)
);

CREATE TABLE leaderboard(
  id SERIAL PRIMARY KEY,
  time INTEGER,
  correct_answers INTEGER
)