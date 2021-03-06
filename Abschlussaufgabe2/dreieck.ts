namespace Zauberbild {

    export class Dreieck extends Element {

        constructor() {
            super();
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.dx = Math.random() * 3;
            this.dy = Math.random() * 2;
            this.size = 10;
            this.r = Math.random() * 10 + 10;
        }
        draw(): void {
            let flosse1: Path2D = new Path2D();
            flosse1.moveTo(this.x + 10, this.y - 400);
            flosse1.lineTo(this.x + 50, this.y - 370);
            flosse1.lineTo(this.x + 50, this.y - 430);
            crc.fillStyle = "red";
            crc.fill(flosse1);
            crc.stroke(flosse1);
        }
        update(x: number, y: number): void {
            this.move(x, y);
            this.draw();
            console.log(this.x, this.y);
        }

        move(x: number, y: number): void {
           // this.x += this.dx;


            this.r += Math.random() * 2;
            if (this.r >= 40) {
                this.r -= Math.random() * 2;
            }

            this.y += y;
            this.x += x;
            //this.y += this.dy ;
            //if (this.x > canvas.width || this.x < 0 || this.y > canvas.height || this.y < 0) {

              //  this.x = 0;
               // this.y = canvas.height * Math.random();

            //}
           // console.log(this.x, this.y);
        }

    }
}
