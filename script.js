
function toggleMode() {
    var body = document.body;
    body.classList.toggle('light-mode');
}


document.addEventListener("DOMContentLoaded", function () {
    const themeSwitcher = document.getElementById("themeSwitcher");

   
    const themes = ["purple", "pink", "blue"];

    let currentThemeIndex = 0;
  
    function changeTheme() {
        document.documentElement.className = themes[currentThemeIndex];
        currentThemeIndex = (currentThemeIndex + 1) % themes.length;
    }
    themeSwitcher.addEventListener("click", changeTheme);
});


document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); 

  
    var firstName = document.getElementById('firstName').value.trim();
    var lastName = document.getElementById('lastName').value.trim();
    var email = document.getElementById('email').value.trim();
    var phone = document.getElementById('phone').value.trim();
    var message = document.getElementById('message').value.trim();

   
    if (firstName === '' || lastName === '' || email === '' || phone === '' || message === '') {
        document.getElementById('status').textContent = 'All fields are required.';
        return;
    }

    var emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email) || !(email.includes('@dal.ca') || email.includes('@gmail.com'))) {
        document.getElementById('status').textContent =' Please enter a valid email address from @dal.ca or @gmail.com.';
        return;
    }
   
    var phoneRegex = /^\(\d{3}\)\d{3}-\d{4}$/;
    if (!phoneRegex.test(phone)) {
        document.getElementById('status').textContent = 'Please enter a valid phone number (111)111-1111.';
        return;
    }

    
    if (message.length < 10) {
        document.getElementById('status').textContent = 'Message must be at least 10 characters long.';
        return;
    }

 
    document.getElementById('status').textContent = 'Form submitted successfully!';
  
    document.getElementById('contact-form').reset();


});


window.onload = function () {
    alert('Cant wait to hear from you😄!');
}


