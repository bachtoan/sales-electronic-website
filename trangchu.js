$(document).ready(function(){
    $('.slick-slider').slick({
        slidesToShow: 5,
        prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
        nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
        autoplay: true,
        autoplaySpeed: 1000,
    });
  });

function dong(button){
    var form = document.querySelector('.form-container');
    form.style.display = "none";
}

function mo(button){
    var form = document.querySelector('.form-container');

    form.style.display = "block";
}

//Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.documentElement.scroll({top:0,behavior:'smooth'});
}

var boxes = document.querySelectorAll('.box')
var target = document.querySelectorAll('.target')

var currentTarget = null

target.forEach(target=>{
    target.addEventListener('dragstart',function(e){
        currentTarget = this
    })
    
    
})

boxes.forEach(box =>{
    box.addEventListener('dragover',function(e){
        e.preventDefault()
    })
    box.addEventListener('drop',function(e){       
        if(!box.querySelector('.target')){
            this.appendChild(currentTarget)
        }
    })
})