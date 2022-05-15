-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: May 13, 2022 at 08:28 AM
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
  `firstname` varchar(255) NOT NULL,
  `price` varchar(255) NOT NULL,
  `amount` varchar(255) NOT NULL,
  `date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `amountBook`
--

INSERT INTO `amountBook` (`ISBN`, `firstname`, `price`, `amount`, `date`) VALUES
('9783598215957', 'Leslie', '702', '2', '2022-05-13 07:32:09'),
('9783598215995', 'Sandra', '314', '2', '2022-05-13 08:04:01'),
('9783598215919', 'Cameron', '308', '2', '2022-05-13 08:04:01'),
('9783598215766', 'Cameron', '578', '2', '2022-05-13 08:04:01'),
('9783598215933', 'Noah', '500', '2', '2022-05-13 06:47:34');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
