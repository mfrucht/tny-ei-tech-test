DROP TABLE IF EXISTS books;

CREATE TABLE IF NOT EXISTS `books` (
	`book_id`	INTEGER PRIMARY KEY AUTOINCREMENT,
	`title`	TEXT,
	`author_id`	INTEGER,
	`genre`	TEXT,
	`isbn`	TEXT UNIQUE,
	`page_count`	INTEGER,
	`format`	TEXT,
	`publisher_id`	TEXT,
	`year`	INTEGER,
	FOREIGN KEY(`publisher_id`) REFERENCES `publishers`(`publisher_id`),
	FOREIGN KEY(`author_id`) REFERENCES `authors`(`author_id`)
);
INSERT INTO `books` VALUES (1,'The Broom of the System',1,'fiction','0670812307',467,'hardcover','3',1987);
INSERT INTO `books` VALUES (2,'Infinite Jest',1,'fiction','0274994747',1079,'paperback','4',2006);
INSERT INTO `books` VALUES (3,'Infinite Jest',1,'fiction','0349121087',1104,'paperback','5',1997);
INSERT INTO `books` VALUES (4,'Oblivion',1,'fiction','0316919810',329,'paperback','6',2004);
INSERT INTO `books` VALUES (5,'A Supposedly Fun Thing I''ll Never Do Again: Essays and Arguments',1,'non-fiction','0316925284',368,'paperback','4',1998);
INSERT INTO `books` VALUES (6,'Consider the Lobster and Other Essays',1,'non-fiction','0316013323',343,'paperback','4',2007);
INSERT INTO `books` VALUES (7,'The Gift',3,'fiction','0679727256',384,'paperback','1',1991);
INSERT INTO `books` VALUES (8,'Bend Sinister',3,'fiction','0679727272',272,'paperback','1',1990);
INSERT INTO `books` VALUES (9,'Lolita',3,'fiction','0679723161',317,'paperback','1',1989);
INSERT INTO `books` VALUES (10,'Speak, Memory: An Autobiography Revisited',3,'non-fiction','0679723390',336,'paperback','1',1989);
INSERT INTO `books` VALUES (11,'White Teeth',2,'fiction','0375703861',464,'paperback','1',2001);
INSERT INTO `books` VALUES (12,'On Beauty',2,'fiction','014101945X',464,'paperback','2',2006);
INSERT INTO `books` VALUES (13,'NW',2,'fiction','1594203970',416,'hardcover','2',2012);
