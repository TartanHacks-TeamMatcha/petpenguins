CREATE DATABASE IF NOT EXISTS `petpenguins` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `petpenguins`;

CREATE TABLE IF NOT EXISTS `accounts` (
	`id` int(11) NOT NULL AUTO_INCREMENT,
    `username` varchar(50) NOT NULL,
    `password` varchar(255) NOT NULL,
    `email` varchar(100) NOT NULL,
    `andrewid` varchar(100) NOT NULL,
    `onIsland` BOOLEAN NOT NULL,
    `lastActive` DATETIME,
    PRIMARY KEY (`id`)
) ENGINE = InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;