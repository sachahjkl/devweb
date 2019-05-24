<html>
    <?php include "layouts/head.php" ?>
    <body>
        <div class="all-content">
            <?php include "layouts/header.php" ?>
            <div id="body-content">
                <?php
                    $currenturl = "layouts/";
                    if(isset($_GET['url'])){
                        if(file_exists($currenturl.$_GET['url'])){
                            $currenturl = $currenturl.$_GET['url'];
                            include $currenturl;
                        }
                    } else {
                        $currenturl = $currenturl."map.php";
                        include $currenturl;
                    } ?>
            </div>
            <?php include "layouts/footer.php" ?>
        </div>
        <?php include "layouts/forms/login.php" ?>
    </body>
</html>
