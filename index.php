<?php
    include 'fetch-news-items.php';

    $newsItems = fetchNewsItems();
?>
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
                        <!-- BANNER -->
                        <div id="banner">
                            <div class="banner-item-container">
                                <div class="bg-image-container first-banner-item" style="background-image: url('assets/images/banners/why-choose-us.png')">
                                    <div class="why-choose-us">
                                        <div class="container">
                                            <div class="wrapper first-banner-item-wrapper">
                                                <h1 class="first-banner-item-h1">The East Of England's Leading Technology Company</h1>
                                                <p>Performance-driven digital and technology services<br> with complete transparency.</p>
                                                <a href="#">
                                                    WHY CHOOSE US
                                                    <span class="icon-arrow_forward"></span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="banner-item-container">
                                <div class="bg-image-container" style="background-image: url('assets/images/banners/bespoke-software.jpg')">
                                    <div class="bespoke-software">
                                        <div class="container">
                                            <div class="wrapper">
                                                <h1>Bespoke Software</h1>
                                                <p>Delivering expert bespoke software <br>soluions acrosss a range of industries.</p>
                                                <a href="#">
                                                    FIND OUT MORE &nbsp;&nbsp;<span class="icon-arrow-right2"></span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="banner-item-container">
                                <div class="bg-image-container" style="background-image: url('assets/images/banners/it-support.png')">
                                    <div class="it-support">
                                        <div class="container">
                                            <div class="wrapper">
                                                <h1>IT Support</h1>
                                                <p>Fast and cost-effective IT support <br>services for your business.</p>
                                                <a href="#">
                                                    FIND OUT MORE &nbsp;&nbsp;<span class="icon-arrow-right2"></span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="banner-item-container">
                                <div class="bg-image-container" style="background-image: url('assets/images/banners/digital-marketing.png')">
                                    <div class="digital-marketing">
                                        <div class="container">
                                            <div class="wrapper">
                                                <h1>Digital Marketing</h1>
                                                <p>Generating your new business through <br>results-driven marketing activities.</p>
                                                <a href="#">
                                                    FIND OUT MORE &nbsp;&nbsp;<span class="icon-arrow-right2"></span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="banner-item-container">
                                <div class="bg-image-container" style="background-image: url('assets/images/banners/telecoms-services.png')">
                                    <div class="telecoms-services">
                                        <div class="container">
                                            <div class="wrapper">
                                                <h1>Telecoms Services</h1>
                                                <p>A new approach to connectivity, see <br>how we can help your business.</p>
                                                <a href="#">
                                                    FIND OUT MORE &nbsp;&nbsp;<span class="icon-arrow-right2"></span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="banner-item-container">
                                <div class="bg-image-container" style="background-image: url('assets/images/banners/web-design.jpg')">
                                    <div class="web-design">
                                        <div class="container">
                                            <div class="wrapper">
                                                <h1>Web Design</h1>
                                                <p>For businesses looking to make a strong <br>and effective first impression.</p>
                                                <a href="#">
                                                    FIND OUT MORE &nbsp;&nbsp;<span class="icon-arrow-right2"></span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="banner-item-container">
                                <div class="bg-image-container" style="background-image: url('assets/images/banners/cyber-security.png')">
                                    <div class="cyber-security">
                                        <div class="container">
                                            <div class="wrapper">
                                                <h1>Cyber Security</h1>
                                                <p>Keeping businesses and their customers <br>sensitive information protected.</p>
                                                <a href="#">
                                                    FIND OUT MORE &nbsp;&nbsp;<span class="icon-arrow-right2"></span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- MIDDLE -->
                        <div id="middle">
                            <div class="container">
                                <!-- headline -->
                                <div class="our-services-headline">
                                    <h2>
                                        <strong>Our Services</strong>
                                    </h2>
                                    <a class="md" href="#">
                                        <span>View Our Work</span>
                                        <em class="icon-arrow_forward"></em>
                                    </a>
                                </div>
                                <!-- list of services -->
                                <div id="our-services-container">
                                    <!-- top services -->
                                    <div id="top-services">
                                        <ul>
                                            <li>
                                                <a href="#">
                                                    <div class="service-info-container">
                                                        <span>
                                                            <span class="icon-apps"></span>
                                                        </span>
                                                        <h3>Bespoke Software</h3>
                                                        <p>Bespoke software solutions for all your business needs including integrations and reporting.</p>
                                                        <div class="service-button">READ MORE</div>
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <div class="service-info-container">
                                                        <span>
                                                            <span class="icon-display"></span>
                                                        </span>
                                                        <h3>IT Support</h3>
                                                        <p>Fully managed IT support and consultancy packages tailored to meet your exact business needs.</p>
                                                        <div class="service-button">READ MORE</div>
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <div class="service-info-container">
                                                        <span>
                                                            <span class="icon-bar-graph"></span>
                                                        </span>
                                                        <h3>Digital Marketing</h3>
                                                        <p>Driven brand awareness &amp; ROI through creative digital marketing campaigns.</p>
                                                        <div class="service-button">READ MORE</div>
                                                    </div>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <!-- bottom services -->
                                    <div id="bottom-services">
                                        <ul>
                                            <li>
                                                <a href="#">
                                                    <div class="service-info-container">
                                                        <span>
                                                            <span class="icon-phone_in_talk"></span>
                                                        </span>
                                                        <h3>Telecoms Services</h3>
                                                        <p>Business telephony solutions including mobile &amp; connectivity solutions. </p>
                                                        <div class="service-button">READ MORE</div>
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <div class="service-info-container">
                                                        <span>
                                                            <span class="icon-code"></span>
                                                        </span>
                                                        <h3>Web Design</h3>
                                                        <p>User-centric design for businesses looking to make a lasting impression.</p>
                                                        <div class="service-button">READ MORE</div>
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <div class="service-info-container">
                                                        <span>
                                                            <span class="icon-security"></span>
                                                        </span>
                                                        <h3>Cyber Security</h3>
                                                        <p>Prevention, testing, consultancy &amp; breach management services.</p>
                                                        <div class="service-button">READ MORE</div>
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <div class="service-info-container">
                                                        <span>
                                                            <span class="icon-school"></span>
                                                        </span>
                                                        <h3>Developer Training</h3>
                                                        <p>Web design &amp; software training courses designed to secure a job in tech.</p>  
                                                        <div class="service-button">READ MORE</div>
                                                    </div>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <!-- bottom headline -->
                                <div class="our-services-headline">
                                    <a class="sm" href="#">
                                        <span>View Our Work</span>
                                        <em class="icon-arrow_forward"></em>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <!-- ACCREDITATION -->
                        <div id="accreditations">
                            <div class="accreditations-container">
                                <img src="assets/images/clients-partners/living_wage.png" 
                                    alt="Living Wage" title="Living Wage" class="living-wage-logo"
                                >
                                <img src="assets/images/clients-partners/norfolk_prohelp.png" 
                                    alt="Norfolk Prohelp logo" title="Norfolk Prohelp logo" class="norfolk-prohelp-logo"
                                >
                                <img src="assets/images/clients-partners/investing-in-future-growth.jpg" 
                                    alt="Investing In Future Growth" title="Investing In Future Growth" class="investing-in-future-growth-logo"
                                >
                                <img src="assets/images/clients-partners/norfolk-carbon-charter.jpg" 
                                    alt="Norfolk Carbon Charter" title="Norfolk Carbon Charter" class="norfolk-carbon-charter-logo" aria-hidden="false"
                                >
                                <img src="assets/images/clients-partners/PPC_logo.jpg" 
                                    alt="PPC Logo" title="PPC Logo" class="ppc-logo"
                                >
                                <img src="assets/images/clients-partners/princess-royal-training.jpg" 
                                    alt="Princess Royal Training" title="Princess Royal Training" class="princess-royal-training-logo"
                                >
                                <img src="assets/images/clients-partners/future-50.jpg" 
                                    alt="Future 50" title="Future 50" class="future-50-logo"
                                >
                                <img src="assets/images/clients-partners/qms.webp" 
                                    alt="QMS" title="QMS" class="qms-logo"
                                >
                                <img src="assets/images/clients-partners/iso_27001.webp" 
                                    alt="ISO 27001" title="ISO 27001" class="iso-27001-logo"
                                >
                                <img src="assets/images/clients-partners/skills-of-tomorrow.webp" 
                                    alt="Skills Of tomorrow" title="Skills Of tomorrow logo" class="skills-of-tomorrow-logo"
                                >
                                <img src="assets/images/clients-partners/cyber-essentials-colour.webp" 
                                    alt="Cyber Essentials" title="Cyber Essentials logo" class="cyber-essentials-logo"
                                >
                                <img src="assets/images/clients-partners/google-partner.jpg" 
                                    alt="Google Partners" title="Google Partners" class="google-partners-logo"
                                >
                            </div>
                        </div>
                        <!-- ABOUT NETMATTERS -->
                        <div id="about-netmatters">
                            <div class="container">
                                <div class="handy-wrapper">
                                    <!-- Welcome To Netmatters -->
                                    <div id="welcome-to-netmatters">
                                        <h2>
                                            <strong>Welcome To Netmatters</strong>
                                        </h2>
                                        <div id="welcome-to-netmatters-main">
                                            <p>
                                                <strong>
                                                    Netmatters is a leading <a href="#">Bespoke Software</a>, <a href="#">IT Support</a>, and 
                                                    <a href="#">Digital Marketing</a> company based in the East of England with offices in 
                                                    <a href="#">Cambridge</a>, <a href="#">Wymondham</a>, and <a href="#">Great Yarmouth</a>.
                                                </strong>
                                            </p>
                                            <p>
                                                We aren't tied into contracts with third-party providers, 
                                                so you know that our recommendations for your business are based purely with one benefit in mind: 
                                                to help improve your business with the most appropriate solutions.
                                            </p>
                                            <p>
                                                We pride ourselves on being an ethical business and have a unique business offering and 
                                                cost model that ensures you get the most from our relationship in an upfront manner.
                                            </p>
                                        </div>
                                        <footer class="about-netmatters">
                                            <a href="#">
                                                WHY CHOOSE US?&nbsp;<span class="icon-arrow-right2"></span>
                                            </a>
                                            <a href="#">
                                                OUR CULTURE&nbsp;<span class="icon-arrow-right2"></span>
                                            </a>
                                        </footer>
                                    </div>
                                    <!-- client-review -->
                                    <div id="client-review">
                                        <h2>
                                            <strong>What Our Clients Think</strong>
                                        </h2>
                                        <div id="rating">
                                            <span class="icon-star-full"></span>
                                            <span class="icon-star-full"></span>
                                            <span class="icon-star-full"></span>
                                            <span class="icon-star-full"></span>
                                            <span class="icon-star-full"></span>
                                        </div>
                                        <div id="client-review-main">
                                            <p class="big">
                                                Netmatters stood out from the start. Great guys and very easy to work with. 
                                                Both the build and digital marketing teams are clearly skilled -they know their stuff! 
                                                They delivered a website to our (high!) expectations and went over and above 
                                                to ensure we were satisfied clients - and we are!
                                            </p>
                                            <p>
                                                <span class="client">Eleanor Bishop, Head of Marketing -</span> 
                                                <cite>
                                                    <a href="#">Ashcroft Partnership LLP</a>
                                                </cite>
                                            </p>
                                        </div>
                                        <footer class="about-netmatters">
                                            <a href="#">
                                                GOOGLE REVIEWS&nbsp;<span class="icon-arrow-right2"></span>
                                            </a>
                                            <a href="#">
                                                TRUSTPILOT REVIEWS&nbsp;<span class="icon-arrow-right2"></span>
                                            </a>
                                        </footer>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- LATEST NEWS -->
                        <div id="latest-news">
                            <div class="container">
                                <!-- headline -->
                                <div class="latest-news-headline">
                                    <h2>
                                        <strong>Latest News</strong>
                                    </h2>
                                    <a class="md" href="#">
                                        <span>View All</span>
                                        <em class="icon-arrow_forward"></em>
                                    </a>
                                </div>
                                <!-- main content -->
                                <div id="latest-news-main-container">
                                    <div id="latest-news-container">
                                        <?php foreach($newsItems as $newsItem): ?>
                                            <div class="latest-news-item">
                                                <a class="latest-news-item-category news_<?=$newsItem["service_category"];?>" href="#"><?=$newsItem["category"];?></a>
                                                <img class="latest-news-photo" src="<?=$newsItem["photo_source"];?>" alt="<?=$newsItem["photo_alt"];?>" title="<?=$newsItem["photo_alt"];?>">
                                                <div class="news-item-body">
                                                    <h3 class="<?=$newsItem["theme"];?>"><a href="#"> <?=$newsItem["heading"];?></a></h3>
                                                    <p><?=$newsItem["leading_paragraph"];?>...</p>
                                                    <button class="<?=$newsItem["theme"];?>">READ MORE</button>
                                                    <hr>
                                                    <footer class="latest-news-footer">
                                                        <img src="assets/images/news/netmatters-mini-logo.webp" alt="netmatters logo">
                                                        <strong>Posted by <?=$newsItem["posted_by"];?></strong>
                                                        <br>
                                                        <small><?=$newsItem["date"];?></small>
                                                    </footer>
                                                </div>
                                            </div>
                                        <?php endforeach; ?>
                                    </div>
                                </div>
                                <!-- bottom headline -->
                                <div class="latest-news-headline">
                                    <a class="sm" href="#">
                                        <span>View All</span>
                                        <em class="icon-arrow_forward"></em>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <!-- OUR CLIENTS -->
                        <div id="our-clients">
                            <div class="our-clients-carousel slick-list owl-carousel">
                                <div class="carousel-item ashcroft">
                                    <div class="tooltip-container ashcroft">
                                        <div class="tooltip">
                                            <h3>Ashcroft Partnership LLP</h3>
                                            <p>Originally founded in 2006 as Ashcroft Anthony, they became Ashcroft Partnership LLP in 2020 
                                                and are one of the top chartered accountancy firms in Cambridge, advising entrepreneurs and families.
                                            </p>
                                            <a class="case-study-link wisteria" href="#">
                                                VIEW OUR CASE STUDY&nbsp;&nbsp;<span class="icon-arrow-right2"></span>
                                            </a>
                                        </div>
                                        <div class="tooltip-arrow"></div>
                                    </div>
                                    <div class="client-logo-container ashcroft">
                                        <img src="assets/images/clients-partners/ashcroftlogo_landscape_goldblack_DP60P-small.png" 
                                            alt="Ashcroft Logo" class="ashcroft-logo"
                                        >
                                    </div>
                                </div>
                                <div class="carousel-item one-traveller">
                                    <div class="tooltip-container one-traveller">
                                        <div class="tooltip">
                                            <h3>One Traveller</h3>
                                            <p><a class="one-traveller-link" href="#">One Traveller</a>, founded in 2007, is a leading provider of solo holidays for over 50s.</p>
                                            <a class="case-study-link wisteria" href="#">
                                                VIEW OUR CASE STUDY&nbsp;&nbsp;<span class="icon-arrow-right2"></span>
                                            </a>
                                        </div>
                                        <div class="tooltip-arrow"></div>
                                    </div>
                                    <div class="client-logo-container one-traveller">
                                        <img src="assets/images/clients-partners/onetravellerlogo_white_figuire.png" 
                                            alt="One Traveller Logo" class="one-traveller-logo"
                                        >
                                    </div>
                                </div>
                                <div class="carousel-item searles">
                                    <div class="tooltip-container searles">
                                        <div class="tooltip">
                                            <h3>Searles Leisure Resort</h3>
                                            <p>Searles Leisure Resort, on the beautiful North Norfolk coast, is an award-winning UK holiday resort for families.</p>
                                            <a class="case-study-link shamrock" href="#">
                                                VIEW OUR CASE STUDY&nbsp;&nbsp;<span class="icon-arrow-right2"></span>
                                            </a>
                                        </div>
                                        <div class="tooltip-arrow"></div>
                                    </div>
                                    <div class="client-logo-container searles">
                                        <img src="assets/images/clients-partners/searles_logo.jpg" 
                                            alt="Searles Logo" class="searles-logo"
                                        >
                                    </div>
                                </div>
                                <div class="carousel-item busseys">
                                    <div class="tooltip-container busseys">
                                        <div class="tooltip">
                                            <p>One of the UK's leading Ford dealerships.</p>
                                        </div>
                                        <div class="tooltip-arrow"></div>
                                    </div>
                                    <div class="client-logo-container busseys">
                                        <img src="assets/images/clients-partners/busseys_logo.png" 
                                            alt="Busseys" class="busseys-logo"
                                        >
                                    </div>
                                </div>
                                <div class="carousel-item crane-garden-buildings">
                                    <div class="tooltip-container crane-garden-buildings">
                                        <div class="tooltip">
                                            <h3>Crane Garden Buildings</h3>
                                            <p>Leading manufacturer and supplier of high-end garden rooms, summerhouses, workshops and sheds in the UK.</p>
                                        </div>
                                        <div class="tooltip-arrow"></div>
                                    </div>
                                    <div class="client-logo-container crane-garden-buildings">
                                        <img src="assets/images/clients-partners/crane_logo.png" 
                                            alt="Crane Garden Buildings" class="crane-garden-buildings-logo"
                                        >
                                    </div>
                                </div>
                                <div class="carousel-item black-swan">
                                    <div class="tooltip-container black-swan">
                                        <div class="tooltip">
                                            <h3>Black Swan Care Group</h3>
                                            <p>Black Swan Care Group own and manage 21 high-quality care and residential homes with a focus on putting the needs of their residents first.</p>
                                            <a class="case-study-link buttercup" href="#">
                                                VIEW OUR CASE STUDY&nbsp;&nbsp;<span class="icon-arrow-right2"></span>
                                            </a>
                                        </div>
                                        <div class="tooltip-arrow"></div>
                                    </div>
                                    <div class="client-logo-container black-swan">
                                        <img src="assets/images/clients-partners/black_swan_logo.webp" 
                                            alt="Black Swan Logo" class="black-swan-logo"
                                        >
                                    </div>
                                </div>
                                <div class="carousel-item xupes">
                                    <div class="tooltip-container xupes">
                                        <div class="tooltip">
                                            <h3>Xupes</h3>
                                        </div>
                                        <div class="tooltip-arrow"></div>
                                    </div>
                                    <div class="client-logo-container xupes">
                                        <img src="assets/images/clients-partners/xupes_logo.png" 
                                            alt="Xupes Logo" class="xupes-logo"
                                        >
                                    </div>
                                </div>
                                <div class="carousel-item beat">
                                    <div class="tooltip-container beat">
                                        <div class="tooltip">
                                            <h3>BEAT</h3>
                                            <p>The UK's eating disorder charity founded in 1989.</p>
                                        </div>
                                        <div class="tooltip-arrow"></div>
                                    </div>
                                    <div class="client-logo-container beat">
                                        <img src="assets/images/clients-partners/beat_logo.png" 
                                            alt="BEAT Logo" class="beat-logo"
                                        >
                                    </div>
                                </div>
                                <div class="carousel-item survey-solutions">
                                    <div class="tooltip-container survey-solutions">
                                        <div class="tooltip">
                                            <h3>Survey Solutions</h3>
                                        </div>
                                        <div class="tooltip-arrow"></div>
                                    </div>
                                    <div class="client-logo-container survey-solutions">
                                        <img src="assets/images/clients-partners/survey_solutions_logo.png" 
                                            alt="Survey Solutions Logo" class="survey-solutions-logo"
                                        >
                                    </div>
                                </div>
                                <div class="carousel-item girl-guiding">
                                    <div class="tooltip-container girl-guiding">
                                        <div class="tooltip">
                                            <h3>Girl Guiding Anglia</h3>
                                            <p>Girl Guiding Anglia is part of Girlguiding, the UK's leading charity for girls and young women in the UK.</p>
                                            <a class="case-study-link havelockBlue" href="#">
                                                VIEW OUR CASE STUDY&nbsp;&nbsp;<span class="icon-arrow-right2"></span>
                                            </a>
                                        </div>
                                        <div class="tooltip-arrow"></div>
                                    </div>
                                    <div class="client-logo-container girl-guiding">
                                        <img src="assets/images/clients-partners/girl_guides_anglia_logo.png" 
                                            alt="Girl Guiding Logo" class="girl-guiding-logo"
                                        >
                                    </div>
                                </div>
                                <div class="carousel-item sweetzy">
                                    <div class="tooltip-container sweetzy">
                                        <div class="tooltip">
                                            <h3>Sweetzy</h3>
                                            <p>Sweetzy are an online sweets retailer, based in Wymondham.</p>
                                            <a class="case-study-link shamrock" href="#">
                                                VIEW OUR CASE STUDY&nbsp;<span class="icon-arrow-right2"></span>
                                            </a>
                                        </div>
                                        <div class="tooltip-arrow"></div>
                                    </div>
                                    <div class="client-logo-container sweetzy">
                                        <img src="assets/images/clients-partners/sweetzy_logo.png" 
                                            alt="Sweetzy Logo" class="sweetzy-logo"
                                        >
                                    </div>
                                </div>
                                <div class="carousel-item howes-percival">
                                    <div class="tooltip-container howes-percival">
                                        <div class="tooltip">
                                            <h3>Howes Percival</h3>
                                        </div>
                                        <div class="tooltip-arrow"></div>
                                    </div>
                                    <div class="client-logo-container sweetzy">
                                        <img src="assets/images/clients-partners/howespercivallogo.webp" 
                                            alt="Howes Percival Logo" class="howes-percival-logo"
                                        >
                                    </div>
                                </div>
                                <div class="carousel-item gdst">
                                    <div class="tooltip-container gdst">
                                        <div class="tooltip">
                                            <h3>GDST</h3>
                                            <p>The <a href="#">Girls' Day School Trust (GDST)</a> is the UK's leading family of 25 independent girls' schools.</p>
                                            <a class="case-study-link shamrock" href="#">
                                                VIEW OUR CASE STUDY&nbsp;<span class="icon-arrow-right2"></span>
                                            </a>
                                        </div>
                                        <div class="tooltip-arrow"></div>
                                    </div>
                                    <div class="client-logo-container gdst">
                                        <img src="assets/images/clients-partners/girls_day_school_trust_logob.webp" 
                                            alt="GDST Logo" class="gdst-logo"
                                        >
                                    </div>
                                </div>
                            </div>
                        </div>
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
    <script src="OwlCarousel/dist/owl.carousel.min.js"></script>
    <script type="module" src="main.js"></script>
</body>
</html>
