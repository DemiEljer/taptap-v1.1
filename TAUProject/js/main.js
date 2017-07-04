( function () {
    window.addEventListener( 'tizenhwkey', function( ev ) {
        if( ev.keyName === "back" ) {
            var activePopup = document.querySelector( '.ui-popup-active' ),
                page = document.getElementsByClassName( 'ui-page-active' )[0],
                pageid = page ? page.id : "";

            if( pageid === "one" && !activePopup ) {
                try {
                    tizen.application.getCurrentApplication().exit();
                } catch (ignore) {
                }
            } else {
                window.history.back();
            }
        }
    } );
} () );

window.onload = function() { 
    var buttonMain = document.querySelector('#mainTouch');
    
    buttonMain.addEventListener("click", function() {
    	var countText = document.querySelector('#count');
        var levelText = document.querySelector('#level');
        var level = Number(levelText.innerHTML);
        var contentText = document.querySelector('#content-text');
        var score = Number(contentText.innerHTML) + level;
        contentText.innerHTML = score;
        contentText.innerHTML = contentText.innerHTML;
        if (score > level * level * level) {
           level = level + 1;
           levelText.innerHTML = level;
        }
    });
    
$(".levelNumber").css("color", '#FEB678');

var canvas = document.getElementById("draw");
var can = canvas.getContext("2d");
var black = false;
for (i = 0; i < 8; i++) {
	for (j = 0; j < 8; j++) {
		if (black) {
			can.fillStyle = "#000000";
		}
		else {
			can.fillStyle = "#FFFFFF";
		}
		can.fillRect(i * 40, j * 40, 40, 40);
		black = !black;
		}
	black = !black;
	}
};