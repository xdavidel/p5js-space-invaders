function Ship() {
    this.x = width / 2;
    this.speed = 10;
    this.xdir = 0;

    this.update = () => {
        this.x += this.speed * this.xdir;
    }

    this.show = () => {
        noStroke();
        fill(240, 240, 240);

        rectMode(CENTER);
        rect(this.x, height - 30, 5, 10);
        ellipse(this.x, height - 25, 20, 15);
        rect(this.x, height - 20, 20, 10);
        rect(this.x - 25.5, height - 20, 5, 10);
        rect(this.x + 25.5, height - 20, 5, 10);
        rect(this.x, height - 10, 56, 10);
    }
}