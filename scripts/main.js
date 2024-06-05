// scripts/main.js
document.addEventListener('DOMContentLoaded', function () {
    const tabs = document.querySelectorAll('.nav-links a');
    const sections = document.querySelectorAll('main section');

    tabs.forEach(tab => {
        tab.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = e.target.getAttribute('href').substring(1);

            sections.forEach(section => {
                section.style.display = 'none';
            });
            document.getElementById(targetId).style.display = 'block';

            // Smooth scroll to the section
            document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Show the home section by default
    document.getElementById('home').style.display = 'block';
});
