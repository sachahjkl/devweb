-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le :  ven. 24 mai 2019 à 13:45
-- Version du serveur :  5.7.26
-- Version de PHP :  7.2.18

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `pls-ql`
--

-- --------------------------------------------------------

--
-- Structure de la table `cafe`
--

DROP TABLE IF EXISTS `cafe`;
CREATE TABLE IF NOT EXISTS `cafe` (
  `IdCafe` int(11) NOT NULL AUTO_INCREMENT,
  `idTypeCafe` int(11) NOT NULL,
  `idPays` int(11) NOT NULL,
  `qte` int(11) NOT NULL,
  PRIMARY KEY (`IdCafe`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `commande`
--

DROP TABLE IF EXISTS `commande`;
CREATE TABLE IF NOT EXISTS `commande` (
  `IdCommande` int(11) NOT NULL AUTO_INCREMENT,
  `idTypeCafe` int(11) NOT NULL,
  `origine` int(1) NOT NULL,
  `choixExport` int(11) NOT NULL,
  `date` date NOT NULL,
  PRIMARY KEY (`IdCommande`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `pays`
--

DROP TABLE IF EXISTS `pays`;
CREATE TABLE IF NOT EXISTS `pays` (
  `IdPays` int(11) NOT NULL AUTO_INCREMENT,
  `nomPays` text NOT NULL,
  `alphacode2` int(2) NOT NULL,
  `Description` text,
  `capitale` text NOT NULL,
  `nbHabitants` int(11) NOT NULL,
  `CafeTonne` float NOT NULL,
  `CafePourcent` float NOT NULL,
  PRIMARY KEY (`IdPays`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `typecafe`
--

DROP TABLE IF EXISTS `typecafe`;
CREATE TABLE IF NOT EXISTS `typecafe` (
  `IdTypeCafe` int(11) NOT NULL AUTO_INCREMENT,
  `TypeCafe` text NOT NULL,
  PRIMARY KEY (`IdTypeCafe`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `typeutilisateur`
--

DROP TABLE IF EXISTS `typeutilisateur`;
CREATE TABLE IF NOT EXISTS `typeutilisateur` (
  `IdTypeUtilisateur` int(11) NOT NULL AUTO_INCREMENT,
  `Type` text NOT NULL,
  PRIMARY KEY (`IdTypeUtilisateur`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `utilisateur`
--

DROP TABLE IF EXISTS `utilisateur`;
CREATE TABLE IF NOT EXISTS `utilisateur` (
  `IdUtilisateur` int(11) NOT NULL AUTO_INCREMENT,
  `type` int(1) NOT NULL,
  `idconnexion` text NOT NULL,
  `mdp` text NOT NULL,
  `nomentreprise` text NOT NULL,
  `adresse` text NOT NULL,
  `codepostale` varchar(12) NOT NULL,
  `ville` text NOT NULL,
  `pays` int(1) NOT NULL,
  `telephone` int(10) NOT NULL,
  PRIMARY KEY (`IdUtilisateur`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
