var audio = new Audio('content/audio.mp3');
audio.volume = 0.15;

let id = null;
let clicked = false;

const run_animation = () => {
    if (clicked == true) {
        return;
    }

    let alpha1 = 1.0;
    let alpha2 = 0.0;

    frame = () => {
        if (alpha1 == 0.0 && alpha2 == 1.0) {
            clearInterval(id);
        } else {
            alpha1 -= 0.2; 
            alpha2 += 0.1; 
            document.getElementById("entry-page").style.opacity = alpha1; 
            document.getElementById("entry-text").style.opacity = alpha1; 
            document.getElementById("main-container").style.opacity = alpha2; 
            document.getElementById("song").style.opacity = alpha2; 
        }
    }

    id = setInterval(frame, 20);
}

document.onclick = () => {
    if (clicked == true) {
        return;
    }

    document.getElementById("entry-page").style.zIndex = 0;
    run_animation();
    clicked = true;
    audio.play();
}