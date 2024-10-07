document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.getElementById('hamburger-menu');
    const navLinks = document.getElementById('nav-links');
    const dropdownButtons = document.querySelectorAll('.dropbtn');
    let isDropdownOpen = false;

    
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('show');
    });

   
    dropdownButtons.forEach(button => {
        button.addEventListener('click', function (e) {
            const dropdown = this.nextElementSibling; 
            isDropdownOpen = !isDropdownOpen;
            dropdown.style.display = isDropdownOpen ? "block" : "none"; 
            e.stopPropagation();
        });
    });

    // closes dropdown kapag wala na cursor sa dropdown
    window.onclick = function (e) {
        if (!e.target.closest('.hamburger-menu') && !e.target.closest('#nav-links')) {
            navLinks.classList.remove('show'); 
            document.querySelectorAll('.dropdown-content').forEach(dropdown => {
                dropdown.style.display = "none"; 
                isDropdownOpen = false; 
            });
        }
    };

    
});

