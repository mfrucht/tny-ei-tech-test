DROP TABLE IF EXISTS publishers;

CREATE TABLE IF NOT EXISTS `publishers` (
	`publisher_id`	INTEGER PRIMARY KEY AUTOINCREMENT,
	`publisher_name`	INTEGER,
	`city`	TEXT
);
INSERT INTO `publishers` VALUES (1,'Vintage','New York');
INSERT INTO `publishers` VALUES (2,'Penguin','London');
INSERT INTO `publishers` VALUES (3,'Viking','New York');
INSERT INTO `publishers` VALUES (4,'Back Bay Books','Boston');
INSERT INTO `publishers` VALUES (5,'Abacus','New York');
INSERT INTO `publishers` VALUES (6,'Little, Brown and Company','New york');
