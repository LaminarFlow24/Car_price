document.addEventListener("DOMContentLoaded", function () {
    const frontPage = document.querySelector(".front-page");
    const backgroundImage = document.querySelector(".background-image");
    const knowMoreContainer = document.querySelector(".know-more-container");
    const loginButtonContainer = document.querySelector(".login-button-container");
    const translucentSlide = document.getElementById("translucent-slide");
    const loginButton = document.getElementById("login-button");
    const cancelButton = document.getElementById("cancel-button");

    const signupForm = document.getElementById("signup-form");
    const loginForm = document.getElementById("login-form");
    const toLogin = document.getElementById("to-login");
    const toSignup = document.getElementById("to-signup");


    setTimeout(() => {
        frontPage.classList.add("fade-out");
        backgroundImage.classList.add("show");
        setTimeout(() => {
            frontPage.style.display = "none";
        }, 500); 
    }, 2000);

    setTimeout(() => {
        knowMoreContainer.classList.add("shrink");
        loginButtonContainer.style.opacity = 1;
        loginButtonContainer.style.transition = 'opacity 1s ease-in-out';
    }, 2500);

    loginButton.addEventListener("click", () => {
        translucentSlide.classList.add("show");
    });

    cancelButton.addEventListener("click", () => {
        translucentSlide.classList.remove("show");
    });

    toLogin.addEventListener("click", (e) => {
        e.preventDefault();
        signupForm.style.display = "none";
        loginForm.style.display = "block";
    });


    toSignup.addEventListener("click", (e) => {
        e.preventDefault();
        loginForm.style.display = "none";
        signupForm.style.display = "block";
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





    
   
document.getElementById('about-us-button').addEventListener('click', () => {
    document.getElementById('about-us-slide').style.display = 'flex';
});

document.querySelector('#about-us-slide').addEventListener('click', (event) => {
    if (event.target === document.querySelector('#about-us-slide')) {
        document.querySelector('#about-us-slide').style.display = 'none';
    }
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        document.querySelector('#about-us-slide').style.display = 'none';
    }
});
document.getElementById('company-overview-button').addEventListener('click', () => {
    document.getElementById('company-overview-slide').style.display = 'flex';
});


document.getElementById('company-overview-slide').addEventListener('click', (event) => {
    if (event.target === document.getElementById('company-overview-slide')) {
        document.getElementById('company-overview-slide').style.display = 'none';
    }
});


document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        document.getElementById('company-overview-slide').style.display = 'none';
    }
});
document.getElementById('customer-care-button').addEventListener('click', () => {
    document.getElementById('customer-care-slide').style.display = 'flex';
});


document.getElementById('customer-care-slide').addEventListener('click', (event) => {
    if (event.target === document.getElementById('customer-care-slide')) {
        document.getElementById('customer-care-slide').style.display = 'none';
    }
});




