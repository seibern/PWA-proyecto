CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(40),
    email TEXT,
    password VARCHAR(20)
);

INSERT INTO users (name, email, password)
    VALUES ('superUser', 'superUser@pwa.com', '1234');

select * from users;