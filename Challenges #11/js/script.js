/* ==========================================
   Challenge #11: W3Schools How-To Scripts
   ========================================== */

// Feature 1: Accordion Script
document.addEventListener("DOMContentLoaded", function() {
    var acc = document.getElementsByClassName("accordion");
    for (var i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.display === "block") {
                panel.style.display = "none";
            } else {
                panel.style.display = "block";
            }
        });
    }
});

// Feature 2: Modal Box Script
function openModal() {
    document.getElementById("infoModal").style.display = "block";
}

function closeModal() {
    document.getElementById("infoModal").style.display = "none";
}

window.onclick = function(event) {
    var modal = document.getElementById("infoModal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
}

// Feature 3: Tabs Script
function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Feature 4: Search Filter Script
function filterBooks() {
    var input, filter, grid, cards, title, i, txtValue;
    input = document.getElementById('bookSearchInput');
    filter = input.value.toUpperCase();
    grid = document.getElementById("bookGridList");
    cards = grid.getElementsByClassName('book-card');

    for (i = 0; i < cards.length; i++) {
        title = cards[i].querySelector("#featured-book-title");
        if (title) {
            txtValue = title.textContent || title.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                cards[i].style.display = "";
            } else {
                cards[i].style.display = "none";
            }
        }
    }
}

// Feature 5: Dropdown Menu Script
function toggleDropdown() {
    document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns.get(i);
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}