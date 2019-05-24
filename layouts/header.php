<header>
    <link rel="stylesheet" href="style/menu.css" />
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
        <?php if(isset($_SESSION['type'])){ ?>
            <li>
                <a href="?url=export"></a>
            </li>
        <?php } ?>
    </ul>
</nav>
