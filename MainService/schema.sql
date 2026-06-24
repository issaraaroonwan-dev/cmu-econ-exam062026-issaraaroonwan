-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 24, 2026 at 10:53 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `academic_development`
--

-- --------------------------------------------------------

--
-- Table structure for table `academic_service`
--

CREATE TABLE `academic_service` (
  `id` int(100) NOT NULL,
  `service_id` int(11) NOT NULL,
  `title` varchar(100) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `responsible_person` varchar(200) DEFAULT NULL,
  `service_year` varchar(50) DEFAULT NULL,
  `status` enum('draft','published') NOT NULL DEFAULT 'draft',
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT current_timestamp(),
  `deleted_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `academic_service`
--

INSERT INTO `academic_service` (`id`, `service_id`, `title`, `description`, `responsible_person`, `service_year`, `status`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 0, 'ทดสอบระบบ', 'ทดสอบเพิ่มข้อมูลในระบบ', 'Issara Aroonwan', '2026', 'draft', '2026-06-24 13:40:59', '2026-06-24 13:40:59', NULL),
(2, 0, 'ทดสอบเพิ่มข้อมูลในระบบ', 'Issara Aroonwan', '2026', 'draft', 'draft', '2026-06-24 15:24:17', '2026-06-24 15:24:17', NULL),
(3, 0, 'sad', 'sad', 'sad', 'draft', 'draft', '2026-06-24 15:34:30', '2026-06-24 15:34:30', NULL),
(4, 0, 'sdf', 'dsf', '2069', 'draft', 'draft', '2026-06-24 15:38:52', '2026-06-24 15:38:52', NULL),
(5, 0, 'sadas', 'แมวเป้า 7 สี', '2069', 'draft', 'draft', '2026-06-24 15:40:46', '2026-06-24 15:40:46', NULL),
(6, 0, 'sad', 'แมวเป้า 7 สี', '2069', 'draft', 'draft', '2026-06-24 15:41:20', '2026-06-24 15:41:20', NULL),
(7, 0, 'awd', 'aff', '123456', 'draft', 'draft', '2026-06-24 15:42:54', '2026-06-24 15:42:54', NULL),
(8, 0, 'sad', 'sad', 'sad', 'draft', 'draft', '2026-06-24 15:43:26', '2026-06-24 15:43:26', NULL),
(9, 0, 'sad', 'sad', '123456', 'draft', 'draft', '2026-06-24 15:43:34', '2026-06-24 15:43:34', NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `academic_service`
--
ALTER TABLE `academic_service`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `academic_service`
--
ALTER TABLE `academic_service`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
