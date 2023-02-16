var slideIndex = 0;
var oldIndex = 0;
var slides = document.getElementsByClassName("slides");
var dots = document.getElementsByClassName("dot");
var img = document.getElementsByClassName("imgslide");
let isDone = true;
    function nextSlide() {
        slideIndex++;
        if (slideIndex > slides.length-1) {
            slideIndex = 0;
        }
        showSlides(slideIndex);
    }
    function prevSlide() {
        slideIndex--;
        if (slideIndex < 0) {
            slideIndex = slides.length-1;
        }
        showSlides(slideIndex);
    }
    function renderdots(quantity){
        let dots = "";
        for( let i = 0; i < quantity; i++) {
            dots += "<span "+(slideIndex===i? "class='dot active'": "class='dot'")+" alt="+i+"></span>";
        }
        $('.dots').html(dots);
    }
    function showSlides() {
        isDone = false;
        $(slides[oldIndex]).fadeOut(0,() => {
            slides[oldIndex].className = slides[oldIndex].className.replace(" active", "");
            dots[oldIndex].className = dots[oldIndex].className.replace(" active", "");
            oldIndex = slideIndex;
            dots[slideIndex].className += " active";
        });
        $(slides[slideIndex]).fadeIn("100", () => {
            var title = $(img[slideIndex]).attr("title");
            $("p").html(title);
            slides[slideIndex].className += " active";
            isDone = true;
        });
    }
    $(document).ready(function(){
        renderdots(slides.length);
        $(".next").click(function(e){
            if (isDone == false) {
                e.preventDefault();
            }
            else {
                nextSlide();
            }
        });
        $(".prev").click(function(e){
            if (isDone == false) {
                e.preventDefault();
            }
            else {
                prevSlide();
            }
        });
        $(".dot").click(function(e){
            var tempIndex = parseInt($(e.target).attr('alt'));
            if (tempIndex === slideIndex){
                return;
            }
            else (slideIndex = tempIndex);
            if (isDone == false) {
                e.preventDefault();
            }
            else {
                showSlides();
            }
        })       
    });
    