// 1. Sidenav Script
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

// 2. Lightbox Script
function openLightbox() {
    document.getElementById("lightboxModal").style.display = "block";
}

function closeLightbox() {
    document.getElementById("lightboxModal").style.display = "none";
}

// 3. To-Do Checklist Toggle Script
function toggleCheck(item) {
    item.classList.toggle('checked');
}

// Retained Features from #11
document.addEventListener("DOMContentLoaded", function() {
    var acc = document.getElementsByClassName("accordion");
    for (var i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            panel.style.display = panel.style.display === "block" ? "none" : "block";
        });
    }
});

function openModal() {
    document.getElementById("infoModal").style.display = "block";
}

function closeModal() {
    document.getElementById("infoModal").style.display = "none";
}

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

function filterBooks() {
    var input = document.getElementById('bookSearchInput');
    var filter = input.value.toUpperCase();
    var grid = document.getElementById("bookGridList");
    var cards = grid.getElementsByClassName('book-card');

    for (var i = 0; i < cards.length; i++) {
        var title = cards[i].querySelector("#featured-book-title");
        if (title) {
            var txtValue = title.textContent || title.innerText;
            cards[i].style.display = txtValue.toUpperCase().indexOf(filter) > -1 ? "" : "none";
        }
    }
}

function toggleDropdown() {
    document.getElementById("myDropdown").classList.toggle("show");
}