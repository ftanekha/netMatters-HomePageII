import {toggleSideMenu, toggleStickyHeader, displayCookieModal, shouldPostData, displaySuccessMessage} from './js/utilities.js'

$(()=>{
    const netmattersBlack = '#333645'

    /*COOKIE POPUP POLICY & consent management*/
    displayCookieModal()
    const cookiSettingsButton = $('.cookie-settings-btn')
    cookiSettingsButton.on('click', ()=> displayCookieModal(true))
    /*CAROUSEL///Banner///*/
    $('div#banner').slick(
        {//configuration object
            autoplay: false,
            adaptiveHeight: true,
            arrows: false,
            dots: true
        }
    )
    /* SIDE MENU////////////////////
    toggle the Side Menu using the hamburger menu button*/
    const $hamburgerMenuIcon = $('div.actions button[data-toggle="sidebar"]')
    $hamburgerMenuIcon
    .on('click', toggleSideMenu)
    .on('mouseover',
        ()=> {
            $hamburgerMenuIcon.css(
                {
                    'background-color': '#22242e',
                    'border-color': '#191a22'
                }
            )
        }
    )
    .on('mouseleave', ()=> $hamburgerMenuIcon.css('background-color', netmattersBlack))
    //
    $('#side-menu_background-filter').on('click', toggleSideMenu)
    /* STICKY HEADER*/
    //determine the scroll direction using the scroll position on the document object
    //only show the sticky header wher the user scrolls UP
    toggleStickyHeader();
    /* NAV drop-down menu*/
    const navItemIconColors = {
        'bs': '#67809f',
        'it': '#4183d7',
        'dm': '#2ecc71', 
        'ts': '#d64541', 
        'wd': '#926fb1', 
        'cs': '#f62459', 
        'dc': '#ce4125'
    }; 

    ['bs', 'it', 'dm', 'ts', 'wd', 'cs', 'dc'].forEach(
        classSuffix => {
            $(`.${classSuffix}`)
            .on('mouseover', 
                ()=> $(`.${classSuffix}`).css('color', 'white')
            )
        }
    );
    
    ['bs', 'it', 'dm', 'ts', 'wd', 'cs', 'dc'].forEach(
        classSuffix => {
            $(`.${classSuffix}`)
            .on('mouseleave', 
                ()=> $(`span.${classSuffix}`).css('color', navItemIconColors[classSuffix])
            )
        }
    )
    /*CAROUSEL///Acccreditations///*/
    const accreditationsCarouselSettings = {
        autoplay: true,
        arrows: false,
        dots: false,
        slidesToShow: 6,
        draggable: true
    }
    $('div.accreditations-container').slick(accreditationsCarouselSettings)
    /*CAROUSEL///Clients & Partners///*/
    $('.owl-carousel')
    .owlCarousel({
        loop: true, 
        autoplay: true, 
        autoplayTimeout: 3200,
        autoplayHoverPause:true,
        mouseDrag: false,
        responsive:{
            0: {
                items: 1
            },
            300: {
                items: 2
            },
            550: {
                items: 3
            },
            992: {
                items: 4
            },
            1220: {
                items: 5
            },
            1340:{
                items: 6
            }
        }
    })


    //* CONTACT US*/
    // stop all anchir tags misbehavior
    $('a').on('click', (ev)=> ev.preventDefault())
    /*Accordion*/ 
    const $accordion = $('div#accordion') 
    const $accordionControl = $('span#accordion-control') 
    const $footer = $('footer')

    $footer.css('transition', '.5s ease-in-out')

    $accordion.slideUp()
    $accordionControl.on('click', ()=> $accordion.slideToggle())

    /*Checkbox*/ 
    const $checkBox = $('div#checkbox')
    const $checkMark = $('span#checkmark')

    $checkBox.on(
        'click', 
        ()=> {
            if($checkMark.css('visibility') === 'hidden'){
                $checkBox.css('background-color', netmattersBlack)
                $checkMark.css('visibility', 'visible')
            }else{
                $checkMark.css('visibility', 'hidden')
                $checkBox.css('background-color', 'white')
            }
        }
    )

    /* FORM VALIDATION*/
    // USING HTML form action attribute to send data
    /*
    const $sendEnquiryButton = $('#send-enquiry-button')
    $sendEnquiryButton.on('click', ()=>{
        //check for empty fields
        displaySuccessMessage()
    })
    */
   
   //USING JS
   const form = document.querySelector('#form')
   const name = document.querySelector('#name')
   const email = document.querySelector('#email')
   const telephone = document.querySelector('#telephone')
   const message = document.querySelector('#message')

    form.addEventListener(
        'submit',
        (ev)=>{
            ev.preventDefault()
            const formData = {
                name: name.value,
                email: email.value,
                telephone: telephone.value,
                message : message .value
            }
            
            if(shouldPostData()){
                const requestOptions = {
                    method: 'POST',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify(formData)
                }
                
                fetch('./post-form-data.php', requestOptions)
                .then(res => {
                    if(res.ok){
                        displaySuccessMessage()
                        document.querySelector('#form').reset()
                        console.log('success')
                        return res.json()
                    }
                })
                .then(msg => console.log(msg))
                .catch(err => console.error(err.message))
            }
        }
    )
})