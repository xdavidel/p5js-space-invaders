function Monster(x) {
    this.x = x;
    this.y = 15;
    this.r = 20;
    this.xdir = 1;
    this.speed = 0.4;
    this.color = random(0, 255);

    this.update = () => {
        this.x += this.speed * this.xdir;
    }

    this.show = () => {
        noStroke();
        fill(255, this.color, 0);
        rect(this.x, this.y, this.r, this.r);
    }

    this.progress = () => {
        this.xdir *= -1;
        this.y += 6;
    }

    this.between = (a, b) => {
        return this.x - this.r > a && this.x + this.r < b;
    }
}