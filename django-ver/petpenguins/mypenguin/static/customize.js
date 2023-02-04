const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');
const ctx = document.getElementById('canvas1');
const CANVAS_WIDTH = canvas.width = innerWidth;
const CANVAS_HEIGHT = canvas.height = innerHeight; 


const imageList= []

let img5 = new Image()
img.src = url5
let img6 = new Image()
img.src = url6
imageList.splice(0, 0, img5)
imageList.splice(0, 0, img6)


class Penguin {
    constructor() {
        this.position = {
            x: 700, 
            y: 300
        }
        this.width = 200;
        this.height = 200;
    }
    draw() {
        const rd = Math.floor(Math.random() * imageList.length);
        
        imageList[rd].onload = function(){
            c.drawImage(imageList[rd], 525, 125, 400, 400);
        }
        
    }
    update(){
        this.draw();
    }
}


class Title {
    constructor() {
        this.position = {
            x: 735, 
            y: 100
        }
        this.width = 400;
        this.height = 300;
    }
        
    draw() {
        c.font = "50px Comic Sans MS";
        c.textAlign = "center";
        c.fillStyle = "Navy";
        c.fillText("Choose Your Penguin!", this.position.x, this.position.y)
    }
}

const defaultPenguin = new Penguin();
defaultPenguin.draw()

const ttl = new Title()
ttl.draw()


c.drawImage(imageList[0], 100, 100);
console.log(imageList[0])

const btn = document.querySelector(".button-6");

btn.addEventListener("click", function () {
    c.clearRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT)
    ttl.draw()
    let newrd = Math.floor(Math.random() * imageList.length);
    c.drawImage(imageList[newrd], 525, 125, 400, 400);
});
