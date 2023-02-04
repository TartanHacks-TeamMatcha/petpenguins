// document.body.style.color.backgroundColor='#00ffff';
const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');
const ctx = document.getElementById('canvas1');
console.log(ctx);
const w = canvas.width = 600;
const h = canvas.height = 600;

const spriteWidth = 100;
const spriteHeight = 101;

let s = users.toString();
let arr = s.split(';');
var filtered = arr.filter(s => (('A' <= s.charAt(0) && s.charAt(0) <= 'Z') || ('a' <= s.charAt(0) && s.charAt(0) <= 'z')));
filtered = filtered.filter(s => (s.charAt(0) != '&'));
filtered = filtered.map(s => (s.substring(0, s.length - 5)));
filtered = filtered.filter(s => ('A' <= s.charAt(0) && s.charAt(0) <= 'z'));
// console.log("filtered: " + filtered);
// var filtered2 = [];
// for(var i = 0; i < arr.length; i++) {
//     if(arr[i].charAt(0) != '&') {
//         filtered.push(arr[i].substring(0, arr[i].length-5));
//     }
// }
// console.log(filtered);

// console.log("len: " + filtered2)
// const usrs = users;   // to replace!
const locs = ['POS A35', 'La Prima', 'GHC 8012', 'Sorrels 4401', 'WEAN 2031'];
const x = [150, 200, 300, 350, 400, 450];
const y = [250, 260, 245, 270, 250, 260];

// fetch('test.json')
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .catch(error => console.log(error));

// console.log(usrs);

const playerImage = new Image();
playerImage.src = url1
const leftPlayerImage = new Image();
leftPlayerImage.src = url2
const iceberg = new Image()
iceberg.src = url3
const background = new Image()
background.src = url4
iceberg.onload = function() {
    c.drawImage(iceberg, 0, 200, w+30, h);
};

// c.drawImage(playerImage, 0, 0, w, h);
// console.log(playerImage);
const lens = [12, 7, 4, 6, 3, 4, 4]

function randInt(max) {
    return Math.floor(Math.random() * max);
}

console.log("rand: " + randInt(6));

class Penguin {
    constructor({x, y}, loc, name, i, j) {
        this.position = {x,y};
        this.velocity = {x: 0, y: 0}
        this.loc = loc
        this.name = name
        this.time = randInt(1000);
        this.i = i;
        this.j = j;
    }
    draw() {
        // draw image
        const j = this.j;
        if(this.i >= lens[j]) {this.i = 0;}
        c.drawImage(playerImage, spriteWidth*this.i, spriteHeight*j, spriteWidth, spriteHeight, this.position.x, this.position.y, w/3, h/3);

        // write name
        const centerX = this.position.x +110;
        const centerY = this.position.y +80;
        c.textAlign = "center";
        c.fillStyle = "#" + Math.floor(Math.random()*16777215).toString(16);
        c.font = "20px Comic Sans MS";
        c.fillText(this.name, centerX, centerY);
        c.font = "10px Comic Sans MS";
        c.fillText(this.loc, centerX, centerY+10);

        // update values
        if(this.time % 8 == 0) this.i++;
        if(this.time % 1000 == 0) this.j = randInt(7);
        this.time++;
    }

    update() {
        this.draw();
        const n = Math.random()
        if(this.position.x < 0 || this.position.x > 600 || this.position.y < 0 ||
            this.position.y > 600){
            this.position.x = (300+this.position.x)/2
            this.position.y = (300+this.position.y)/2
        }

        this.curve = Math.random() * 20 + 1
        this.angleSpeed = Math.random() * 15 + 10
        this.angle = 10
        this.position.x  += this.curve * Math.cos(this.angle * Math.PI/90) * 0.1 * (Math.random()-0.5)
        this.position.y  += this.curve * Math.cos(this.angle * Math.PI/270) * 0.1 * (Math.random()-0.5)
        this.angle += this.angleSpeed
    }
}
const p1 = new Penguin({x: 200, y: 250}, "GHC 8012", "Alice", 0, 5);
const p2 = new Penguin({x: 300, y: 250}, "POS A35", "Bob", 0, 2);
// p1.draw()
// p2.draw()
// c.drawImage(playerImage, spriteWidth*0, spriteHeight*1, spriteWidth, spriteHeight, 0,0, w/3, h/3);

class Iceberg {
    constructor(image) {
        this.position = {x: 200, y: 900}
        this.image = image;
        this.width = image.width;
        this.height = image.height;
    }

    draw() {
        c.drawImage(iceberg, -100, 250, w+200, h);
    }

    update() {
        this.draw();
    }
}
const ice = new Iceberg(iceberg);
ice.draw();

class Title {
    constructor() {
        this.position = {
            x: 300, 
            y: 100
        }
    }
        
    draw() {
        c.font = "50px Comic Sans MS";
        c.textAlign = "center";
<<<<<<< HEAD
        c.fillStyle = "Blue";
        // c.fillText("15-122", this.position.x, this.position.y)
=======
        c.fillStyle = 'rgb(150,150,255)';
        c.fillText("15-122", this.position.x, this.position.y)
>>>>>>> 35b99cb02f7f1e27225b22f759f143de6910c657
    }

    update(){
        this.draw();
    }
}
const ttl = new Title();

class Background {
    constructor(image) {
        this.image = image;
    }

    update(){
        c.drawImage(this.image, 0, 0, w, h)
    }
}
const bg = new Background(background);
// let i = 0;
// let j = 6;
// let times = 0;
// let x = 0;
// function draw(j) {
//     // if(j == 3) x+=2;
//     if(i >= lens[j]) {i = 0;}
//     c.drawImage(playerImage, spriteWidth*i, spriteHeight*j, spriteWidth, spriteHeight, x, 100, w/3, h/3);
//     if(times % 5 == 0) i++;
//     times++;
//     console.log(i);
// }

console.log("filtered: " + filtered)
// var n = usrs.length;
var l = filtered.length;
var penguins = []
let ind = 0;
for (var i = 0; i < l; i++) {
    console.log("aa " + filtered[i]);
    const ch = filtered[i].charAt(0);
    if('A' <= ch && ch <= 'z') {
        console.log("+++");
        const p = new Penguin({x: x[ind], y: y[ind]}, locs[ind], filtered[ind], 0, randInt(6));
        penguins.push(p)
        ind++;
    }
}
console.log("penguins: " + penguins);

function animate() {
    c.clearRect(0, 0, w, h);
    bg.update();
    ice.update();
    for(var i = 0; i < penguins.length; i++) {
        penguins[i].update();
    }
    ttl.update()
    console.log(p2.position.x);
    requestAnimationFrame(animate);
}
animate();
