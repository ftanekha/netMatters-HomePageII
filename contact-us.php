<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" type="image/x-icon" href="assets/favicons/favicon-nm.ico">
    <link rel="stylesheet" type="text/css" href="css/slick.css">
    <link rel="stylesheet" href="css/slick-theme.css">
    <link rel="stylesheet" href="css/normalize.css">
    <link rel="stylesheet" href="assets/icons/style.css">
    <link rel="stylesheet" href="assets/web-fonts/Poppins.css">
    <link rel="stylesheet" type="text/css" href="css/application.css">
    <title>Farai Tanekha: HTML & SASS Assessment</title>
</head>
<body class="home-page">
    <!-- COOKIE CONSENT BAR -->
    <div id="cookie-app">
        <button type="button" class="cookie-settings-btn">Manage Consent</button>
    </div>
    <!-- COOKIE POP-UP -->
    <div id="cookie-policy-popup-container">
        <div class="cookie-policy-popup">
            <h4>Cookies Policy</h4>
            <div class="cookie-policy-info">
                <p>
                    Our website uses cookies. This helps us provide you with a good experience on our website. 
                    To see what cookies we use and what they do, and to opt-in on non-essential cookies click "change settings". 
                    For a detailed explanation, click on <a href="insert-link">"Privacy Policy"</a> otherwise click "Accept Cookies" to enter.
                </p>
            </div>       
            <div class="cookie-policy-button-container">
                <a class="cookie-policy-button gray" href="#">CHANGE SETTINGS</a>
                <a class="cookie-policy-button wisteria" href="#">ACCEPT COOKIES</a>
            </div>
        </div>
    </div>
    <!-- MAIN CONTENT -->
    <div id="main-outer-container" class="slide-origin">
        <div id="container">
            <div class="main">
                <div class="main-outer">
                    <!-- main inner -->
                    <div class="main-inner">
                        <!-- Header -->
                        <?php include "includes/header.html" ?>
                    </div>
                    <!-- FOOTER -->
                    <?php include "includes/footer.html" ?>
                </div>
            </div>
        </div>
    </div>
    <!-- SIDE MENU -->
    <?php include "includes/side-menu.html" ?>
    <noscript>
        <div class="noscript">
            <div class="notice-inner">
                <div class="notice-title">
                    <strong>JavaScript Disabled:</strong>
                    You must have JavaScript enabled to utilize the functionality of this website.
                </div>
            </div>
        </div>
    </noscript>
    <script src="js/jquery.min.js"></script>
    <script src="js/slick.min.js"></script>
    <script src="js/jquery.sticky.js"></script>
    <script src="OwlCarousel/dist/owl.carousel.min.js"></script>
    <script type="module" src="main.js"></script>
</body>
</html>
