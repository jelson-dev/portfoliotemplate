const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");
const title = document.querySelector(".title h1");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  links.forEach(link => {
    link.classList.toggle("fade");
  });
});

navLinks.addEventListener("click", () => {
    navLinks.classList.toggle("open");
    links.forEach(link => {
      link.classList.toggle("fade");
    });
  });

  let writer = document.querySelector('.title h1')
  let text = writer.innerText.split('')
  let lastCharInserted = '' // innertext/textcontent/innerhtml remove trailing space :/
  
  writer.innerText = ''
  
  let ival = setInterval(() => {
    let letter = text.shift()
  
    writer.textContent = writer.innerText + (lastCharInserted == ' ' ? ` ${letter}` : letter)
  
    lastCharInserted = letter
  
    if(!text.length) { clearInterval(ival); }
  }, 175)

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

$(function() {
  // Get the form.
  let form = $('#ajax-contact');

  // Get the messages div.
  let formMessages = $('#form-messages');

  // TODO: The rest of the code will go here...
});

// Set up an event listener for the contact form.
$(form).submit(function(event) {
  // Stop the browser from submitting the form.
  event.preventDefault();

  // TODO
});

// Serialize the form data.
let formData = $(form).serialize();

// Submit the form using AJAX.
$.ajax({
  type: 'POST',
  url: $(form).attr('action'),
  data: formData
}).done(function(response) {
  // Make sure that the formMessages div has the 'success' class.
  $(formMessages).removeClass('error');
  $(formMessages).addClass('success');

  // Set the message text.
  $(formMessages).text(response);

  // Clear the form.
  $('#name').val('');
  $('#email').val('');
  $('#message').val('');
}).fail(function(data) {
  // Make sure that the formMessages div has the 'error' class.
  $(formMessages).removeClass('success');
  $(formMessages).addClass('error');

  // Set the message text.
  if (data.responseText !== '') {
      $(formMessages).text(data.responseText);
  } else {
      $(formMessages).text('Oops! An error occured and your message could not be sent.');
  }
});