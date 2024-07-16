document.getElementById('contactBtn').addEventListener('click', function() {
    $('#contactModal').modal('show');
});

document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Form submitted!');
    $('#contactModal').modal('hide');
});

function openReadMore() {
    window.open('https://fylehq.com', '_blank');
}

$(document).ready(function() {
    $('.content-item').click(function() {
        // Remove active class from all items
        $('.content-item').removeClass('active');
        // Add active class to the clicked item
        $(this).addClass('active');
        // Change the main image
        var newImage = $(this).data('image');
        $('#mainImage').attr('src', newImage);
    });
});



document.addEventListener('DOMContentLoaded', function() {
    var carouselElement = document.querySelector('#servicesCarousel');
    var dots = document.querySelectorAll('.dot');
    
    carouselElement.addEventListener('slide.bs.carousel', function (event) {
        var activeIndex = event.to;
        
        dots.forEach(function(dot, index) {
            if (index === activeIndex) {
                dot.classList.add('border-circle');
                dot.classList.remove('black-dot2');
            } else {
                dot.classList.remove('border-circle');
                dot.classList.add('black-dot2');
            }
        });
    });
});



