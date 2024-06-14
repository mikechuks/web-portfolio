-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 11, 2024 at 02:24 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.1.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `my_project`
--

-- --------------------------------------------------------

--
-- Table structure for table `header`
--

CREATE TABLE `header` (
  `header_id` int(11) NOT NULL,
  `header_name` varchar(100) NOT NULL,
  `header_content` text NOT NULL,
  `header_image` varchar(50) NOT NULL,
  `header_btn_text` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `header`
--

INSERT INTO `header` (`header_id`, `header_name`, `header_content`, `header_image`, `header_btn_text`) VALUES
(1, 'Jhon', 'wefrrwerfreer', 'fwewfewe.jpg', 'ewwfwer');

-- --------------------------------------------------------

--
-- Table structure for table `portfolio`
--

CREATE TABLE `portfolio` (
  `port_id` int(11) NOT NULL,
  `port_title` varchar(50) NOT NULL,
  `port_text` text NOT NULL,
  `port_img` varchar(50) NOT NULL,
  `port_img_des` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `portfolio`
--

INSERT INTO `portfolio` (`port_id`, `port_title`, `port_text`, `port_img`, `port_img_des`) VALUES
(1, 'wdws', 'ioioi', 'couch.png', 'trggrtf'),
(2, 'wdws', 'ioioi', 'bowl-2.png', 'wdww');

-- --------------------------------------------------------

--
-- Table structure for table `pro_experience`
--

CREATE TABLE `pro_experience` (
  `experience_id` int(11) NOT NULL,
  `company_name` varchar(100) NOT NULL,
  `company_image` varchar(50) NOT NULL,
  `experience_details` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `pro_experience`
--

INSERT INTO `pro_experience` (`experience_id`, `company_name`, `company_image`, `experience_details`) VALUES
(1, 'vyuuf', 'tydtc', 'couch.png'),
(3, 'vyuuf', 'tydtc', 'couch.png');

-- --------------------------------------------------------

--
-- Table structure for table `skill`
--

CREATE TABLE `skill` (
  `skill_id` int(11) NOT NULL,
  `skill_header` varchar(50) NOT NULL,
  `skill_list` varchar(300) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `skill`
--

INSERT INTO `skill` (`skill_id`, `skill_header`, `skill_list`) VALUES
(1, 'efstyt2', 'vyvujyh'),
(2, 'werfwe', 'erwfrf');

-- --------------------------------------------------------

--
-- Table structure for table `testimony`
--

CREATE TABLE `testimony` (
  `testimony_id` int(11) NOT NULL,
  `testimony_header` varchar(50) NOT NULL,
  `testimony_details` text NOT NULL,
  `testimony_image` varchar(50) NOT NULL,
  `testimony_name` varchar(50) NOT NULL,
  `testimony_proffession` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `testimony`
--

INSERT INTO `testimony` (`testimony_id`, `testimony_header`, `testimony_details`, `testimony_image`, `testimony_name`, `testimony_proffession`) VALUES
(1, 'uimiui1', 'yunnyu', 'uunuy', 'unhhu', 'uuhuyut'),
(2, 'dvcvv', 'dfdffgfg', '', '', ''),
(3, 'dvcvv', 'reretg', '', '', ''),
(4, 'rvrrv', 'rrvrfv', '', '', ''),
(5, 'rvrrv', 'rrvrfv', '', '', ''),
(6, 'fdrvfdv', 'drffr', '', '', ''),
(7, 'dvcvv', 'dfdffgfg', 'bowl-2.png', 'rerfeaer', 'reafrtrre');

-- --------------------------------------------------------

--
-- Table structure for table `user_table`
--

CREATE TABLE `user_table` (
  `user_id` int(11) NOT NULL,
  `user_name` varchar(50) NOT NULL,
  `user_email` varchar(50) NOT NULL,
  `user_password` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `user_table`
--

INSERT INTO `user_table` (`user_id`, `user_name`, `user_email`, `user_password`) VALUES
(1, 'kkl', 'bjjk', 'srsssrt');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `header`
--
ALTER TABLE `header`
  ADD PRIMARY KEY (`header_id`);

--
-- Indexes for table `portfolio`
--
ALTER TABLE `portfolio`
  ADD PRIMARY KEY (`port_id`);

--
-- Indexes for table `pro_experience`
--
ALTER TABLE `pro_experience`
  ADD PRIMARY KEY (`experience_id`);

--
-- Indexes for table `skill`
--
ALTER TABLE `skill`
  ADD PRIMARY KEY (`skill_id`);

--
-- Indexes for table `testimony`
--
ALTER TABLE `testimony`
  ADD PRIMARY KEY (`testimony_id`);

--
-- Indexes for table `user_table`
--
ALTER TABLE `user_table`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `header`
--
ALTER TABLE `header`
  MODIFY `header_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `portfolio`
--
ALTER TABLE `portfolio`
  MODIFY `port_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `pro_experience`
--
ALTER TABLE `pro_experience`
  MODIFY `experience_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `skill`
--
ALTER TABLE `skill`
  MODIFY `skill_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `testimony`
--
ALTER TABLE `testimony`
  MODIFY `testimony_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `user_table`
--
ALTER TABLE `user_table`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
