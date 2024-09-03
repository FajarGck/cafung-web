-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 03, 2024 at 08:58 AM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 7.4.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `caffung`
--

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `name`) VALUES
(4, 'Desert'),
(3, 'Drink'),
(2, 'Food');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` text DEFAULT NULL,
  `price` int(11) DEFAULT 0,
  `rate` float NOT NULL DEFAULT 3.5,
  `category_id` int(11) DEFAULT NULL,
  `store_id` int(11) DEFAULT NULL,
  `image_path` varchar(255) DEFAULT 'dummy.png'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `name`, `description`, `price`, `rate`, `category_id`, `store_id`, `image_path`) VALUES
(14, 'Indomie Goreng', 'Indomie Goreng + Telor dan Aneka Sayuran', 7000, 5, 2, 5, 'public\\images\\image-1720010831791.jpg'),
(15, 'Indomie Rebus', 'Indomie Rebus+ Telor dan Aneka Sayuran', 7500, 3.5, 2, 5, 'public\\images\\image-1720011066754.jpeg'),
(16, 'Pecel Sayur', 'Kombinasi sayuran segar dengan bumbu kacang yang nikmat', 8000, 3.5, 2, 5, 'public\\images\\image-1720011404886.jpg'),
(17, 'Gado - Gado', 'Gado - Gado cocok untuk makan siang', 10000, 3.5, 2, 5, 'public\\images\\image-1720025174969.jpg'),
(18, 'Ketoprak', 'Cocok untuk kamu yang butuh makan siang', 11000, 3.5, 2, 5, 'public\\images\\image-1720025298350.JPG'),
(19, 'Pentol Kuah', 'Cocok dijadikan cemilan', 5000, 3.5, 2, 5, 'public\\images\\image-1720025425197.jpg'),
(20, 'Nasi Rames', 'Nasi dengan banyak pilihan lauk', 8000, 3.5, 2, 6, 'public\\images\\image-1720025741028.jpg'),
(21, 'Ayam Bakar', 'Ayam Bakar dengan bumbu Manis khas', 9000, 5, 2, 6, 'public\\images\\image-1720025931035.jpg'),
(22, 'Ayam Goreng', 'Ayam Goreng dengan bumbu Kuning khas', 9000, 3.5, 2, 6, 'public\\images\\image-1720025997589.jpg'),
(23, 'Gorengan', 'Tempe Mendoan, Tahu Isi, dan aneka gorengan lainnya', 0, 3.5, 2, 6, 'public\\images\\image-1720026209987.jpg'),
(24, 'Aneka Sate', 'Sate Usus, Sate Ati, dan sate - satean lainnya', 1500, 3.5, 2, 6, 'public\\images\\image-1720026410185.png'),
(25, 'Aneka Lauk dan Sayuran', 'Beragam lauk dan sayur', 3000, 3.5, 2, 6, 'public\\images\\image-1720026556973.jpeg'),
(26, 'Bakso', 'Perpaduan bakso halus dan baksi isi telur puyuh', 10000, 3.5, 2, 7, 'public\\images\\image-1720026831929.jpg'),
(27, 'Ayam Geprek', 'Nasi dengan Ayam Geprek', 11000, 3.5, 2, 7, 'public\\images\\image-1720026926335.jpg'),
(28, 'Nasi Goreng', 'Nasi Goreng Telur', 10000, 5, 2, 7, 'public\\images\\image-1720027175124.jpg'),
(29, 'Takoyaki', 'Takoyaki dengan beragam topping dan isian', 12000, 3.5, 2, 7, 'public\\images\\image-1720027318759.jpeg'),
(30, 'Kupat Gorengan', 'Kupat dengan aneka Gorengan', 8000, 3.5, 2, 7, 'public\\images\\image-1720027721650.jpg'),
(31, 'Bakso Prasmanan', 'Bebas pilih toping dan isi Bakso', 10000, 3.5, 2, 8, 'public\\images\\image-1720028432909.jpeg'),
(32, 'Mie Ayam Prasmanan', 'Mie Ayam bebas pilih toping dan isi', 10000, 3.5, 2, 8, 'public\\images\\image-1720028578059.jpg'),
(33, 'Seblak Prasmanan', 'Seblak bebas pilih toping dan isi', 8000, 3.5, 2, 8, 'public\\images\\image-1720028736665.jpeg'),
(34, 'Nasi Goreng Endolita', 'Nasi goreng spesial', 12000, 3.5, 2, 8, 'public\\images\\image-1720028902121.jpg'),
(35, 'Ayam Geprek', 'Ayam goreng tepug digeprek dengan sambal Bawang', 9000, 3.5, 2, 8, 'public\\images\\image-1720029087935.jpg'),
(36, 'Pisang Goreng', 'Pisang Goreng isi 5', 9000, 3.5, 2, 8, 'public\\images\\image-1720029178186.jpg'),
(37, 'Mendoan', 'Mendoan isi 5 dengan sambal kecap', 8000, 5, 2, 8, 'public\\images\\image-1720029298605.jpg'),
(38, 'Tahu Isi', 'Tahu isi dengan sambal kecap', 8000, 3.5, 2, 8, 'public\\images\\image-1720029421728.jpg'),
(39, 'Batagor', 'Batagor dengan bumbu kacang khas', 6000, 3.5, 2, 8, 'public\\images\\image-1720029548972.jpg'),
(40, 'Cireng', 'Cireng dengan beragam isi', 7000, 3.5, 2, 8, 'public\\images\\image-1720029638278.jpg'),
(41, 'Teh Pucuk', 'Dipetik dari daun teh pucuk asli dengan ulat sutra🦠', 5000, 3.5, 3, 2, 'public\\images\\image-1720516789000.jpg'),
(42, 'Air Mineral', 'Diambil dari sumber mata air pilihan tanpa tersentuh tangan', 3000, 5, 3, 2, 'public\\images\\image-1720517101018.jpg'),
(43, 'Teh Hitam', 'Teh segar diambil lanngsung dari dataran tinggi Caub', 15000, 3.5, 3, 2, 'public\\images\\image-1720517186882.jpg'),
(44, 'Teh Hijau', 'Teh segar diambil lanngsung dari dataran tinggi Caub', 15000, 3.5, 3, 2, 'public\\images\\image-1720517210627.jpg'),
(45, 'Teh Desa', 'Teh jumbo dengan harga terjangkau', 3000, 3.5, 3, 2, 'public\\images\\image-1720517314462.jpeg'),
(46, 'Bitciato', 'Kenikmatan yang dirasa seakan menghempas segala kecemasan.', 30000, 3.5, 3, 2, 'public\\images\\image-1720517436202.jpeg');

-- --------------------------------------------------------

--
-- Table structure for table `stores`
--

CREATE TABLE `stores` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `owner` varchar(255) NOT NULL,
  `image_path` varchar(255) NOT NULL DEFAULT 'dummy.png',
  `kontak` varchar(15) NOT NULL DEFAULT '08384762746'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `stores`
--

INSERT INTO `stores` (`id`, `name`, `owner`, `image_path`, `kontak`) VALUES
(2, 'Ampu Mart', 'Jarwo', 'public\\images\\image-1719846083808.jpg', '08384762746'),
(5, 'Warmindo Syailendra 168', 'Syailendra', 'public\\images\\image-1720714195912.jpeg', '085837726452'),
(6, 'Warung Makan PW', 'Pak Wahyu', 'public\\images\\image-1720009728484.jpeg', '08384762746'),
(7, 'Kantin Dinasty Kitchen', 'Ibu Leni', 'public\\images\\image-1720009814822.jpeg', '08384762746'),
(8, 'Kedai Makan SR', 'Sugeng', 'public\\images\\image-1720009872888.jpeg', '08384762746');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `category_id` (`category_id`),
  ADD KEY `store_id` (`store_id`);

--
-- Indexes for table `stores`
--
ALTER TABLE `stores`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=48;

--
-- AUTO_INCREMENT for table `stores`
--
ALTER TABLE `stores`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`),
  ADD CONSTRAINT `products_ibfk_2` FOREIGN KEY (`store_id`) REFERENCES `stores` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
