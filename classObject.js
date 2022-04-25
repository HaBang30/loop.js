class circle {
    constructor (radius, color) {
        this.radius = radius;
        this.color = color;
    }
    getRadius() {
        return this.radius;
    }
    getArea() {
        let area = Math.PI * this.radius * this.radius;
        return area;
    }
    drawCircle() {
        let canvas = document.getElementById("canvas");
        let context = canvas.getContext("2d");
        context.beginPath();
        context.fillStyle = this.color;
        context.arc(175, 100, this.radius, 0, 2 * Math.PI);
        context.fill();
        context.strokeStyle = "purple";
        context.lineWidth = 5;
        context.stroke();
    }
}
