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
        $hamburgerMenuIcon.css({
            // position: 'relative',
            padingTop: '10px'
        })
        $('.hamburger-box.left').css('rotate', '0deg')
        $('.hamburger-box.middle').show()
        $('.hamburger-box.right').css({
            rotate: '0deg',
            // position: 'relative',
            bottom: '0'
        })
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
    // toggle Side Menu*/
    const $hamburgerMenuIcon = $('div.actions button[data-toggle="sidebar"]')
    
    $hamburgerMenuIcon.on('click', ()=>{
        const $sideMenu = $('div#side-menu')
        if($sideMenu.css('visibility') === 'hidden'){
            // console.log('yes')
            // hamburgerToCross()
            $sideMenu
                .css('visibility','visible')
                .addClass('toggle-side-menu')
                //force side menu to remain on screen
                .css('right', '0px')
        }else{
            // crossToHamburger()
        }  
    })
})