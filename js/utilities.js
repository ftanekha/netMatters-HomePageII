// {
//     const $navItem = $('nav div.container > div > a')[0]
//     const $navItemWidth = $navItem.outerWidth()

//     const $triangles = $('.triangle')

//     for(let i = 1; i = $triangles.length; i++){
//         ($triangles[i]).css('left', $navItemWidth * i)
//     }

// }

function showNavigationDropDown(){
    const $mainNavigationDropdown = $('#main-navigation-dropdown')
    const dropDownMenuBgColorOptions = {
        bs: '#526781',
        it: '#286abd',
        dm: '#25a25a',
        ts: '#bc2c28',
        wd: '#79539a',
        cs: '#de093f',
        dc: '#a3331d'
    };

    ['bs', 'it', 'dm', 'ts', 'wd', 'cs', 'dc']
    .forEach(
        classSuffix => {
            $(`.nav-${classSuffix}`).on(
                'mouseover',
                ()=> {
                    $mainNavigationDropdown.css(
                        {
                            display: 'block',
                            'background-color': dropDownMenuBgColorOptions[classSuffix]
                        }
                    )

                    $(`div.dropdown-${classSuffix}`).css('display', 'block')

                    $(`div.triangle.${classSuffix}`).css('display', 'block')
                }
            )
        }
    );
    
    ['bs', 'it', 'dm', 'ts', 'wd', 'cs', 'dc']
    .forEach(
        classSuffix => {
            $(`.nav-${classSuffix}`).on(
                'mouseleave',
                ()=> {
                    $(`div.triangle.${classSuffix}`).css('display', 'none')
                    $(`.dropdown-${classSuffix}`).css('display', 'none')
                    $mainNavigationDropdown.css('display', 'none')
                }
            )
        }
    )

    $mainNavigationDropdown.on(
        'mouseleave',
        ()=> $(this).css('display', 'none')
    )
}
//////////////////////////////////////////////////////////////////////////////////////////
function togglePageSize(bodyOverflow){
    if(bodyOverflow === 'hidden'){
        $('body').css(
            {
                height: '100vh', 
                'overflow-y': 'hidden'
            }
        )
        $('div#side-menu').css(
            {
                top: document.documentElement.scrollTop,
                height: '100vh', 
                'overflow-y': 'scroll'
            }
        )
    }else{
        //reset body to normal width & height
        $('body').css(
            {
                'min-height': '100vh', 
                height: 'auto', 
                width: '100%',
                'overflow-y': 'scroll'
            }
        )
    }
}
///////////////////////////////////////////////////////////////////
//transform hamburger menu icon to cross 
function hamburgerToCross(hamburgerMenuIcon){
    hamburgerMenuIcon.css(
        {
            position: 'relative', paddingTop: '15px'
        }
    )

    $('.hamburger-box.left').css('rotate', '45deg')
    $('.hamburger-box.middle').hide()
    $('.hamburger-box.right').css(
        {
            rotate: '-45deg', position: 'relative', bottom: '9px'
        }
    )
    togglePageSize('hidden')
}
/////////////////////////////////////////////////////////////////////
function crossToHamburger(hamburgerMenuIcon){
    //reset css properties
    hamburgerMenuIcon.css(
        {
            paddingTop: '5px', 'background-color': '#333645'
        }
    )

    $('.hamburger-box.left').css('rotate', '0deg')
    $('.hamburger-box.middle').show()
    $('.hamburger-box.right').css(
        {
            rotate: '0deg', bottom: '0'
        }
    )
    togglePageSize('scroll')
}
/////////////////////////////////////////////////////////////////////
function showSideMenu(hamburgerMenuIcon, sideMenu){
    hamburgerToCross(hamburgerMenuIcon)
    // resize page main container with accordingly
    $('div#container')
    .removeClass('slide-right')
    .addClass('slide-left')
    // .css('backgroundColor', 'rgba(0, 0, 0, .7)')

    sideMenu
    .show()
    .addClass('toggle-side-menu-in')
    .css('right', '0')
}
/////////////////////////////////////////////////////////////////////
function hideSideMenu(hamburgerMenuIcon, sideMenu){
    crossToHamburger(hamburgerMenuIcon)

    $('div#container')
    .removeClass('slide-left')
    .addClass('slide-right')
    // .css('filter', 'grayscale(0%)')

    sideMenu
    .removeClass('toggle-side-menu-in')
    .addClass('toggle-side-menu-out')
    .hide(0)

    hamburgerMenuIcon
    .css(
        'background-color', '#333645'
    )
    .hover(
        ()=> {
            $(this).css(
                {
                    'background-color': '#22242e',
                    'border-color': '#191a22'
                }
            )
        }
    )
}
///////////////////////////////////////////////////////////////////
function toggleStickyHeader(){
    let prevScrollTop = $(document).scrollTop()
    let prevScrollDirection = ''
    
    $(document).on('scroll', ()=>{
        const currentScrollTop = $(document).scrollTop()
        if(currentScrollTop > prevScrollTop) {
            //update scroll direction
            if(prevScrollDirection !== 'down') prevScrollDirection = 'down'
            //remove the sticky header if user scrolling down
            $('div#header-wrapper').unstick()
        }else if(currentScrollTop  < prevScrollTop){
            if(prevScrollDirection !== 'up') prevScrollDirection = 'up'
            //add the sticky header if user scrolling down
            $('div#header-wrapper').sticky({topSpacing: 0})         
        }
        //update scroll positon
        //also, for Mobile or negative scrolling
        prevScrollTop = currentScrollTop  <= 0 ? 0 : currentScrollTop
    })
}
//////////////////////////////////////////////////////////////////////////////////
// display cookie modal
function displayCookieModal(didUserClickManageConsentButton = false){
    const hasCookieBeenDisplayed = localStorage.getItem('hasCookieBeenDisplayed')
    if(hasCookieBeenDisplayed && !didUserClickManageConsentButton){
        //if cookie policy has already been displayed, keep it hidden
        $('#cookie-policy-popup-container').css('display', 'none')
    }else if(!hasCookieBeenDisplayed || didUserClickManageConsentButton){
        //prepare cookie modal
        $('#cookie-policy-popup-container').css(
            {
                display: 'flex',
                visibility: 'visible', //show cookie modal
                backgroundColor : 'rgba(0, 0, 0, .7)'//darken background
            }
        )
        $('.cookie-policy-button').on('click', ()=>{
            //update local storage
            localStorage.setItem('hasCookieBeenDisplayed', true)
            //reset modal css
            $('#cookie-policy-popup-container').css(
                {
                    visibility: 'hidden', backgroundColor : 'transparent'
                }
            )
            //hide cookie policy
            $('#cookie-policy-popup-container').fadeOut(100)
        })
    }
}
///////////////////////////////////////////////////////////////////////////
export {showNavigationDropDown, showSideMenu, hideSideMenu, toggleStickyHeader, displayCookieModal}