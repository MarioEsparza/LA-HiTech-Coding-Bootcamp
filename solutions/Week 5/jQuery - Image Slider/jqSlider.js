/* Week 5 - Lab 4 |  Mario Esparza*/

$(document).ready(function () {
    //Set options
    var slides = $(".slide"),
        lastSlide = slides.length - 1,
        counter,
        autoSlide = true,
        fadeSpeed = 1000,
        autoSlideSpeed = 5000;

    //Add intial active class
    $(".slide").first().addClass("active");

    function showSlide(counter) {
        slides.fadeOut(fadeSpeed).eq(counter).fadeIn(fadeSpeed);
        slides.removeClass('active').eq(counter).addClass('active');
    }


    //Hide all slides 
    //Show first slide
    $("div.slide:not(:first)").hide();


    //Add event handlers for next and prev
    $("#prev").click(function () {
        counter = $('div.slide.active').index();
        console.log("Counter: ", counter);
        counter == 0 ? counter = lastSlide : counter--;
        showSlide(counter);
        resetTimer();
    });
    $("#next").click(function () {     
        counter = $('div.slide.active').index();
        console.log("Counter: ", counter);
        counter == lastSlide ? counter = 0 : counter++;
        showSlide(counter);
        resetTimer();

    });
    //Autoslider handler
    if (autoSlide) {
        var autoPlay = setInterval(function () { sliderTimer() }, autoSlideSpeed);

        function sliderTimer() {
            counter = $('div.slide.active').index();
            console.log("Counter: ", counter);
            counter === lastSlide ? counter = 0 : counter++;
            showSlide(counter);
        }
     
    }
    function resetTimer() {
            clearInterval(autoPlay);
            var autoPlay = setInterval(function () { sliderTimer() }, autoSlideSpeed);
        }
  
});

/*
    $("#prev").click(function () {
        console.log("Counter: ", counter);
      
        current.fadeOut(fadeSpeed);
        if (counter == 0) {
            current = slides.last();
            current.fadeIn(fadeSpeed);
            counter = slides.length - 1;
        } else {
            current = current.prev();
            current.fadeIn(fadeSpeed);
            counter--;
        }

    });
    $("#next").click(function () {     
        current.fadeOut(fadeSpeed);
        if(counter == lastSlide){
            current = slides.first();
            current.fadeIn(fadeSpeed);
            counter = 0;
        }else{
            current = current.next();
            current.fadeIn(fadeSpeed);
            counter++;
        }


    });
    */