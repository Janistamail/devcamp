-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: May 13, 2022 at 07:36 AM
-- Server version: 5.7.34
-- PHP Version: 7.4.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `devCap2`
--

-- --------------------------------------------------------

--
-- Table structure for table `amountBook`
--

CREATE TABLE `amountBook` (
  `ISBN` varchar(255) NOT NULL,
  `id` varchar(255) NOT NULL,
  `firstname` varchar(255) NOT NULL,
  `price` varchar(255) NOT NULL,
  `amount` varchar(255) NOT NULL,
  `date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `amountBook`
--

INSERT INTO `amountBook` (`ISBN`, `id`, `firstname`, `price`, `amount`, `date`) VALUES
('9783598215933', '1', 'Michael', '500', '2', '2022-05-13 00:00:00'),
('9783598215933', '1', 'Michael', '500', '2', '2022-05-13 07:32:09'),
('9783598215933', '1', 'Michael', '500', '2', '2022-05-13 07:32:09'),
('9783598215957', '1', 'Jane', '702', '2', '2022-05-13 07:32:09'),
('9783598215995', '1', 'Sam', '314', '2', '2022-05-13 07:32:09'),
('9783598215919', '1', 'John', '308', '2', '2022-05-13 07:32:09'),
('9783598215766', '1', 'Tom', '578', '2', '2022-05-13 07:32:09');

-- --------------------------------------------------------

--
-- Table structure for table `Book`
--

CREATE TABLE `Book` (
  `ISBN` varchar(13) NOT NULL,
  `Title` varchar(20) NOT NULL,
  `Price` int(11) NOT NULL,
  `Date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `Book`
--

INSERT INTO `Book` (`ISBN`, `Title`, `Price`, `Date`) VALUES
('9783598215933', 'The Marquis and I', 250, '2022-05-13 00:00:00'),
('9783598215933', 'The Marquis and I', 250, '2022-05-13 00:00:00'),
('9783598215957', 'Blood on the Tongue', 352, '2022-05-13 00:00:00'),
('9783598215995', 'A Higher Loyalty', 157, '2022-05-13 00:00:00'),
('9783598215919', 'The Mars Room', 199, '2022-05-13 00:00:00'),
('9783598215766', 'His Toy', 289, '2022-05-13 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `firstname` varchar(255) NOT NULL,
  `lastname` varchar(255) NOT NULL,
  `age` int(11) NOT NULL,
  `date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `firstname`, `lastname`, `age`, `date`) VALUES
(1, 'Noah', 'Armstrong', 34, '2022-05-13 00:00:00'),
(1, 'Noah', 'Armstrong', 34, '2022-05-13 00:00:00'),
(2, 'Leslie', 'Ellis', 24, '2022-05-13 00:00:00'),
(3, 'Sandra', 'Hoffman', 35, '2022-05-13 00:00:00'),
(4, 'Cameron', 'Meyer', 19, '2022-05-13 00:00:00'),
(5, 'Noah', 'Moore', 27, '2022-05-13 00:00:00');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
