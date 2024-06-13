$(document).ready(()=>{
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
        // reset css properties
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
    function slideInSideMenu(sideMenu){
        hamburgerToCross()
        sideMenu
            .css('visibility','visible')
            .addClass('toggle-side-menu-in')
            //force side menu to remain on-screen
            .css('right', '0px')
        // resive page main content container with accordingly
        $('div#container').addClass('reduced-width')
        // $('div').on('click', ()=> slideOutSideMenu(sideMenu))
    }
    function slideOutSideMenu(sideMenu){
        crossToHamburger()
        sideMenu
            .removeClass('toggle-side-menu-in')
            .addClass('toggle-side-menu-out')
            .css({//force side menu to remain off-screen
                visibility:'hidden', 
                right: '-350px'
            })

        // resive page main content container with accordingly
        $('div#container').removeClass('reduced-width')
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
    /* SIDE MENU
    // toggle the Side Menu using the hamburger menu button*/
    const $hamburgerMenuIcon = $('div.actions button[data-toggle="sidebar"]')
    
    $hamburgerMenuIcon.on('click', ()=>{
        const $sideMenu = $('div#side-menu')
        if($sideMenu.css('visibility') === 'hidden'){
            slideInSideMenu($sideMenu)

            
        }else{
            slideOutSideMenu($sideMenu)
        }  
    })
})