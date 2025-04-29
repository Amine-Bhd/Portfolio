// Matrix background effect
const canvas = document.getElementById('matrix');
const ctx = canvas.getContext('2d');

function initMatrix() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const katakana = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン';
    const latin = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const nums = '0123456789';
    const symbols = '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~';
    const binary = '01';
    
    const alphabet = katakana + latin + nums + symbols + binary;
    
    const fontSize = 16;
    const columns = canvas.width / fontSize;
    
    const rainDrops = [];
    
    for (let x = 0; x < columns; x++) {
        rainDrops[x] = 1;
    }
    
    function draw() {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        ctx.fillStyle = '#0f0';
        ctx.font = fontSize + 'px monospace';
        
        for (let i = 0; i < rainDrops.length; i++) {
            const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
            ctx.fillText(text, i * fontSize, rainDrops[i] * fontSize);
            
            if (rainDrops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                rainDrops[i] = 0;
            }
            rainDrops[i]++;
        }
        
        requestAnimationFrame(draw);
    }
    
    draw();
}

window.addEventListener('load', initMatrix);
window.addEventListener('resize', function() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});
