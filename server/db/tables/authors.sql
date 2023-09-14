DROP TABLE IF EXISTS authors;

CREATE TABLE IF NOT EXISTS `authors` (
	`author_id`	INTEGER PRIMARY KEY AUTOINCREMENT,
	`name`	TEXT,
	`date_of_birth`	TEXT,
	`date_of_death`	TEXT
);
INSERT INTO `authors` VALUES (1,'David Foster Wallace','1962-02-21','2008-09-12');
INSERT INTO `authors` VALUES (2,'Zadie Smith','1975-10-25',NULL);
INSERT INTO `authors` VALUES (3,'Vladimir Nabokov','1899-04-22','1977-07-02');