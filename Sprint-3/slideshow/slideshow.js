const images = [
    "./assets/cute-cat-a.png",
    "./assets/cute-cat-b.jpg",
    "./assets/cute-cat-c.jpg",
];


// Write your code here

function moveForward() {
    let img = document.getElementById('carousel-img');
    let attr = img.getAttribute('src');

    for(let i = 0; i < images.length; i++){
        console.log(i);
        if(attr === images[i] && i !== images.length - 1) return img.src = images[i+1];
        

    }
}


function moveBackward() {

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

window.onload = forward;