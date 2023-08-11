DROP TABLE IF EXISTS nabokov;

CREATE TABLE nabokov (
  author                    TEXT CHECK (author = 'Vladimir Nabokov') DEFAULT('Vladimir Nabokov'),
  author_date_of_birth      DATE CHECK (author_date_of_birth = '1899-04-22') DEFAULT('1899-04-22'),
  author_date_of_death      DATE CHECK (author_date_of_death = '1977-07-02') DEFAULT('1977-07-02'),
  fiction_title             TEXT,
  fiction_isbn              TEXT,
  fiction_pages             INTEGER,
  fiction_publisher         TEXT,
  fiction_publisher_city    TEXT,
  fiction_year              INTEGER,
  fiction_format            TEXT,
  nonfiction_title          TEXT,
  nonfiction_isbn           TEXT,
  nonfiction_pages          INTEGER,
  nonfiction_publisher      TEXT,
  nonfiction_publisher_city TEXT,
  nonfiction_year           INTEGER,
  nonfiction_format         TEXT
);

-- The Gift
INSERT INTO nabokov (
  fiction_title,
  fiction_isbn,
  fiction_pages,
  fiction_publisher,
  fiction_publisher_city,
  fiction_year,
  fiction_format
) VALUES (
  'The Gift',
  '0679727256',
  384,
  'Vintage',
  'New York',
  1991,
  'paperback'
);

-- Bend Sinister
INSERT INTO nabokov (
  fiction_title,
  fiction_isbn,
  fiction_pages,
  fiction_publisher,
  fiction_publisher_city,
  fiction_year,
  fiction_format
) VALUES (
  'Bend Sinister',
  '0679727272',
  272,
  'Vintage',
  'New York',
  1990,
  'paperback'
);

-- Lolita
INSERT INTO nabokov (
  fiction_title,
  fiction_isbn,
  fiction_pages,
  fiction_publisher,
  fiction_publisher_city,
  fiction_year,
  fiction_format
) VALUES (
  'Lolita',
  '0679723161',
  317,
  'Vintage',
  'New York',
  1989,
  'paperback'
);

-- A Supposedly Fun Thing I‘ll Never Do Again
INSERT INTO nabokov (
  nonfiction_title,
  nonfiction_isbn,
  nonfiction_pages,
  nonfiction_publisher,
  nonfiction_publisher_city,
  nonfiction_year,
  nonfiction_format
) VALUES (
  'Speak, Memory: An Autobiography Revisited',
  '0679723390',
  336,
  'Vintage',
  'New York',
  1989,
  'paperback'
);
