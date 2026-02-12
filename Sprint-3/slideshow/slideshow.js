const images = [
    "./assets/wei_wuxian.webp",
    "./assets/lan_wangji.webp",
    "./assets/jiang_cheng.webp",
    "./assets/jin_ling.webp",
    "./assets/lan_sizhui.webp",
];


// Write your code here

let img = document.getElementById('carousel-img');
let attr = img.getAttribute('src');
let i = 0;

function setup() {
    img.src = images[i];

    forward();
    backward();
    autoForward();
    autoBack();
}

function moveForward() {
    if(i < images.length -1){
        i++;
        img.src = images[i];
    } else {
        i = 0;
        img.src = images[i];
    }
}

function moveBackward() {
    if(i > 0){
        i--;
        img.src = images[i];
    } else {
        img.src = images[images.length - 1]
        i = images.length - 1;
    }
}

function moveAutoForward() {
    moveForward();
}

function moveAutoBack() {
    moveBackward()
}

function forward() {
    document.getElementById('forward-btn').addEventListener('click', () => {
        moveForward();
    });
}

function backward() {
    document.getElementById('backward-btn').addEventListener('click', () => {
        moveBackward();
    });
}

function autoForward() {
    document.getElementById('auto-forward').addEventListener('click', () => {
        setInterval(moveAutoForward, 2000);
    })
}

function autoBack() {
    document.getElementById('auto-back').addEventListener('click', () => {
        setInterval(moveAutoBack, 2000);
    })
}

window.onload = setup;