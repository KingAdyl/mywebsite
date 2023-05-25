
var icon = document.getElementById("icon");

icon.onclick = function() {
    document.body.classList.toggle("dark-theme"); 
    if(document.body.classList.contains("dark-theme")){
      icon.src = "images/lightmode.png";
    }else{
      icon.src = "images/darkmode.png";
    }
}

// Open the Modal
function openModal() {
    document.getElementById("myModal").style.display = "block";
  }
  
  // Close the Modal
  function closeModal() {
    document.getElementById("myModal").style.display = "none";
  }
  
  var slideIndex = 1;
  showSlides(slideIndex);
  
  // Next/previous controls
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  // Thumbnail image controls
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    captionText.innerHTML = dots[slideIndex-1].alt;
  }


  function sendEmail() {
    Email.send({
          Host : "smtp.gmail.com",
          Username : "adyl.dexter@gmail.com",
          Password : "password",
          To : 'adylahm@gmail.com',
          From : document.getElementById("email").value,
          Subject : "New Contact Form Enquiry",
          Body : document.getElementById("formControlTextarea").value
     }).then(
      message => alert(message)
  );
  }