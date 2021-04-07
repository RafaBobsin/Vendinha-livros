function dropdownFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Closes the dropdown if the user clicks outside of it
window.onclick = function (e) {
    if (!e.target.matches('#btn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}