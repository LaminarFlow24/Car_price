document.addEventListener("DOMContentLoaded", function() {
    const frontPage = document.querySelector('.front-page');
    const backgroundImage = document.querySelector('.background-image');
    const loginButton = document.getElementById('login-button');
    const translucentSlide = document.getElementById('translucent-slide');
    const cancelButton = document.getElementById('cancel-button');
    const signupForm = document.getElementById('signup-form');
    const loginForm = document.getElementById('login-form');
    const toLogin = document.getElementById('to-login');
    const toSignup = document.getElementById('to-signup');
    const knowMoreOutput = document.getElementById('know-more-output');
    const knowMoreContainer = document.querySelector('.ySH');
    const loginButtonContainer = document.querySelector('.login-button-container');
    const menuIcon = document.getElementById('menu-icon');
    const navLinks = document.getElementById('nav-links');

    setTimeout(() => {
        frontPage.classList.add('fade-out');
    }, 1000);

    setTimeout(() => {
        frontPage.style.display = 'none';
        backgroundImage.classList.add('show');
        knowMoreContainer.classList.add('shrink');
    }, 1500);

    setTimeout(() => {
        loginButtonContainer.style.opacity = '1';
    }, 2500);

    loginButton.addEventListener('click', function() {
        translucentSlide.classList.add('show');
    });

    cancelButton.addEventListener('click', function() {
        translucentSlide.classList.remove('show');
    });

    toLogin.addEventListener('click', function(event) {
        event.preventDefault();
        signupForm.style.display = 'none';
        loginForm.style.display = 'block';
    });

    toSignup.addEventListener('click', function(event) {
        event.preventDefault();
        loginForm.style.display = 'none';
        signupForm.style.display = 'block';
    });

    // Close the translucent slide when clicking outside the forms
    document.addEventListener('click', function(event) {
        const isClickInside = translucentSlide.contains(event.target) && !loginForm.contains(event.target) && !signupForm.contains(event.target);
        if (isClickInside && event.target !== loginButton) {
            translucentSlide.classList.remove('show');
        }
    });

    // Toggle nav links visibility on menu icon click
    menuIcon.addEventListener('click', function() {
        navLinks.classList.toggle('show');
    });
    
    // Close the translucent slide when pressing the Escape key
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            translucentSlide.classList.remove('show');
        }
    });

    signupForm.addEventListener('submit', function(event) {
        event.preventDefault(); 
        
      
        var username = document.getElementById('first_name').value;
        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;
        var confirmPassword = document.getElementById('confirm_password').value;
        
    
        if (username && email && password && confirmPassword) {
            if (password === confirmPassword) {
               
                window.location.href = 'https://icarprice.streamlit.app/';
            } else {
               
                alert('Passwords do not match.');
            }
        } else {
            
            alert('Please fill in all fields.');
        }
    });
});