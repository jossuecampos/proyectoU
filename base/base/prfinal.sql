CREATE DATABASE  IF NOT EXISTS `prfinal` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `prfinal`;
-- MySQL dump 10.13  Distrib 8.0.38, for Win64 (x86_64)
--
-- Host: localhost    Database: prfinal
-- ------------------------------------------------------
-- Server version	9.0.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `clientes`
--

DROP TABLE IF EXISTS `clientes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `clientes` (
  `id_cliente` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) NOT NULL,
  `apellido` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `telefono` varchar(20) DEFAULT NULL,
  `direccion` varchar(50) DEFAULT NULL,
  `fecha_registro` date NOT NULL,
  PRIMARY KEY (`id_cliente`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `clientes`
--

LOCK TABLES `clientes` WRITE;
/*!40000 ALTER TABLE `clientes` DISABLE KEYS */;
/*!40000 ALTER TABLE `clientes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `datacpu`
--

DROP TABLE IF EXISTS `datacpu`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `datacpu` (
  `Nombre` text,
  `Precio` double DEFAULT NULL,
  `Proveedor` text,
  `MPN` text,
  `EAN` bigint DEFAULT NULL,
  `Reloj base` text,
  `Reloj turbo` text,
  `Multiplicador desbloqueado` text,
  `Nucleos` int DEFAULT NULL,
  `Subprocesos` int DEFAULT NULL,
  `TDP` text,
  `Socket` text,
  `GPU integrada` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `datacpu`
--

LOCK TABLES `datacpu` WRITE;
/*!40000 ALTER TABLE `datacpu` DISABLE KEYS */;
/*!40000 ALTER TABLE `datacpu` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `datacpucooler`
--

DROP TABLE IF EXISTS `datacpucooler`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `datacpucooler` (
  `Nombre` text,
  `Precio` double DEFAULT NULL,
  `Proveedor` text,
  `MPN` text,
  `EAN` bigint DEFAULT NULL,
  `Enchufes compatibles` text,
  `Alto` text,
  `Soporte adicional para fan` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `datacpucooler`
--

LOCK TABLES `datacpucooler` WRITE;
/*!40000 ALTER TABLE `datacpucooler` DISABLE KEYS */;
/*!40000 ALTER TABLE `datacpucooler` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `datagpu`
--

DROP TABLE IF EXISTS `datagpu`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `datagpu` (
  `Nombre` text,
  `Precio` double DEFAULT NULL,
  `Proveedor` text,
  `MPN` text,
  `EAN` bigint DEFAULT NULL,
  `Longitud` text,
  `Ranuras` double DEFAULT NULL,
  `Conectores de 8 pines` int DEFAULT NULL,
  `Conectores de 6 pines` int DEFAULT NULL,
  `HDMI` int DEFAULT NULL,
  `DisplayPort` int DEFAULT NULL,
  `DVI` int DEFAULT NULL,
  `VGA` int DEFAULT NULL,
  `Relog de Boost` text,
  `Vram` text,
  `Reloj de memoria` text,
  `TDP` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `datagpu`
--

LOCK TABLES `datagpu` WRITE;
/*!40000 ALTER TABLE `datagpu` DISABLE KEYS */;
/*!40000 ALTER TABLE `datagpu` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `datahdd`
--

DROP TABLE IF EXISTS `datahdd`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `datahdd` (
  `Nombre` text,
  `Precio` double DEFAULT NULL,
  `Proveedor` text,
  `MPN` text,
  `EAN` bigint DEFAULT NULL,
  `Tamaño` text,
  `RPM` double DEFAULT NULL,
  `Cache` double DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `datahdd`
--

LOCK TABLES `datahdd` WRITE;
/*!40000 ALTER TABLE `datahdd` DISABLE KEYS */;
/*!40000 ALTER TABLE `datahdd` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `datamonitor`
--

DROP TABLE IF EXISTS `datamonitor`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `datamonitor` (
  `Nombre` text,
  `Precio` double DEFAULT NULL,
  `Proveedor` text,
  `MPN` text,
  `EAN` double DEFAULT NULL,
  `Resolucion` text,
  `Frecuencia de actualizacion` text,
  `Tamaño` text,
  `Panel` text,
  `Tiempo de respuesta` int DEFAULT NULL,
  `HDMI` int DEFAULT NULL,
  `DisplayPort` int DEFAULT NULL,
  `DVI` int DEFAULT NULL,
  `VGA` int DEFAULT NULL,
  `Altavoz` text,
  `Curvado` text,
  `Altura ajustable` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `datamonitor`
--

LOCK TABLES `datamonitor` WRITE;
/*!40000 ALTER TABLE `datamonitor` DISABLE KEYS */;
/*!40000 ALTER TABLE `datamonitor` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `datamotherboard`
--

DROP TABLE IF EXISTS `datamotherboard`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `datamotherboard` (
  `Nombre` text,
  `Precio` double DEFAULT NULL,
  `Proveedor` text,
  `MPN` text,
  `EAN` bigint DEFAULT NULL,
  `Socket` text,
  `Chipset` text,
  `Desbloqueado` text,
  `Formato` text,
  `Capacidad de memoria` text,
  `Ranuras de RAM` int DEFAULT NULL,
  `SATA` int DEFAULT NULL,
  `VGA` int DEFAULT NULL,
  `DVI` int DEFAULT NULL,
  `HDMI` int DEFAULT NULL,
  `DisplayPort` int DEFAULT NULL,
  `USB 3.0` int DEFAULT NULL,
  `USB 2.0` int DEFAULT NULL,
  `Ethernet` text,
  `Wifi` text,
  `M.2` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `datamotherboard`
--

LOCK TABLES `datamotherboard` WRITE;
/*!40000 ALTER TABLE `datamotherboard` DISABLE KEYS */;
/*!40000 ALTER TABLE `datamotherboard` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `dataram`
--

DROP TABLE IF EXISTS `dataram`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `dataram` (
  `Nombre` text,
  `Precio` double DEFAULT NULL,
  `Proveedor` text,
  `MPN` text,
  `EAN` bigint DEFAULT NULL,
  `Velocidad` text,
  `Tamaño` text,
  `Latencia CAS` text,
  `Voltaje` text,
  `Tamaño de modulo` text,
  `Cantidad de modulos` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `dataram`
--

LOCK TABLES `dataram` WRITE;
/*!40000 ALTER TABLE `dataram` DISABLE KEYS */;
/*!40000 ALTER TABLE `dataram` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `datassd`
--

DROP TABLE IF EXISTS `datassd`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `datassd` (
  `Nombre` text,
  `Precio` double DEFAULT NULL,
  `Proveedor` text,
  `MPN` text,
  `EAN` bigint DEFAULT NULL,
  `Tamaño` text,
  `Tipo de memoria` text,
  `Rendimiento de lectura` double DEFAULT NULL,
  `Rendimiento de escritura` double DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `datassd`
--

LOCK TABLES `datassd` WRITE;
/*!40000 ALTER TABLE `datassd` DISABLE KEYS */;
/*!40000 ALTER TABLE `datassd` ENABLE KEYS */;
UNLOCK TABLES;

/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-09-06 14:52:24
