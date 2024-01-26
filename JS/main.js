                                                    
                                                    // Navbar

// selecting elements                                                    
let nav = $('.navbar');   
let mark = $('.list');
const widthOfNav = nav.outerWidth();
let exit = $('.exit')



mark.click(function(){
 
    if(nav.css('left') == "0px"){nav.animate({left: -widthOfNav , right: '100%'} , 500)}
    else{nav.animate({left: "0px" , right: "80%"} , 500)}


})     

// console.log(widthOfNav);

exit.click(function(){
    nav.animate({left: -widthOfNav , right: '100%'} , 500);
})

// ***************************************************

                                                    // section2

// Event

$('.singers .card-title').click(function(){
    $(this).next().slideToggle(600)
    $('.singers .inner-card').not($(this).next()).slideUp()
})



// ***************************************************



                                                   // section3

let countDown = new Date("Jan 25, 2025 " ).getTime();
let count = setInterval(function(){
    let currentTime = new Date().getTime(); 
    let distance = countDown - currentTime;

    let days = Math.floor(distance / (1000 * 60 *60 *24));
    let hours = Math.floor((distance % (1000 * 60 *60 *24)) / (1000 * 60 *60));
    let minutes = Math.floor((distance % (1000 * 60 *60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    $('.Days').html(`${days} D`);
    $('.Hours').html(`${hours} H`);
    $('.Minutes').html(`${minutes} M`);
    $('.Seconds').html(`${seconds} S`);

    if(distance < 0){
    clearInterval(count);
    $('.Days').innerHTML = "Expired";
    $('.Hours').innerHTML = "Expired";
    $('.Minutes').innerHTML = "Expired";
    $('.Seconds').innerHTML = "Expired";
    }

},1000);

// ***********************************************

                                                    //   Footer

                                                   // texteria

let textarea = $('.textarea');

textarea.keyup(function(){
    let limet = $('.textarea').val().length
    let textCounter = $('.text-counter');

    textCounter.html(100 - limet <= 0 ? "You have finished you limite" : 100 - limet)
})

