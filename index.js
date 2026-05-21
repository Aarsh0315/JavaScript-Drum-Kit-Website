let numberofdrums = document.querySelectorAll(".drum").length;

for (let i = 0; i < numberofdrums; i++) {

    document.querySelectorAll("button")[i]
    .addEventListener("click", function () {

        let buttonInnerHTML = this.innerHTML;
        makesound(buttonInnerHTML);

    });
}

document.addEventListener("keypress", function (event) {
    makesound(event.key);
});


function makesound(key) {

    switch (key) {

        case "w":
            let audio1 = new Audio("crash.mp3");
            audio1.play();
            break;

        case "a":
            let audio2 = new Audio("kick-bass.mp3");
            audio2.play();
            break;

        case "s":
            let audio3 = new Audio("snare.mp3");
            audio3.play();
            break;

        case "d":
            let audio4 = new Audio("tom-1.mp3");
            audio4.play();
            break;

        case "j":
            let audio5 = new Audio("tom-2.mp3");
            audio5.play();
            break;

        case "k":
            let audio6 = new Audio("tom-3.mp3");
            audio6.play();
            break;

        case "l":
            let audio7 = new Audio("tom-4.mp3");
            audio7.play();
            break;

        default:
            console.log(key);
    }
}
