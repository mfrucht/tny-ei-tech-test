DROP TABLE IF EXISTS dfw;

CREATE TABLE dfw (
  author                    TEXT CHECK (author = 'David Foster Wallace') DEFAULT('David Foster Wallace'),
  author_date_of_birth      DATE CHECK (author_date_of_birth = '1962-02-21') DEFAULT('1962-02-21'),
  author_date_of_death      DATE CHECK (author_date_of_death = '2008-09-12') DEFAULT('2008-09-12'),
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

-- The Broom of the System
INSERT INTO dfw (
  fiction_title,
  fiction_isbn,
  fiction_pages,
  fiction_publisher,
  fiction_publisher_city,
  fiction_year,
  fiction_format
) VALUES (
  'The Broom of the System',
  '0670812307',
  467,
  'Viking',
  'New York',
  1987,
  'hardcover'
);

-- Infinite Jest (2006)
INSERT INTO dfw (
  fiction_title,
  fiction_isbn,
  fiction_pages,
  fiction_publisher,
  fiction_publisher_city,
  fiction_year,
  fiction_format
) VALUES (
  'Infinite Jest',
  '0274994747',
  1079,
  'Back Bay Books',
  'Boston',
  2006,
  'paperback'
);

-- Infinite Jest (1997)
INSERT INTO dfw (
  fiction_title,
  fiction_isbn,
  fiction_pages,
  fiction_publisher,
  fiction_publisher_city,
  fiction_year,
  fiction_format
) VALUES (
  'Infinite Jest',
  '0349121087',
  1104,
  'Abacus',
  'New York',
  1997,
  'paperback'
);

-- Oblivion
INSERT INTO dfw (
  fiction_title,
  fiction_isbn,
  fiction_pages,
  fiction_publisher,
  fiction_publisher_city,
  fiction_year,
  fiction_format
) VALUES (
  'Oblivion',
  '0316919810',
  329,
  'Little, Brown and Company',
  'New York',
  2004,
  'paperback'
);

-- A Supposedly Fun Thing I‘ll Never Do Again: Essays and Arguments
INSERT INTO dfw (
  nonfiction_title,
  nonfiction_isbn,
  nonfiction_pages,
  nonfiction_publisher,
  nonfiction_publisher_city,
  nonfiction_year,
  nonfiction_format
) VALUES (
  'A Supposedly Fun Thing I’ll Never Do Again: Essays and Arguments',
  '0316925284',
  368,
  'Back Bay Books',
  'Boston',
  1998,
  'paperback'
);

-- Consider the Lobster and Other Essays
INSERT INTO dfw (
  nonfiction_title,
  nonfiction_isbn,
  nonfiction_pages,
  nonfiction_publisher,
  nonfiction_publisher_city,
  nonfiction_year,
  nonfiction_format
) VALUES (
  'Consider the Lobster and Other Essays',
  '0316013323',
  343,
  'Back Bay Books',
  'Boston',
  2007,
  'paperback'
);
