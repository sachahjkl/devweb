<header>
    <link rel="stylesheet" href="style/menu.css" />
    <div id="titre">
        KEFA.
    </div>
    <div id="auth_buttons">
        <a id="openConn" href="#connexion">Connexion</a>
        <a id="openInsc" href="#inscription">Inscription</a>
    </div>
</header>
<nav>
    <ul>
        <li>
            <a href="?url=map.php">Accueil</a>
        </li>
        <li>
            <a href="?url=apropos.php">A propos</a>
        </li>
        <?php if(isset($_SESSION['type']) && $_SESSION['type'] == 1){ ?>
            <li>
                <a href="?url=export.php">Exporteur</a>
            </li>
        <?php } elseif(isset($_SESSION['type']) && $_SESSION['type'] == 2) { ?>
            <li>
                <a href="?url=import.php">Importeur</a>
            </li>
        <?php } ?>
    </ul>
</nav>
