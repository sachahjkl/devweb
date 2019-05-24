<?php session_start(); ?>
<head>
    <meta charset="utf-8" />
    <link rel="stylesheet" href="style/style.css" />
    <title><?=isset($title) ? $title : "Quefa : Importation de café";?></title>
    <script src="/js/jquery-3.4.1.js"></script>
    <?= isset($import)? $import : ""?>
</head>
