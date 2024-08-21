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
                <a class="cookie-policy-button gray" href="javascript:;">CHANGE SETTINGS</a>
                <a class="cookie-policy-button wisteria" href="javascript:;">ACCEPT COOKIES</a>
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
                        <!-- HEADER -->
                        <?php include "includes/header.html" ?> 
                    </div><!-- CONTACT US -->
                    <div id="contact-us">
                         <div class="contact-us-link">
                            <div class="container">
                                <p><a class="return-to-homepage-link" href="javascript:;">Home</a>/    Our Offices</p>
                            </div>
                        </div>
                        <div id="contact-us-container">
                            <div class="contact-us-heading">
                                <div class="container">
                                    <h1>Our Offices</h1>
                                </div>
                            </div>
                            <div id="netmatters-offices">
                                <div class="container">
                                    <div id="netmatters-offices-top-container">
                                        <!-- office photos and addresses -->
                                        <div class="offices-main-container">
                                            <div class="office-container">
                                                <div class="office cambridge">
                                                    <div class="image-container">
                                                        <a class="office-image-wrapper" href="javascript:;">
                                                            <img src="assets/images/offices/cambridge.jpg" alt="Cambridge Office">
                                                        </a>
                                                    </div>
                                                    <div class="office-address">
                                                        <p class="office-h2">
                                                            <a class="office-name" href="javascript:;">
                                                                Cambridge Office
                                                            </a>
                                                        </p>
                                                        <address>
                                                            Unit 1.31,<br>
                                                            St John's Innovation Centre,<br>
                                                            Cowley Road, Milton,<br>
                                                            Cambridge,<br>
                                                            CB4 0WS
                                                        </address>
                                                        <a href="tel:01223375772" class="office-h3 text-web">
                                                            01223 37 57 72
                                                        </a>
                                                        <a href="javascript:;" class="office-view-more">View More</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="office-container">
                                                <div class="office wymondham">
                                                    <div class="image-container">
                                                        <a class="office-image-wrapper" href="javascript:;">
                                                            <img src="assets/images/offices/wymondham.jpg" alt="Wymondham Office">
                                                        </a>
                                                    </div>
                                                    <div class="office-address">
                                                        <p class="office-h2">
                                                            <a class="office-name" href="javascript:;">
                                                                Wymondham Office
                                                            </a>
                                                        </p>
                                                        <address>
                                                            Unit 15,<br>
                                                            Penfold Drive,<br>
                                                            Gateway 11 Business Park,<br>
                                                            Wymondham, Norfolk,<br>
                                                            NR18 0WZ
                                                        </address>
                                                        <a href="tel:01603704020" class="office-h3 text-web">
                                                            01603 70 40 20
                                                        </a>
                                                        <a href="javascript:;" class="office-view-more">View More</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="office-container">
                                                <div class="office yarmouth">
                                                    <div class="image-container">
                                                        <a class="office-image-wrapper" href="javascript:;">
                                                            <img src="assets/images/offices/yarmouth.jpg" alt="Great Yarmouth Office">
                                                        </a>
                                                    </div>
                                                    <div class="office-address">
                                                        <p class="office-h2">
                                                            <a class="office-name" href="javascript:;">
                                                                Great Yarmouth Office
                                                            </a>
                                                        </p>
                                                        <address>
                                                            Suite F23,<br>
                                                            Beacon Innovation Centre,<br>
                                                            Beacon Park, Gorleston,<br>
                                                            Great Yarmouth, Norfolk,<br>
                                                            NR31 7RA
                                                        </address>
                                                        <a href="tel:01493603204" class="office-h3 text-web">
                                                            01493 60 32 04
                                                        </a>
                                                        <a href="javascript:;" class="office-view-more">View More</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                        <!-- extra contact info -->
                                    <div id="netmatters-offices-bottom-container">
                                        <div class="extra-contact-info">
                                            <p class="first-child">
                                                <strong>Email us on:</strong>
                                            </p>
                                            <p>
                                                <a class="email-address" href="javascript:;">sales@netmatters.com</a>
                                            </p>
                                            <p>
                                                <strong>Business hours:</strong>
                                            </p>
                                            <p>
                                                <strong>Monday - Friday 07:00 - 18:00 </strong>
                                            </p>
                                            <p>
                                                <strong>
                                                    <a href="javascript:;">Out of Hours IT Support</a>
                                                    <span class="glyphicon glyphicon-chevron-down" id="accordion-control"></span>
                                                </strong>
                                            </p>
                                            <div id="accordion">
                                                <p>
                                                    Netmatters IT are offering an Out of Hours service for Emergency and Critical tasks.
                                                </p>
                                                <p>
                                                    <strong>Monday - Friday 18:00 - 22:00</strong>
                                                    <strong>Saturday 08:00 - 16:00</strong>
                                                    <br>
                                                    <strong>Sunday 10:00 - 18:00</strong>
                                                </p>
                                                <p>
                                                    To log a critical task, you will need to call our main line number and select Option 2 to leave an Out of Hours  voicemail. A technician will contact you on the number provided within 45 minutes of your call. 
                                                </p>
                                            </div>
                                        </div>
                                        <!-- form -->
                                        <div class="form-container-outer">
                                            <div id="success-message-container">
                                                <p id="success-message">Your message has been sent!</p><span id="success-message-cross">x</span>
                                             </div>
                                            <form id="form" action="./post-form-data.php" method="POST">
                                                <div class="form-container-inner">
                                                    <div class="col-med">
                                                        <div class="form-group">
                                                            <label for="name" class="required">Your Name&nbsp;</label>
                                                            <input class="form-control" name="name" value="" id="name" 
                                                                type="text" minlength="3" maxlength="100" required
                                                            >
                                                        </div>
                                                    </div>
                                                    <div class="col-med">
                                                        <div class="form-group">
                                                            <label for="company" class="">Company Name</label>
                                                            <input class="form-control" name="company" value="" id="company"
                                                                type="text" minlength="3" maxlength="100"
                                                            >
                                                        </div>
                                                    </div>
                                                    <div class="col-med">
                                                        <div class="form-group">
                                                            <label for="email" class="required">Your Email&nbsp;</label>
                                                            <input class="form-control" name="email" value="" id="email" 
                                                                type="email" minlength="3" maxlength="345" required
                                                            >
                                                        </div>
                                                    </div>
                                                    <div class="col-med">
                                                        <div class="form-group">
                                                            <label for="telephone" class="required">Your Telephone Number&nbsp;</label>
                                                            <input class="form-control" name="telephone" value="" id="telephone"
                                                                type="text" minlength="7" maxlength="15" required
                                                            >
                                                        </div>
                                                    </div>
                                                    <div class="col-med" style="min-width: 100%">
                                                        <div class="form-group text-area">
                                                            <label for="message" class="required">Message&nbsp;</label>
                                                            <textarea class="form-control" name="message" rows="10" cols="50" id="message"
                                                                minlength="3" required>Hi, I am interested in discussing a Our Offices solution, could you please give me a call or send an email?</textarea>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div id="policies">
                                                    <div id="privacy-policy-container">
                                                        <div id="checkbox-container">
                                                            <input id="checkbox" type="text">
                                                            <span id="checkmark">&check;</span>
                                                        </div>
                                                        <p class="privacy-policy-info">Please tick this box if you wish to receive marketing information from us. Please see our <a href="javascript:;">Privacy Policy</a> for more information on how we keep your data safe.</p>
                                                    </div>
                                                    <p class="recaptcha">This site is protected by reCAPTCHA and the Google <a href="javascript:;">Privacy Policy</a> and <a href="javascript:;">Terms of Service</a> apply.</p>
                                                    <div class="policies-footer">
                                                        <button type="submit" id="send-enquiry-button" href="javascript:;">send enquiry</button>
                                                        <span class="required-info">&nbsp;Fields required</span>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <?php include "includes/footer.html" ?>
                </div>
            </div>
        </div>
    </div>
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