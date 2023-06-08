
var icon = document.getElementById("icon");

document.addEventListener('contextmenu', event => event.preventDefault());

var client = {
  init: function() {
       var o=this;

       // this will disable dragging of all images
       $("img").mousedown(function(e){
            e.preventDefault()
       });

       // this will disable right-click on all images
       $("body").on("contextmenu",function(e){
            return false;
       });
 }
};

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

  function validatePhoneNumber(input_str) {
    var re = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
  
    return re.test(input_str);
  }
  function validateForm(event) {
    var phone = document.getElementById('myform_phone').value;
    if (!validatePhoneNumber(phone)) {
  
  document.getElementById('phone_error').classList.remove('hidden');
    } else {
  
  document.getElementById('phone_error').classList.add('hidden');
      alert("validation success")
    }
    event.preventDefault();
  }
  
  document.getElementById('myform').addEventListener('submit', validateForm);
  
  function validateInputs() {
    var x = document.forms["myForm"]["fname"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
  }

function required()
{
  var empt = document.form-control.value;
    if (empt === "")
  {
    alert("Please input a Value");
    return false;
  }
  else 
  {
    alert('Input has been accepted');
    return true; 
  } 
}

var phone_input = document.getElementById("myform_phone");

phone_input.addEventListener('input', () => {
  phone_input.setCustomValidity('');
  phone_input.checkValidity();
});

phone_input.addEventListener('invalid', () => {
  if(phone_input.value === '') {
    phone_input.setCustomValidity('Enter phone number!');
  } else {
    phone_input.setCustomValidity('Enter phone number in this format: 123-456-7890');
  }
});




function processForm(e) {
  e.preventDefault();

  let name = document.getElementById('nameInput').value;
  let email = document.getElementById('emailInput').value;
  let phone = document.getElementById('phoneInput').value;

  document.getElementById('errorMessage').innerHTML = "";

  if (name === "") {
      document.getElementById('errorMessage').innerHTML = "Please enter your First Name.";
      return false;
  }
  if (email === "") {
      document.getElementById('errorMessage').innerHTML = "Please enter your e-mail address.";
      return false;
  }
  if (!validateEmail(email)) {
      document.getElementById('errorMessage').innerHTML = "Please enter a valid e-mail address.";
      return false;
  }
  if (phone === "") {
      document.getElementById('errorMessage').innerHTML = "Please enter your phone number.";
      return false;
  }
  if (!isNumericAndDashes(phone)) {
      document.getElementById('errorMessage').innerHTML = "Please enter a valid phone number (only numbers and dashes).";
      return false;
  }

  let xhr = new XMLHttpRequest();
  let data = {
      name: sanitize(name),
      email: sanitize(email),
      phone: sanitize(phone)
  };
  xhr.open('POST', 'newslett.php', true);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.send(JSON.stringify(data));

  xhr.onload = function () {
      if (xhr.status != 200) {
          document.getElementById('errorMessage').innerHTML = `Sorry, an error occurred during saving your data. Please try again.`;
      } else {
          document.getElementById('successMessage').innerHTML = "Thank you for signing up to a newsletter!";
      }
  };

  document.getElementById('nameInput').value = '';
  document.getElementById('emailInput').value = '';
  document.getElementById('phoneInput').value = '';
}