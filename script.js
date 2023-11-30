document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector('.container');
    const loginForm = document.querySelector('.login');
    const signupForm = document.querySelector('.signup');
    const signinLink = document.querySelector('.text-signin-link');
    const signupLink = document.querySelector('.text-signup-link');

    signinLink.addEventListener('click', function() {
        container.classList.remove('active');
    });

    signupLink.addEventListener('click', function() {
        container.classList.add('active');
    });
});
