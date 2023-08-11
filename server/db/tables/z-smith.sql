DROP TABLE IF EXISTS z_smith;

CREATE TABLE z_smith (
  author               TEXT CHECK (author = 'Zadie Smith') DEFAULT('Zadie Smith'),
  author_date_of_birth DATE CHECK (author_date_of_birth = '1975-10-25') DEFAULT('1975-10-25'),
  title                TEXT,
  isbn                 TEXT,
  pages                INTEGER,
  publisher            TEXT,
  publisher_city       TEXT,
  year                 INTEGER,
  format               TEXT
);

-- White Teeth
INSERT INTO z_smith (
  title,
  isbn,
  pages,
  publisher,
  publisher_city,
  year,
  format
) VALUES (
  'White Teeth',
  '0375703861',
  464,
  'Vintage',
  'New York',
  2001,
  'paperback'
);

-- On Beauty
INSERT INTO z_smith (
  title,
  isbn,
  pages,
  publisher,
  publisher_city,
  year,
  format
) VALUES (
  'On Beauty',
  '014101945X',
  464,
  'Penguin',
  'London',
  2006,
  'paperback'
);

-- NW
INSERT INTO z_smith (
  title,
  isbn,
  pages,
  publisher,
  publisher_city,
  year,
  format
) VALUES (
  'NW',
  '1594203970',
  416,
  'Penguin',
  'London',
  2012,
  'hardcover'
);
