var ship;
var monsters = [];
var shots = [];

function setup() {
    createCanvas(300, 300);
    ship = new Ship();
    for (var i = 0; i < 5; i++) {
        monsters.push(new Monster(i * 50 + 20));
    }
}

function draw() {
    background(51);
    var collision = false;

    for (var i in monsters) {
        var monster = monsters[i];
        monster.update();
        monster.show();


        if (!monster.between(0, width)) {
            collision = true;
        }
    }
    if (collision) {
        for (var i in monsters) {
            monsters[i].progress();
        }
    }

    for (var i = shots.length - 1; i >= 0; i--) {
        if (shots[i].isDead) {
            shots.splice(i, 1);
        } else {
            shots[i].update();
            shots[i].show();
            for (var j = monsters.length - 1; j >= 0; j--) {
                if (shots[i] && shots[i].hits(monsters[j])) {
                    monsters.splice(j, 1);
                    shots.splice(i, 1);
                }
            }
        }
    }
    ship.update();
    ship.show();
}

function keyReleased(){
    if (keyCode == RIGHT_ARROW) {
        ship.xdir = 0;
    }
    if (keyCode == LEFT_ARROW) {
        ship.xdir = 0;
    }
}

function keyPressed() {
    if (key == ' ') {
        var shot = new Shot(ship.x, height - 10);
        shots.push(shot);
    }
    if (keyCode == RIGHT_ARROW) {
        ship.xdir = 1;
    }
    if (keyCode == LEFT_ARROW) {
        ship.xdir = -1;
    }
}