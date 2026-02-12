document.addEventListener('DOMContentLoaded', () => {
    // 1. Set current year in footer
    const yearSpan = document.getElementById('currentYear');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // 2. Read More functionality for about.html
    const readMoreBtn = document.getElementById('readMoreBtn');
    const moreText = document.getElementById('moreText');

    if (readMoreBtn && moreText) {
        readMoreBtn.addEventListener('click', () => {
            if (moreText.style.display === 'none' || moreText.style.display === '') {
                moreText.style.display = 'inline';
                readMoreBtn.textContent = 'Read Less';
            } else {
                moreText.style.display = 'none';
                readMoreBtn.textContent = 'Read More';
            }
        });
    }

    // 3. Navigation function (for Home page button)
    window.navigateTo = (url) => {
        window.location.href = url;
    };

    // 4. Form validation for register.html (Optional but good practice)
    const registrationForm = document.getElementById('registrationForm');
    if (registrationForm) {
        registrationForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // Basic check if form is valid according to HTML5 constraints
            if (registrationForm.checkValidity()) {
                window.location.href = 'thankyou.html';
            } else {
                registrationForm.reportValidity();
            }
        });
    }
});
