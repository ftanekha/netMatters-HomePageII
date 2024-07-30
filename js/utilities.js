function showNavigationDropDown(){
    const $mainNavigationDropdown = $('#main-navigation-dropdown')
    const dropDownMenuBgColorOptions = {
        'bs': {
            navItemHover: '#67809f;',
            info:'#526781'
        },
        'it': {
            navItemHover: '#4183d7',
            info:'#286abd'
        },
        'dm': {
            navItemHover: '#2ecc71',
            info:'#25a25a'
        },
        'ts': {
            navItemHover: '#d64541',
            info:'#bc2c28'
        },
        'wd': {
            navItemHover: '#926fb1',
            info:'#79539a'
        },
        'cs': {
            navItemHover: '#f62459',
            info:'#de093f'
        },
        'dc': {
            navItemHover: '#ce4125',
            info:'#a3331d'
        }
    }

    const activeNavItemConfig = {
        link: false, 
        info: false,
        prevActiveNavItemClassSuffix: '',
        activeNavItemInfoDisplay: 'none',
    };

    ['bs', 'it', 'dm', 'ts', 'wd', 'cs', 'dc']
    .forEach(
        classSuffix => {
            $(`.nav-item-${classSuffix}`).on(
                'mouseenter', ()=> {
                    if(activeNavItemConfig.prevActiveNavItemClassSuffix){
                        activeNavItemConfig.prevActiveNavItemClassSuffix = classSuffix
                        // if(activeNavItemConfig.prevActiveNavItemClassSuffix === classSuffix){
                        //     $(this).css('background', dropDownMenuBgColorOptions[classSuffix].navItemHover)
                        // }
                        $(this).css('background-color', dropDownMenuBgColorOptions[classSuffix].navItemHover)
                        // console.log(activeNavItemConfig.prevActiveNavItemClassSuffix)
                        // $(`.nav-item-info-${[activeNavItemConfig.prevActiveNavItemClassSuffix]}`).css('display',  'none')
                        
                        $mainNavigationDropdown.css('display',  'none')
                        $(`.nav-item-info-${[activeNavItemConfig.prevActiveNavItemClassSuffix]}`).css('display',  'none')
                    }
                    if($mainNavigationDropdown.css('display') === 'none'){
                        $mainNavigationDropdown.css(
                            {
                                display: 'block',
                                'background-color': dropDownMenuBgColorOptions[classSuffix].info
                            }
                        ) 
                    }
                   

                    $(`.nav-item-info-${[classSuffix]}`).css('display',  'block')
                    // navItem-mouseLEAVE
                    $(`.nav-item-${classSuffix}`).on(
                        'mouseleave', 
                        ()=> $(this).css('background-color', '#333645')
                        // ()=> activeNavItemConfig.prevActiveNavItemClassSuffix = classSuffix
                    )
                    // navItem-Dropdown-Arrow mouseENTER
                    $(`.nav-item-${classSuffix} .triangle`).on(
                        'mouseenter',
                        ()=> {
                            // console.log($(`#nav-item-${classSuffix}_icon-container`))
                            // $(`.nav-${activeNavItemConfig.prevActiveNavItemClassSuffix}`).css('background-color', dropDownMenuBgColorOptions[classSuffix].navItemHover)
                            // $(`.nav-${classSuffix} span`).css('color', 'white')
                            console.log($(`.nav-item-${classSuffix} .triangle`).parent().css('background-color', ))
                            // console.log(activeNavItemConfig.prevActiveNavItemClassSuffix === classSuffix)
                        }
                    )
                    // navItem-Dropdown-mouseENTER
                    $mainNavigationDropdown.on(
                        'mouseenter',
                        ()=> {
                            // console.log($(`#nav-item-${classSuffix}_icon-container`))
                            $(`.nav-${activeNavItemConfig.prevActiveNavItemClassSuffix}`).css('background-color', dropDownMenuBgColorOptions[classSuffix].navItemHover)
                            $(`.nav-${classSuffix} span`).css('color', 'white')
                            
                            // console.log(activeNavItemConfig.prevActiveNavItemClassSuffix === classSuffix)
                        }
                    )
                    // navItem-Dropdown-mouseLEAVE
                    $mainNavigationDropdown.on(
                        'mouseleave',
                        ()=>{
                                $mainNavigationDropdown.css('display', 'none') 
                                $(`.nav-item-info-${[classSuffix]}`).css('display',  'none')
                                activeNavItemConfig.prevActiveNavItemClassSuffix = classSuffix
                                // $(`.nav-item-${classSuffix}`).css('background-color', '#333645');
                                // console.log('old suffix', classSuffix)

                                $(`.nav-${classSuffix}`).css('background-color', '#333645')
                        }
                    )
        
                }
            )

            
        }
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
// $(()=>{
//     $('.two').on('mouseover', ()=> $('.one').css('display', 'flex'))
//     $('.one').on('mouseleave', ()=> $('.one').css('display', 'none'))
//   })
function toggleClientTooltip(){
    const clients = ['black-swan', 'beat', 'survey-solutions', 'girl-guiding', 'sweetzy', 'one-traveller', 'xupes']
    clients.forEach(
        client => {
            //show tooltip
            $(`div.client-logo-container.${client}`)
            .on(
                'mouseover', 
                ()=>{
                    $(`div.tooltip-container.${client}`).css({
                        display : 'flex'
                    })
                    $(`div.tooltip-container.${client} div.tooltip-arrow`).css({
                        display : 'block'
                    })
                }
            )
            //hide tooltip
            $(`div.carousel-item.${client}`)
            .on(
                'mouseleave', 
                ()=> {
                    $(`div.tooltip-container.${client}`).css({
                        display : 'none'
                    })
                    $(`div.tooltip-container.${client} div.tooltip-arrow`).css({
                        display : 'none'
                    })
                }
            )
        }
    )
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
export {showNavigationDropDown, showSideMenu, hideSideMenu, toggleStickyHeader, toggleClientTooltip, displayCookieModal}