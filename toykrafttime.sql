-- phpMyAdmin SQL Dump
-- version 4.1.12
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Sep 02, 2014 at 03:51 PM
-- Server version: 5.6.16
-- PHP Version: 5.5.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `toykrafttime`
--

-- --------------------------------------------------------

--
-- Table structure for table `accesslevel`
--

CREATE TABLE IF NOT EXISTS `accesslevel` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `accesslevel` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=3 ;

--
-- Dumping data for table `accesslevel`
--

INSERT INTO `accesslevel` (`id`, `name`, `accesslevel`) VALUES
(1, 'Admin', 1),
(2, 'Dealer', 2);

-- --------------------------------------------------------

--
-- Table structure for table `area`
--

CREATE TABLE IF NOT EXISTS `area` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `city` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `distributor` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `city` (`city`),
  KEY `city_2` (`city`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=4 ;

--
-- Dumping data for table `area`
--

INSERT INTO `area` (`id`, `city`, `name`, `distributor`) VALUES
(1, 1, 'Goregaon', 1),
(3, 1, 'Goregaon', 2);

-- --------------------------------------------------------

--
-- Table structure for table `catelog`
--

CREATE TABLE IF NOT EXISTS `catelog` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `order` int(11) NOT NULL,
  `parent` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=2 ;

--
-- Dumping data for table `catelog`
--

INSERT INTO `catelog` (`id`, `name`, `order`, `parent`) VALUES
(1, 'abc', 1, '1');

-- --------------------------------------------------------

--
-- Table structure for table `city`
--

CREATE TABLE IF NOT EXISTS `city` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `state` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `state` (`state`),
  KEY `state_2` (`state`),
  KEY `state_3` (`state`),
  KEY `state_4` (`state`),
  KEY `state_5` (`state`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=3 ;

--
-- Dumping data for table `city`
--

INSERT INTO `city` (`id`, `state`, `name`) VALUES
(1, 1, 'mumbai'),
(2, 2, 'Karjat');

-- --------------------------------------------------------

--
-- Table structure for table `distributor`
--

CREATE TABLE IF NOT EXISTS `distributor` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `code` varchar(255) NOT NULL,
  `componyname` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `contactno` bigint(20) NOT NULL,
  `dob` date NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=3 ;

--
-- Dumping data for table `distributor`
--

INSERT INTO `distributor` (`id`, `name`, `code`, `componyname`, `email`, `contactno`, `dob`) VALUES
(1, 'ABC', 'A1', 'AAA', 'avinash@gmail.com', 9898989898, '2010-11-08'),
(2, 'jagz', 'aa1', 'aaaa', 'a@gmail.com', 8989898989, '2010-11-08');

-- --------------------------------------------------------

--
-- Table structure for table `loguser`
--

CREATE TABLE IF NOT EXISTS `loguser` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `state` varchar(255) NOT NULL,
  `ip` varchar(255) NOT NULL,
  `lat` varchar(255) NOT NULL,
  `long` varchar(255) NOT NULL,
  `timestamp` date NOT NULL,
  `action` varchar(255) NOT NULL,
  `user` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=3 ;

--
-- Dumping data for table `loguser`
--

INSERT INTO `loguser` (`id`, `state`, `ip`, `lat`, `long`, `timestamp`, `action`, `user`) VALUES
(2, 'maharashtra', '111.112.113.114', '11.11', '12.13', '2014-07-08', 'any1', 2);

-- --------------------------------------------------------

--
-- Table structure for table `orderproduct`
--

CREATE TABLE IF NOT EXISTS `orderproduct` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `order` int(11) NOT NULL,
  `product` int(11) NOT NULL,
  `quantity` int(11) NOT NULL,
  `amount` double NOT NULL,
  `scheme_id` int(11) NOT NULL,
  `status` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=5 ;

--
-- Dumping data for table `orderproduct`
--

INSERT INTO `orderproduct` (`id`, `order`, `product`, `quantity`, `amount`, `scheme_id`, `status`) VALUES
(1, 1, 1, 10, 10000, 1, 1),
(2, 9, 2, 5, 3500, 2, 1),
(3, 2, 2, 5, 3500, 2, 1),
(4, 2, 2, 5, 3500, 2, 1);

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE IF NOT EXISTS `orders` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `retail` int(11) NOT NULL,
  `sales` varchar(255) NOT NULL,
  `timestamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `amount` double NOT NULL,
  `signature` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=3 ;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`id`, `retail`, `sales`, `timestamp`, `amount`, `signature`) VALUES
(1, 1, 'aads', '2014-07-08 12:19:38', 102012, 'axbas.jpg'),
(2, 1, 'dpp', '2014-07-08 12:19:38', 12000, 'asx.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE IF NOT EXISTS `product` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `product` varchar(255) NOT NULL,
  `encode` varchar(255) NOT NULL,
  `name2` varchar(255) NOT NULL,
  `productcode` varchar(255) NOT NULL,
  `category` int(11) NOT NULL,
  `video` varchar(255) NOT NULL,
  `mrp` double NOT NULL,
  `description` text NOT NULL,
  `age` int(11) NOT NULL,
  `scheme` varchar(255) NOT NULL,
  `isnew` int(11) NOT NULL,
  `timestamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=2 ;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`id`, `name`, `product`, `encode`, `name2`, `productcode`, `category`, `video`, `mrp`, `description`, `age`, `scheme`, `isnew`, `timestamp`) VALUES
(1, 'Pendrive', 'electronics', 'abcd', 'Pendrive2', 'A101', 1, 'abc.mp4', 101.11, 'Best Product in india', 5, '1', 1, '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `productimage`
--

CREATE TABLE IF NOT EXISTS `productimage` (
  `product` int(11) NOT NULL,
  `image` varchar(255) NOT NULL,
  `order` int(11) NOT NULL,
  `views` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `productimage`
--

INSERT INTO `productimage` (`product`, `image`, `order`, `views`) VALUES
(1, 'aaa.png', 2, 32);

-- --------------------------------------------------------

--
-- Table structure for table `producttag`
--

CREATE TABLE IF NOT EXISTS `producttag` (
  `product` varchar(255) NOT NULL,
  `tag` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `retailer`
--

CREATE TABLE IF NOT EXISTS `retailer` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `code` varchar(100) NOT NULL,
  `compony_name` varchar(255) NOT NULL,
  `email` varchar(100) NOT NULL,
  `contactno` bigint(20) NOT NULL,
  `address` text NOT NULL,
  `contactperson` varchar(255) NOT NULL,
  `lat` double NOT NULL,
  `long` double NOT NULL,
  `area` int(11) NOT NULL,
  `dob` date NOT NULL,
  `type_of_area` int(11) NOT NULL,
  `sq_feet` float NOT NULL,
  `store_image` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=2 ;

--
-- Dumping data for table `retailer`
--

INSERT INTO `retailer` (`id`, `name`, `code`, `compony_name`, `email`, `contactno`, `address`, `contactperson`, `lat`, `long`, `area`, `dob`, `type_of_area`, `sq_feet`, `store_image`) VALUES
(1, 'adasd', 'asda', 'asdas', 'avinash@gmail.com', 8989898989, 'aasx xasjxhbj akjsxkja', 'asxasj', 10.212, 20.212, 1, '2014-08-01', 1, 123, 'cscsd.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `retailerlog`
--

CREATE TABLE IF NOT EXISTS `retailerlog` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `image` varchar(255) NOT NULL,
  `salesperson` varchar(255) NOT NULL,
  `retailer` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=3 ;

--
-- Dumping data for table `retailerlog`
--

INSERT INTO `retailerlog` (`id`, `name`, `image`, `salesperson`, `retailer`) VALUES
(1, 'abc', 'pqr.jpg', 'abcdefg', 2),
(2, 'qqq', 'qqq.jpg', 'qwqw', 1);

-- --------------------------------------------------------

--
-- Table structure for table `scheme`
--

CREATE TABLE IF NOT EXISTS `scheme` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(250) NOT NULL,
  `discount_percent` float NOT NULL,
  `date_start` date NOT NULL,
  `date_end` date NOT NULL,
  `mrp` double NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=3 ;

--
-- Dumping data for table `scheme`
--

INSERT INTO `scheme` (`id`, `name`, `discount_percent`, `date_start`, `date_end`, `mrp`) VALUES
(1, 'sale', 10, '2014-08-14', '2014-07-12', 1000),
(2, 'Allspecial', 20, '2014-07-09', '2014-07-12', 2000);

-- --------------------------------------------------------

--
-- Table structure for table `state`
--

CREATE TABLE IF NOT EXISTS `state` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `zone` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `zone` (`zone`),
  KEY `zone_2` (`zone`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=3 ;

--
-- Dumping data for table `state`
--

INSERT INTO `state` (`id`, `zone`, `name`) VALUES
(1, 1, 'mah'),
(2, 1, 'goa');

-- --------------------------------------------------------

--
-- Table structure for table `tags`
--

CREATE TABLE IF NOT EXISTS `tags` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=3 ;

--
-- Dumping data for table `tags`
--

INSERT INTO `tags` (`id`, `name`) VALUES
(2, 'sold');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `mobile` int(11) NOT NULL,
  `accessleve` tinyint(4) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=2 ;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `username`, `password`, `email`, `mobile`, `accessleve`) VALUES
(1, 'Jagruti', 'jagz', 'jag123', 'jag@gmail.com', 12345, 2);

-- --------------------------------------------------------

--
-- Table structure for table `zone`
--

CREATE TABLE IF NOT EXISTS `zone` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=3 ;

--
-- Dumping data for table `zone`
--

INSERT INTO `zone` (`id`, `name`) VALUES
(1, 'industrial'),
(2, 'industrial3');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
