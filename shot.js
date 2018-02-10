function Shot(x, y) {
    this.x = x;
    this.y = y;
    this.len = 10;
    this.isDead = false;

    this.update = () => {
        this.y -= 3;
        if (this.y < 0){
            this.isDead = true;
        }
    }

    this.show = () => {
        stroke(0, 204, 10);
        line(this.x, this.y, this.x, this.y + this.len);
    }

    this.hits = (monster) => {
        var d = dist(this.x, this.y + this.len, monster.x, monster.y);
        if (d < monster.r) {
            return true;
        } else {
            return false;
        }
    }
}