drop database if exists krazyforum;

create database if not exists krazyforum;

use krazyforum;

CREATE TABLE if not exists `post` (
  `id` int(11) NOT NULL AUTO_INCREMENT primary key,
  `create_timestamp` datetime NOT NULL,
  `author` varchar(256) NOT NULL,
  `category` varchar(256) NOT NULL,
  `comment` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



insert into post (create_timestamp, author, category, comment) values 
  ('2024-01-11 16:00:00', "Darryl", "Sports", "All the best, Liverpool!!!");

insert into post (create_timestamp, author, category, comment) values 
  ('2024-01-12 23:30:00', "Darryl", "Love", "Too many people ask me out - who is my true love?");

insert into post (create_timestamp, author, category, comment) values 
  ('2024-01-12 23:55:00', "Nick", "Love", "Being forever single... why nobody asks me out?");

insert into post (create_timestamp, author, category, comment) values 
  ('2024-01-13 11:18:00', "Brandon", "Sports", "Let's go Manchester United");

insert into post (create_timestamp, author, category, comment) values 
  ('2024-01-14 22:40:00', "Brandon", "Love", "I am happily married to a wonderful woman!");

insert into post (create_timestamp, author, category, comment) values 
  ('2024-02-07 23:14:00', "Nick", "Love", "My heart is racing. Can't wait for V-Day to ask Rachel out on a date.");

insert into post (create_timestamp, author, category, comment) values 
  ('2024-02-14 10:22:00', "Nick", "Love", "There should be a nation-wide ban on Valentine's Day. Period.");

insert into post (create_timestamp, author, category, comment) values 
  ('2024-02-14 20:35:00', "Brandon", "Sports", "Barcelona is not too bad.");

insert into post (create_timestamp, author, category, comment) values 
  ('2024-02-14 22:15:00', "Yin Kit", "Pets", "I spent this year's Valentine's Day with my 6 cats!");

insert into post (create_timestamp, author, category, comment) values 
  ('2024-02-15 22:50:00', "Darryl", "Love", "I am single again. I am fine. I am not okay. I am okay. I am not.");

insert into post (create_timestamp, author, category, comment) values 
  ('2024-03-11 12:30:00', "Yin Kit", "Pets", "I rescued 4 more cats today! I am a proud cat mama!");

insert into post (create_timestamp, author, category, comment) values 
  ('2024-03-13 21:20:00', "Nick", "Food", "Mala for lunch. Mala for dinner. I love mala.");

insert into post (create_timestamp, author, category, comment) values 
  ('2024-03-13 23:35:00', "Yin Kit", "Food", "Had a wonderful mala lunch and dinner with Nick!");