$(document).ready(function() {

    $( ".launch-editor-button" ).click(function() {
        window.top.location.href = "/wick-editor"
    });

    $( '.fork-me-on-github ').click(function() {
        window.top.location.href = "https://www.github.com/zrispo/wick/"
    });

    $.ajax({
        url: "../resources/Homepage.json",
        type: 'GET',
        data: {},
        success: function(data) {
        	var playerContainer = document.getElementById('player-container');
            playerContainer.innerHTML = "";
            var iframe = document.createElement('iframe');
            iframe.className = 'player';
            iframe.alt = "Wick: The Internet's free and open-source creation toolkit.";
            iframe.onload = function () {
                iframe.contentWindow.runProject(JSON.stringify(data));
            }
            iframe.src = "../../wick-editor/player.html";
            playerContainer.appendChild(iframe);
        },
        error: function () {
            console.log("ajax: error")
        },
        complete: function(response, textStatus) {

        }
    });

});
