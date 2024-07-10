
$(document).ready(function(){
    let currentIndex = 0;
    let testimonial = $(".testimonial");
    let totalTestimonial = testimonial.length;

    showTestimonial(currentIndex);

    $("#prevBtn").on("click", function(){
        currentIndex = (currentIndex - 1 + totalTestimonial) % totalTestimonial;
        showTestimonial(currentIndex);
    });

    $("#nextBtn").on("click", function(){
        currentIndex = (currentIndex + 1) % totalTestimonial;
        showTestimonial(currentIndex);
    });

    function showTestimonial(index){
        testimonial.hide();
        testimonial.eq(index).fadeIn();
    }
});