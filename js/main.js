$(document).ready(()=>{
    //transform hamburger menu icon to cross 
    function hamburgerToCross(){
        $hamburgerMenuIcon.css({
            position: 'relative',
            paddingTop: '15px'
        })
        $('.hamburger-box.left').css('rotate', '45deg')
        $('.hamburger-box.middle').hide()
        $('.hamburger-box.right').css({
            rotate: '-45deg',
            position: 'relative',
            bottom: '9px'
        })
    }
    function crossToHamburger(){
        //reset css properties
        $hamburgerMenuIcon.css({
            paddingTop: '5px'
        })
        $('.hamburger-box.left').css('rotate', '0deg')
        $('.hamburger-box.middle').show()
        $('.hamburger-box.right').css({
            rotate: '0deg',
            // position: 'relative',
            bottom: '0'
        })
    }
    function showSideMenu(sideMenu){
        hamburgerToCross()
        // resize page main container with accordingly
        $('div#container')
        .addClass('reduced-width')
        .css('filter', 'grayscale(40%)')
        sideMenu
            .show()
            .addClass('toggle-side-menu-in')
            .css('right', '0')
    }
    function hideSideMenu(sideMenu){
        crossToHamburger()
        $('div#container').removeClass('reduced-width')
        .css('filter', 'grayscale(0%)')
        sideMenu
            .removeClass('toggle-side-menu-in')
            .addClass('toggle-side-menu-out')
            .hide(0)
    }
    /*CAROUSEL/////////////////
    container for carousel*/
    $('div#banner').slick(
        {//configuration object
            autoplay: true,
            arrows: false,
            dots: true
        }
    )
    /* SIDE MENU////////////////////
    toggle the Side Menu using the hamburger menu button*/
    const $hamburgerMenuIcon = $('div.actions button[data-toggle="sidebar"]')
    
    $hamburgerMenuIcon.on('click', ()=>{
        const $sideMenu = $('div#side-menu')
        if($sideMenu.css('display') === 'none'){
            showSideMenu($sideMenu)
        }else{
            hideSideMenu($sideMenu)
        }  
    })
    /* STICKY HEADER*/
    $(document).on('scrollend', ()=>{
        if(
             $(document).scrollTop() > ( .5 * $(document).height() ) //roughly where the 'latest-news' section begins, as on live site
        ){
            $('div#header-wrapper').sticky({
                topSpacing: 0
            })
        }else{
            $('div#header-wrapper').unstick()
        }
    })
})