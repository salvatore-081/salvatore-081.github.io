/*EventListener for white keys*/
document.getElementById("a-key").addEventListener("click", function(e){
    let keyPressedAudio = new Audio("Audio/A.mp3");
    keyPressedAudio.play();
    highlightWhite("a-key");
});
document.getElementById("s-key").addEventListener("click", function(e){
    let keyPressedAudio = new Audio("Audio/S.mp3");
    keyPressedAudio.play();
    highlightWhite("s-key");
});
document.getElementById("d-key").addEventListener("click", function(e){
    let keyPressedAudio = new Audio("Audio/D.mp3");
    keyPressedAudio.play();
    highlightWhite("d-key");
});
document.getElementById("f-key").addEventListener("click", function(e){
    let keyPressedAudio = new Audio("Audio/F.mp3");
    keyPressedAudio.play();
    highlightWhite("f-key");
});
document.getElementById("g-key").addEventListener("click", function(e){
    let keyPressedAudio = new Audio("Audio/G.mp3");
    keyPressedAudio.play();
    highlightWhite("g-key");
});
document.getElementById("h-key").addEventListener("click", function(e){
    let keyPressedAudio = new Audio("Audio/H.mp3");
    keyPressedAudio.play();
    highlightWhite("h-key");
});
document.getElementById("j-key").addEventListener("click", function(e){
    let keyPressedAudio = new Audio("Audio/J.mp3");
    keyPressedAudio.play();
    highlightWhite("j-key");
});
document.addEventListener("keydown", function(e){
    if (e.code == "KeyA"){
        let keyPressedAudio = new Audio("Audio/A.mp3");
        keyPressedAudio.play();
        highlightWhite("a-key");
    } else if (e.code == "KeyS"){
        let keyPressedAudio = new Audio("Audio/S.mp3");
        keyPressedAudio.play();
        highlightWhite("s-key");
    } else if (e.code == "KeyD"){
        let keyPressedAudio = new Audio("Audio/D.mp3");
        keyPressedAudio.play();
        highlightWhite("d-key");
    } else if (e.code == "KeyF"){
        let keyPressedAudio = new Audio("Audio/F.mp3");
        keyPressedAudio.play();
        highlightWhite("f-key");
    } else if (e.code == "KeyG"){
        let keyPressedAudio = new Audio("Audio/G.mp3");
        keyPressedAudio.play();
        highlightWhite("g-key");
    } else if (e.code == "KeyH"){
        let keyPressedAudio = new Audio("Audio/H.mp3");
        keyPressedAudio.play();
        highlightWhite("h-key");
    } else if (e.code == "KeyJ"){
        let keyPressedAudio = new Audio("Audio/J.mp3");
        keyPressedAudio.play();
        highlightWhite("j-key");
    }
});

/*EventListener for black keys*/
document.getElementById("w-key").addEventListener("click", function(e){
    let keyPressedAudio = new Audio("Audio/W.mp3");
    keyPressedAudio.play();
    highlightBlack("w-key");
});
document.getElementById("e-key").addEventListener("click", function(e){
    let keyPressedAudio = new Audio("Audio/E.mp3");
    keyPressedAudio.play();
    highlightBlack("e-key");
});
document.getElementById("t-key").addEventListener("click", function(e){
    let keyPressedAudio = new Audio("Audio/T.mp3");
    keyPressedAudio.play();
    highlightBlack("t-key");
});
document.getElementById("y-key").addEventListener("click", function(e){
    let keyPressedAudio = new Audio("Audio/Y.mp3");
    keyPressedAudio.play();
    highlightBlack("y-key");
});
document.getElementById("u-key").addEventListener("click", function(e){
    let keyPressedAudio = new Audio("Audio/U.mp3");
    keyPressedAudio.play();
    highlightBlack("u-key");
});
document.addEventListener("keydown", function(e){
    if (e.code == "KeyW"){
        let keyPressedAudio = new Audio("Audio/W.mp3");
        keyPressedAudio.play();
        highlightBlack("w-key");
    } else if (e.code == "KeyE"){
        let keyPressedAudio = new Audio("Audio/E.mp3");
        keyPressedAudio.play();
        highlightBlack("e-key");
    } else if (e.code == "KeyT"){
        let keyPressedAudio = new Audio("Audio/T.mp3");
        keyPressedAudio.play();
        highlightBlack("t-key");
    } else if (e.code == "KeyY"){
        let keyPressedAudio = new Audio("Audio/Y.mp3");
        keyPressedAudio.play();
        highlightBlack("y-key");
    } else if (e.code == "KeyU"){
        let keyPressedAudio = new Audio("Audio/U.mp3");
        keyPressedAudio.play();
        highlightBlack("u-key");
    }
});

/*Change style when key is pressed*/
function highlightBlack(id){
    let key = document.getElementById(id);
    let revertBG = key.style.backgroundColor;
    key.style.backgroundColor = "#383838";
    setTimeout(function(){
        key.style.backgroundColor = revertBG;
    }, 150);
}

function highlightWhite(id){
    let key = document.getElementById(id);
    let revertBG = key.style.backgroundColor;
    key.style.backgroundColor = "#D8D8D8";
    setTimeout(function(){
        key.style.backgroundColor = revertBG;
    }, 150);
}