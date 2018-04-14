$(document).ready(function() {

    var frame = document.getElementById("viewer-frame");

    function loadNewPage () {
        var page = window.location.hash.replace("#", '');
        if(page !== '') {
            frame.src = "pages/" + page + ".html";
        }
    }
    loadNewPage();

    window.addEventListener("hashchange", loadNewPage, false);

    $( ".logo" ).click(function() {
        frame.src = "pages/home.html"
        window.location.hash = ""
    });

    $( ".tutorials-button" ).click(function() {
        frame.src = "pages/tutorials.html"
        window.location.hash = "tutorials"
    });

    $( ".examples-button" ).click(function() {
        frame.src = "pages/examples.html"
        window.location.hash = "examples"
    });

    $( ".reference-button" ).click(function() {
        frame.src = "pages/reference.html"
        window.location.hash = "reference"
    });

    $( ".about-button" ).click(function() {
        frame.src = "pages/about.html"
        window.location.hash = "about"
    });

    $( ".updates-button" ).click(function() {
        window.open('http://forum.wickeditor.com/t/wick-0-15-update-thread-video-export/461')
    });

    $( ".community-button" ).click(function() {
        window.open('http://forum.wickeditor.com/');
    });

    $( ".logotop-bar-item" ).click(function() {
        frame.src = "pages/home.html"
        window.location.hash = ""
    });

});
