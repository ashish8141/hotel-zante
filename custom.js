$('#hotel').owlCarousel({
    loop:true,
    // margin:10,
    nav:true,
    items:1,
    dots:false,
    navText:['<i class="fa-solid fa-arrow-left"></i>','<i class="fa-solid fa-arrow-right"></i>'],

})


$('#slider').owlCarousel({
    loop:true,
    margin:30,
    responsive:{
        800:{
            items:2
        },
        1100:{
            items:3
        },
        1200:{
            items:5
        }
    }
})