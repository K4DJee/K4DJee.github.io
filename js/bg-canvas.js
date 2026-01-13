const canvas = document.getElementById('background-canvas');
const ctx = canvas.getContext('2d');

let width, height;
function resizeCanvas() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

const balls = [];

function createBall() {
    return {
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 3 + 1, // от 1 до 4 px
        dx: (Math.random() - 0.5) * 1.5,
        dy: (Math.random() - 0.5) * 1.5,
        opacity: Math.random() * 0.4 + 0.1
    };
}

for (let i = 0; i < 100; i++) {
    balls.push(createBall());
}

function drawBalls() {
    ctx.clearRect(0, 0, width, height);
    for (let ball of balls) {
        ctx.beginPath();
        ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(120,115,245, ${ball.opacity})`;
        ctx.fill();

        ball.x += ball.dx;
        ball.y += ball.dy;

        if (ball.x < 0 || ball.x > width) ball.dx *= -1;
        if (ball.y < 0 || ball.y > height) ball.dy *= -1;
    }
    requestAnimationFrame(drawBalls);
}

drawBalls();