$(function () {
    $('#header').load('../model/header.html', function () {
        var currentPath = window.location.pathname;
        var currentPage = currentPath.substring(currentPath.lastIndexOf('/') + 1);
        currentPage = currentPage.replace('.html', '');
        document.getElementById(currentPage).classList.add('active');

        const mobileMenuButton = document.getElementById('hamburger');
        const mobileMenu = document.getElementById('mobile-menu');
        const overlay = document.getElementById('overlay');
        const closeMenuButton = document.getElementById('closebtn');

        mobileMenuButton.addEventListener('click', function () {
            mobileMenu.classList.toggle('active');
            document.getElementById('mobile-menu').style.width = 'fit-content';
            overlay.style.display = mobileMenu.classList.contains('active') ? 'block' : 'none';
        });

        closeMenuButton.addEventListener('click', function () {
            mobileMenu.classList.remove('active');
            document.getElementById('mobile-menu').style.width = '0';
            overlay.style.display = 'none';
        });

    });
    
    $('#footer').load('../model/footer.html', function () {});

});